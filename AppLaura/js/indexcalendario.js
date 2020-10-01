angular.module('prueba', ['ui.calendario']);
angular.module('prueba').controller('calendarioPrueba', ['$scope', function($scope) {
  $scope.eventos = [{
    timestamp: 1464145200000,
    evento: 'Revolución de Mayo',
    tipo: 'feriado'
  }, {
    timestamp: 1462071600000,
    evento: 'Día Internacional del Trabajador',
    tipo: 'feriado'
  }, {
    timestamp: 1459566000000,
    evento: 'Día Nacional de la Memoria por la Verdad y la Justicia.',
    tipo: 'feriado'
  }, {
    timestamp: 1458788400000,
    evento: 'Día del Veterano y de los Caídos en la Guerra de Malvinas.',
    tipo: 'feriado'
  }, {
    timestamp: 1460520938000,
    evento: 'Reunión de padres.',
    tipo: 'reunion'
  }];
  $scope.borrar_evento  = function(idx){
    $scope.eventos.splice(idx,1);
  }
  $scope.agregar_evento  = function(){
    $scope.eventos.push({evento:$scope.nuevo_evento.evento,
                        tipo:$scope.nuevo_evento.tipo,
                        timestamp:$scope.nuevo_evento.timestamp});
  }
  
  $scope.inicio = new Date(2016, 2, 1);
  $scope.fin = new Date(2016, 6, 1);
}]);
var CalUtiles = (function() {
  "use strict";

  function CalUtiles() {

  }
  CalUtiles.prototype.normalizarEventos = function normalizarEventos(eventos) {
      //calcular promedio
      var prom = 0;
      for (var i = eventos.length - 1; i >= 0; i--) {
        prom += eventos[i].timestamp;
      }
      var avg = prom / avg;
      //filtrar año y medio
      var anio_y_medio = 31536000 + (31536000 * 0.5);
      //no promediado
      var hoy = new Date().getTime();
      var eventos_filtrados = [];
      for (var i = eventos.length - 1; i >= 0; i--) {
        if (!eventos[i].timestamp ||
          eventos[i].timestamp > hoy + anio_y_medio ||
          eventos[i].timestamp < hoy - anio_y_medio
        ) {
          eventos_filtrados.push(eventos[i]);
        }
      }
      eventos_filtrados.sort(function(a, b) {
        return a.timestamp - b.timestamp;
      });
      return eventos_filtrados;
    }
    // Dias de la semana empezando en domingo
  var diasDeLaSemana = [
    'Dom',
    'Lun',
    'Mar',
    'Mie',
    'Jue',
    'Vie',
    'Sab'
  ];

  // Meses
  var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  CalUtiles.prototype.getMes = function(i) {
    return meses[i];
  }
  CalUtiles.prototype.getDiaDeLaSemana = function(i) {
    return diasDeLaSemana[i];
  }
  CalUtiles.prototype.generarCalendario = function generarCalendario(eventos, desde, hasta) {

    desde = desde || new Date(eventos[0].timestamp * 1000);
    hasta = hasta || new Date(eventos[eventos.length - 1].timestamp * 1000);
    var mes_desde = desde.getMonth();
    var mes_hasta = hasta.getMonth();
    var anio_desde = desde.getFullYear();
    var anio_hasta = hasta.getFullYear();
    var calendario = [];
    for (var j = anio_desde; j <= anio_hasta; j++) {
      var inicio, fin;
      if (anio_desde == j) {
        inicio = mes_desde;
      } else {
        inicio = 0;
      }
      if (anio_hasta == j) {
        fin = mes_hasta;
      } else {
        fin = 11;
      }
      for (var i = inicio; i <= fin; i++) {
        var _eventos = [];
        for (var x = 0; x < eventos.length; x++) {
          var _mes = new Date(eventos[x].timestamp).getMonth();
          var _anio = new Date(eventos[x].timestamp).getFullYear();
          if (_anio == j && _mes == i) {
            _eventos.push(eventos[x]);
          }
        }
        calendario.push(obtener_mes(j, i, _eventos));
      }
    }

    return calendario;
  }

  function obtener_mes(y, m, eventos) {
    var primerDia = new Date(y, m, 1).getDay();
    var total = new Date(y, m + 1, 0).getDate();
    var eventos_fechas = [];
    for (var x = 0; x < eventos.length; x++) {
      eventos_fechas.push(new Date(eventos[x].timestamp).getDate());
    }
    return {
      nombre: meses[m],
      mes: m,
      anio: y,
      primerDia: primerDia,
      total: total,
      eventos: eventos,
      diaTipo: function(dia) {
        for (var x = 0; x < eventos_fechas.length; x++) {
          if (dia == eventos_fechas[x]) {
            if (eventos[x].tipo == 'feriado') {
              return 'dia--feriado';
            } else if (eventos[x].tipo == 'reunion') {
              return 'dia--reunion';
            }
          }
        }
        return 'dia--normal';
      }
    };
  }
  return CalUtiles;
})();
angular.module('ui.calendario', []);
angular.module('ui.calendario').directive('calendarioRangos', function() {
  return {
    restrict: 'E',
    scope: {
      eventos: '=',
      fechaInicio: '=',
      fechaFin: '='
    },
    template: '<div class="calendario">' +
      '  <div class="calendario-titulo">' +
      '    <h2>{{mesDesde}} {{anioDesde}} - {{mesHasta}}  {{anioHasta}}</h2>' +
      '  </div>' +
      '  <div class="mes" ng-repeat="mes in meses" ng-class="{\'clear-fix\':$index % 2 == 0}">' +
      '    <h4 class="mes-title">{{mes.nombre}} - {{mes.anio}}</h4>' +
      '    <table class="mes-body">' +
      '      <tr>' +
      '        <th>D</th>' +
      '        <th>L</th>' +
      '        <th>M</th>' +
      '        <th>M</th>' +
      '        <th>J</th>' +
      '        <th>V</th>' +
      '        <th>S</th>' +
      '      </tr>' +
      '      <tr ng-repeat="sem in mes.semanas">' +
      '        <td ng-class="sem.dias[0].clase">{{sem.dias[0].numero}}</td>' +
      '        <td ng-class="sem.dias[1].clase">{{sem.dias[1].numero}}</td>' +
      '        <td ng-class="sem.dias[2].clase">{{sem.dias[2].numero}}</td>' +
      '        <td ng-class="sem.dias[3].clase">{{sem.dias[3].numero}}</td>' +
      '        <td ng-class="sem.dias[4].clase">{{sem.dias[4].numero}}</td>' +
      '        <td ng-class="sem.dias[5].clase">{{sem.dias[5].numero}}</td>' +
      '        <td ng-class="sem.dias[6].clase">{{sem.dias[6].numero}}</td>' +
      '      </tr>' +
      '    </table>' +
      '  </div>' +
      '</div>',
    link: function(scope) {
      dibujar(scope.fechaInicio, scope.fechaFin, scope.eventos);
      scope.$watch('fechaInicio', function(newValue, oldValue) {
        if(newValue != oldValue)
          dibujar(newValue, scope.fechaFin, scope.eventos);
      });
      scope.$watch('fechaFin', function(newValue, oldValue) {
        if(newValue != oldValue)
          dibujar(scope.fechaInicio, newValue, scope.eventos);
      });
      scope.$watchCollection('eventos', function(newValue, oldValue) {
          dibujar(scope.fechaInicio, scope.fechaFin, newValue);
      });
      function dibujar(fechaInicio, fechaFin, eventos){
        if(!fechaInicio)
          return;
        if(!fechaFin)
          return;
        if(fechaInicio > fechaFin)
          return;
        if(eventos.length == 0)
          return;
        console.log("qweq");
        var util = new CalUtiles();
        var fecha_inicio = new Date(fechaInicio);
        var fecha_fin = new Date(fechaFin);
        scope.mesDesde = util.getMes(fecha_inicio.getMonth());
        scope.anioDesde = fecha_inicio.getFullYear();
        scope.mesHasta = util.getMes(fecha_fin.getMonth());
        scope.anioHasta = fecha_fin.getFullYear();
        var eventos_normalizados = util.normalizarEventos(eventos);
        var result = util.generarCalendario(eventos_normalizados, fechaInicio, fechaFin);
        scope.meses = result;
        for (var m_i in scope.meses) {
          scope.meses[m_i].semanas = [];
          var diaInicio = scope.meses[m_i].primerDia;
          var diaActual = 1;
          for (var i = 0; i < Math.ceil((diaInicio + scope.meses[m_i].total) / 7); i++) {
            var dias = [];
            for (var j = 0; j < 7; j++) {
              if (i == 0) {
                if (j < diaInicio) {
                  dias.push({
                    clase: 'dia--vacio'
                  });
                } else {
                  var event_aux = scope.meses[m_i].diaTipo(diaActual);
                  dias.push({
                    numero: diaActual,
                    clase: event_aux
                  });
                  diaActual++;
                }
              } else {
                if (diaActual <= scope.meses[m_i].total) {
                  var event_aux = scope.meses[m_i].diaTipo(diaActual);
                  dias.push({
                    numero: diaActual,
                    clase: event_aux
                  });
                  diaActual++;
                } else {
                  dias.push({
                    clase: 'dia--vacio'
                  });
                }
              }
            }
            scope.meses[m_i].semanas.push({
              num: i,
              dias: dias
            });
          }
        }
        
      }

    }
  };
});