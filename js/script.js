//gsap
var tl = gsap.timeline();
//ScrollReveal
var sr = ScrollReveal();


if(screen.width > 600){
//caja1
tl.to(".caja1", {
    x: 200,
   duration: 2,
   borderRadius: 50,
   ease: Expo.easeOut,
   delay: 1.5,
   opacity: 1,
});

tl.to(".caja1", {
    y: 80,
   duration: 2,
   ease: Expo.easeOut,
},'-=2');

tl.to(".caja11", {
   duration: 1,
   opacity: 1,
});

//caja2
tl.to(".caja2", {
    x: 250,
   duration: 2,
   borderRadius: 50,
   ease: Expo.easeOut,
   opacity: 1,
},'-=3');

tl.to(".caja2", {
   y: -40,
  duration: 2,
  ease: Expo.easeOut,
},'-=3');

tl.to(".caja22", {
   duration: 1,
   opacity: 1,
},'-=1');

//caja3
tl.to(".caja3", {
    x: 200,
   duration: 2,
   borderRadius: 50,
   ease: Expo.easeOut,
   opacity: 1,
},'-=3');

tl.to(".caja3", {
   y: -150,
  duration: 2,
  ease: Expo.easeOut,
},'-=3');

tl.to(".caja33", {
   duration: 1,
   opacity: 1,
},'-=1');

//caja4
tl.to(".caja4", {
    x: -200,
   duration: 2,
   borderRadius: 50,
   ease: Expo.easeOut,
   opacity: 1,
},'-=3');

tl.to(".caja4", {
   y: -150,
  duration: 2,
  ease: Expo.easeOut,
},'-=3');

tl.to(".caja44", {
   duration: 1,
   opacity: 1,
},'-=1');

//caja5
tl.to(".caja5", {
    x: -250,
   duration: 2,
   borderRadius: 50,
   ease: Expo.easeOut,
   opacity: 1,
},'-=3');

tl.to(".caja5", {
   y: -40,
  duration: 2,
  ease: Expo.easeOut,
},'-=3');

tl.to(".caja55", {
   duration: 1,
   opacity: 1,
},'-=1');

//caja6
tl.to(".caja6", {
    x: -200,
   duration: 2,
   borderRadius: 50,
   ease: Expo.easeOut,
   opacity: 1,
},'-=3');

tl.to(".caja6", {
   y: 80,
  duration: 2,
  ease: Expo.easeOut,
},'-=3');

tl.to(".caja66", {
   duration: 1,
   opacity: 1,
},'-=1');

tl.to(".foto", {
   opacity: 1,
},'-=4');


//ScrollReveal


sr.reveal('.foto',{
    duration: 2000,
    origin: 'top',
    distance: '100%',
});

sr.reveal('.titulo',{
    duration: 2000,
    origin: 'top',
    distance: '100%',
});
sr.reveal('.subtitulo',{
    duration: 3000,
    delay: 2500,
});

sr.reveal('.titulos',{
    duration: 1300,
    origin: 'bottom',
    distance: '100%',
    reset: true,
});
sr.reveal('.contenedor-flexs',{
    duration: 1300,
    origin: 'left',
    distance: '100%',
    reset: true,
});
sr.reveal('.btnskills',{
    duration: 1300,
    origin: 'left',
    distance: '100%',
    reset: true,
});
sr.reveal('.contenedor-proyectos',{
    duration: 1300,
    origin: 'left',
    distance: '100%',
    reset: true,
});
sr.reveal('.contenedor-contactame',{
    duration: 1300,
    origin: 'left',
    distance: '100%',
    reset: true,
});
sr.reveal('.copy',{
    duration: 1300,
    origin: 'top',
    distance: '300%',
    reset: true,
});
sr.reveal('.manos',{
    duration: 1300,
    origin: 'bottom',
    distance: '100%',
    reset: true,
});
sr.reveal('.navegacion',{
    duration: 1300,
    origin: 'top',
    distance: '100%',
});
sr.reveal('.btn-changeMode',{
    duration: 1300,
    delay: 3000,
});
}

if(screen.width < 600){
    //caja1
    tl.to(".caja1", {
        x: 120,
       duration: 2,
       borderRadius: 50,
       ease: Expo.easeOut,
       delay: 1.8,
       opacity: 1,
    });
    
    tl.to(".caja1", {
        y: 50,
       duration: 2,
       ease: Expo.easeOut,
    },'-=2');
    
    tl.to(".caja11", {
       duration: 1,
       opacity: 1,
    });
    
    //caja2
    tl.to(".caja2", {
        x: 150,
       duration: 2,
       borderRadius: 50,
       ease: Expo.easeOut,
       opacity: 1,
    },'-=3');
    
    tl.to(".caja2", {
       y: -40,
      duration: 2,
      ease: Expo.easeOut,
    },'-=3');
    
    tl.to(".caja22", {
       duration: 1,
       opacity: 1,
    },'-=1');
    
    //caja3
    tl.to(".caja3", {
        x: 120,
       duration: 2,
       borderRadius: 50,
       ease: Expo.easeOut,
       opacity: 1,
    },'-=3');
    
    tl.to(".caja3", {
       y: -130,
      duration: 2,
      ease: Expo.easeOut,
    },'-=3');
    
    tl.to(".caja33", {
       duration: 1,
       opacity: 1,
    },'-=1');
    
    //caja4
    tl.to(".caja4", {
        x: -120,
       duration: 2,
       borderRadius: 50,
       ease: Expo.easeOut,
       opacity: 1,
    },'-=3');
    
    tl.to(".caja4", {
       y: -130,
      duration: 2,
      ease: Expo.easeOut,
    },'-=3');
    
    tl.to(".caja44", {
       duration: 1,
       opacity: 1,
    },'-=1');
    
    //caja5
    tl.to(".caja5", {
        x: -150,
       duration: 2,
       borderRadius: 50,
       ease: Expo.easeOut,
       opacity: 1,
    },'-=3');
    
    tl.to(".caja5", {
       y: -40,
      duration: 2,
      ease: Expo.easeOut,
    },'-=3');
    
    tl.to(".caja55", {
       duration: 1,
       opacity: 1,
    },'-=1');
    
    //caja6
    tl.to(".caja6", {
        x: -120,
       duration: 2,
       borderRadius: 50,
       ease: Expo.easeOut,
       opacity: 1,
    },'-=3');
    
    tl.to(".caja6", {
       y: 50,
      duration: 2,
      ease: Expo.easeOut,
    },'-=3');
    
    tl.to(".caja66", {
       duration: 1,
       opacity: 1,
    },'-=1');
    
    tl.to(".foto", {
        opacity: 1,
     },'-=4');


     //ScrollReveal
    
    sr.reveal('.foto',{
        duration: 2000,
        origin: 'top',
        distance: '100%',
    });
    
    sr.reveal('.titulo',{
        duration: 2000,
        origin: 'top',
        distance: '100%',
    });
    sr.reveal('.subtitulo',{
        duration: 3000,
        delay: 2500,
    });
    
    sr.reveal('.titulos',{
        duration: 1300,
        origin: 'bottom',
        distance: '100%',
        reset: true,
    });
    sr.reveal('.contenedor-flexs',{
        duration: 1300,
        origin: 'left',
        distance: '100%',
        reset: true,
    });
    sr.reveal('.btnskills',{
        duration: 1300,
        origin: 'left',
        distance: '100%',
        reset: true,
    });
    sr.reveal('.contenedor-proyectos',{
        duration: 1300,
        origin: 'left',
        distance: '100%',
        reset: true,
    });
    sr.reveal('.contenedor-contactame',{
        duration: 1300,
        origin: 'left',
        distance: '100%',
        reset: true,
    });
    sr.reveal('.copy',{
        duration: 1300,
        origin: 'top',
        distance: '300%',
        reset: true,
    });
    
    sr.reveal('.manos1',{
        duration: 1300,
        origin: 'left',
        distance: '100%',
        reset: true,
    });
    sr.reveal('.manos2',{
        duration: 1300,
        origin: 'right',
        distance: '100%',
        reset: true,
    });
    sr.reveal('.btn-changeMode',{
        duration: 1000,
        delay: 3000,
    });
    
}


let next = document.querySelector('.nextbtn');
let back = document.querySelector('.backbtn');

function clickNext(){
    tl.to(".skillsPrincipal", {
        x: -1200,
       duration: 1,
       ease: Expo.easeOut,
   });
    tl.to(".contenido-flex-principal", {
       ease: Expo.easeOut,
       display: 'none',
   },'-=.5');
    tl.to(".contenido-flex-secundario", {
       ease: Expo.easeOut,
       display: 'flex',
   });
   tl.from(".skillsSecundario", {
    x: 1200,
   duration: .5,
   ease: Expo.easeOut,
   });

    document.querySelector('.subtitulo-habilidades').innerHTML = 'COMPLEMENTARIAS';
    document.querySelector('.tnext').innerHTML = 'Regresar';
    document.querySelector('.nextbtn').style.display = 'none';
    document.querySelector('.backbtn').style.display = 'inline-block';
    document.querySelector('.backbtn').style.animation = 'rotar 1.5s linear';
}

function clickBack(){
    tl.to(".skillsSecundario", {
     x: 1200,
    duration: 1,
    ease: Expo.easeOut,
    });
    tl.to(".contenido-flex-secundario", {
       ease: Expo.easeOut,
       display: 'none',
   },'-=.5');
   tl.to(".contenido-flex-principal", {
      ease: Expo.easeOut,
      display: 'flex',
  });
    tl.to(".skillsPrincipal", {
        x: 0,
       duration: .5,
       ease: Expo.easeOut,
   });
   tl.to(".skillsSecundario", {
    x: 0,
   duration: 1,
   ease: Expo.easeOut,
   });

    document.querySelector('.subtitulo-habilidades').innerHTML = 'PRINCIPALES';
    document.querySelector('.tnext').innerHTML = 'Otras habilidades';
    document.querySelector('.nextbtn').style.display = 'inline-block';
    document.querySelector('.backbtn').style.display = 'none';
    document.querySelector('.nextbtn').style.animation = 'rotar2 1.5s linear';
}

next.addEventListener('click',clickNext);
back.addEventListener('click',clickBack);


let menuDesplegable = document.querySelector('.menu-desplegable');
let plegarMenu1 = document.querySelector('.plegar1');
let plegarMenu2 = document.querySelector('.plegar2');
let plegarMenu3 = document.querySelector('.plegar3');
let plegarMenu4 = document.querySelector('.plegar4');
let botonMenu = document.querySelector('.menu');
botonMenu.addEventListener('click', desplegar);
plegarMenu1.addEventListener('click', plegar);
plegarMenu2.addEventListener('click', plegar);
plegarMenu3.addEventListener('click', plegar);
plegarMenu4.addEventListener('click', plegar);

function desplegar(){
    menuDesplegable.classList.toggle('activado');
}

function plegar(){
    menuDesplegable.classList.toggle('activado');
}

// changeMode

let btnChangeMode = document.querySelector('.btn-changeMode');
let body = document.querySelector('body');
let nextbtn = document.querySelector('.nextbtn');
let backbtn = document.querySelector('.backbtn');
btnChangeMode.addEventListener('click', changeMode);

function changeMode() {
    body.classList.toggle('changeMode');
    document.querySelector('.menu').classList.toggle('menu-changeMode');
    document.querySelector('.nextbtn').classList.toggle('nextbtn-changeMode');
    document.querySelector('.backbtn').classList.toggle('backbtn-changeMode');
    document.querySelector('.red-instagram').classList.toggle('red-instagram-changeMode');
    document.querySelector('.red-twetter').classList.toggle('red-twetter-changeMode');
    document.querySelector('.red-whatsapp').classList.toggle('red-whatsapp-changeMode');
    document.querySelector('.red-linkedin').classList.toggle('red-linkedin-changeMode');
    document.querySelector('.red-facebook').classList.toggle('red-facebook-changeMode');
    document.querySelector('.red-gmail').classList.toggle('red-gmail-changeMode');
    document.querySelector('.manos1').classList.toggle('manos1-changeMode');
    document.querySelector('.manos2').classList.toggle('manos2-changeMode');
    document.querySelector('.carta-portafolio').classList.toggle('portafolio-changeMode');
    btnChangeMode.classList.toggle('btn-change-solyluna');
}