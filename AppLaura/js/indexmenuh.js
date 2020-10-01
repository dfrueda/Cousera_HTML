'use strict'
let $ = document.querySelector.bind(document);

window.onload = () => {
            // autorefresh navigator
//setTimeout(() => location.reload('false'),10000);//
$('#menu').onclick = () => {                $('body').classList.toggle('active'); //set class magic animation
 console.log('click');
 }
}