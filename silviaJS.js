/* Una funcion que vuelve a esconder el menu
desplegado porque sino no se puede ver
la sección hero */
let cajaChequeo = document.getElementById('caja-chequeo');
let btnInicio = document.querySelector('.a-li-menu');
btnInicio.addEventListener('click',()=>{
  cajaChequeo.checked = false;
});

/* El siguiente codigo esta relacionado con
la sección productos: Un carrusel */

// Variables llamadas del Dom
let carrousel = document.getElementById('carrusel');
let former = document.getElementById('atras');
let later = document.getElementById('adelante');
let theImg = document.getElementById('img-movibles');

// Imágenes y variable para posición del array
let allImg = ["./img-silvia/planta2.png", "./img-silvia/macetas.png", "./img-silvia/pecera.png", "./img-silvia/logo-silvia.png"];
let thePosition = 0;

// Background estilo fijo
theImg.style.backgroundPosition = 'center';
theImg.style.backgroundSize = 'cover';
theImg.style.backgroundImage = `url(${allImg[0]})`;

/* Aca hago el descuento o la suma segun el
click que sea, y esa va a ser la posicion
del array. Para el cambio de imagen, le digo
que la url del backgrounImg va a ser la 
posicion del array, y obviamente el array
contiene las direcciones y archivos que
se van a mostrar */

former.addEventListener('click', ()=>{
  thePosition -= 1;
  theImg.style.backgroundImage = `url(${allImg[thePosition]})`;
  if(thePosition <=0){
    theImg.style.backgroundImage = `url(${allImg[0]})`;
    thePosition = 0;
  }
});
later.addEventListener('click', ()=>{
  thePosition += 1;
  theImg.style.backgroundImage = `url(${allImg[thePosition]})`;
  if(thePosition > 3){
    theImg.style.backgroundImage = `url(${allImg[3]})`;
    thePosition = 3;
    later.addEventListener('click', null);
  }
});