let buttonsContainer = document.getElementById('buttons-container');
let buttonAdder = document.getElementById('buttons-adder');
let valueButtons = document.getElementById("buttons");
let buttonsValue = valueButtons.value
let RandomNumber = Math.floor((Math.random() * buttonsValue) + 1);

function generateButtons(container, quantity) {
	let buttons = document.createDocumentFragment();
  
	for (let i = 1; i <= quantity; i++) {
  	let newButton = document.createElement('button'); 

    newButton.setAttribute('id', i);
    if(i == RandomNumber){
        newButton.setAttribute("onclick", "Winner()");
    } else {
        newButton.setAttribute("onclick", "Loser()");
    }
    newButton.innerHTML = 'Button ' + i;
    
    buttons.appendChild(newButton);

  }
  
  buttonsContainer.appendChild(buttons);

}

function Winner(){
    alert("winner");
}

function Loser(){
    alert("loser");
}

buttonAdder.addEventListener('click', () => {
     generateButtons(buttonsContainer, buttonsValue);
});
