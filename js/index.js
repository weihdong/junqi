var buttons = document.querySelectorAll('.change');
var resetButton = document.getElementById('resetBtn');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        this.classList.toggle('changed');
    });
});
resetButton.addEventListener('click', ()=> {
    buttons.forEach(button => {
        button.classList.remove('changed');
    });
});