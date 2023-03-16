let buttons = [
    {id: '1', image: 'images/bg1.jpg', cornerImage: 'images/1.jpg', value: 0},
    {id: '2', image: 'images/bg2.jpg', cornerImage: 'images/2.jpg', value: 0},
    {id: '3', image: 'images/bg3.jpg', cornerImage: 'images/3.jpg', value: 0}
]

let container = document.querySelector('.container');
let corner = document.querySelector('.corner');
let knop = false;

buttons.forEach(function(button) {
    let buttonElement = document.getElementById(button.id);
    buttonElement.addEventListener('click', function() {

        if (knop) {
            knop.classList.remove('active')
            knop.disabled = false;
        }

        buttonElement.classList.add('active')

        container.style.backgroundImage = `url("${button.image}")`;
        corner.style.backgroundImage = `url("${button.cornerImage}")`;
        button.value += 1;
        updateValue(button);

        buttonElement.disabled = true;
        knop = buttonElement
  });
});

function updateValue(button){
    let valueElement = document.getElementById(button.id);
    valueElement.innerText = button.value
}