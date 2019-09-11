// Your code goes hereimg-content

const navZoomInAndOut = document.querySelectorAll('nav a');
navZoomInAndOut.forEach((navigation) => {
    navigation.addEventListener('mouseover', (event) => {
        navigation.style.transform = 'scale(1.6)';
        navigation.style.transition = 'transform 0.5s';
        navigation.style.color = 'blue';
    });
    navigation.addEventListener('mouseout', (event) => {
        navigation.style.transform = 'scale(1.0)';
        navigation.style.transition = 'transform 0.5s';
        navigation.style.color = '';
    });
});

const button = document.querySelectorAll('.btn');
button.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.target.style.background = 'seagreen';
        event.target.style.color = 'yellow';
    })
    element.addEventListener('dblclick', (event) => {
        event.target.style.background = '';
        event.target.style.color = '';
    })

});

const imgEvent = document.querySelectorAll('p');
imgEvent.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
        event.target.style.border = '5px solid lightgray';
        event.target.style.transform = 'scale(1.5)';
        event.target.style.color = 'brown';
    })
    element.addEventListener('mouseup', (event) => {
        event.target.style.border = '';
        event.target.style.transform = '';
        event.target.style.color = '';
    })
});
/*const body = document.querySelector('body');
body.addEventListener('wheel', function alertMeOnce(){
    alert("Wheeeeeeeeeellll!!!!!!!");
    body.removeEventListener('wheel', alertMeOnce);
});*/
const h2El = document.querySelectorAll('h2');
h2El.forEach((element) => {
    window.addEventListener('load', () => {
        element.style.color = 'green';
    });
})

const imgEs = document.querySelectorAll('img');
imgEs.forEach((element) => {
    element.addEventListener('click', () => {
        element.style.transform = 'scale(1.9)';
        element.style.transition = 'transform 0.9s';
        element.style.border = '2px solid lightgray'
    });
    element.addEventListener('dblclick', () => {
        element.style.transform = '';
        element.style.border = ''
    });
    
})

const p = document.querySelectorAll('p');
    	p.forEach((paragraph) => {
    paragraph.addEventListener('copy', event =>{
        alert('DO NOT COPY!');
    }) 
})
window.addEventListener('scroll', () => {
    const navLogo = document.querySelector('.container h1');
    const navA = document.querySelectorAll('.nav a');
    const mainNav = document.querySelector('.main-navigation');
    
    if (window.pageYOffset > 0) {
        navLogo.style.fontSize = '3rem';
        mainNav.style.color = 'white';
        mainNav.style.background = 'DimGray ';
        mainNav.style.height = '60px';
        navA.style.color = 'white';
    } else {
        navLogo.style.fontSize = '4rem';
        mainNav.style.color = '';
        mainNav.style.background = '';
        mainNav.style.height = '';
    }
});

const preventA = document.querySelectorAll("a");
preventA.forEach((a) => {
    a.addEventListener("click", function(event) {
      alert('Its broken')
      event.preventDefault();
      event.stopPropagation();
    });
});