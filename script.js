function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()* 16)];
    }
    return color;
}
let count=0;

let main = document.querySelector('main')

function load(){
    console.log('Card Added')
    for (var i = 0; i < 2; i++) {
        addCards();
    }
}
function addCards() {
    let newCard = document.createElement('div');
    newCard.className='card'
    newCard.style.backgroundColor = getRandomColor();
    newCard.innerHTML=++count;
    main.appendChild(newCard)
}
window.addEventListener('scroll', () => {
    console.clear()
    console.log('window.scrollY',window.scrollY)
    console.log('window.innerHeight',window.innerHeight)
    console.log('document.body.offsetHeight',document.body.offsetHeight)
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight+200) {
        load();
    }
});

load();