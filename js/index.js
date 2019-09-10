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



