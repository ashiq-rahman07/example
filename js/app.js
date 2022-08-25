
const playerCart = [];


// Push Sected Player function
function displaySelectedPlayer() {
    const totalPlayers = document.getElementById('total-players');

    totalPlayers.innerText = playerCart.length;


    const playerContainer = document.getElementById('player-cart');
    playerContainer.textContent = '';


    for (let i = 0; i < playerCart.length; i++) {

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${playerCart[i].PlayerName}</td>

        `;

        playerContainer.appendChild(tr);
    }
}




// selcte button onclick handler

function selectPlayer(element) {

    const PlayerName = element.parentNode.children[0].innerText;

    const player = {
        PlayerName: PlayerName,
    }
    const displayFive = document.getElementById('display-msg');

    if (playerCart.length < 5) {
        playerCart.push(player);
        element.setAttribute('disabled', true);

    } else {
        alert('Warning : Do Not Select more than 5 player');

        displayFive.style.display = 'block';
    }

    displaySelectedPlayer();


}

//common inputField  function 

function getInputField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldStr = inputField.value;
    const inputPrice = parseFloat(inputFieldStr);


    return inputPrice;

}

// Calculate per player price eventHandler

document.getElementById('btn-calculate').addEventListener('click', function (event) {

    event.preventDefault();
    const perPlayerPrice = getInputField('player-price');

    if (isNaN(perPlayerPrice) || perPlayerPrice === '') {
        alert('Please Put in number value')
        perPlayerPrice.value = '';
    }
    else {
        const totalPlayerPrice = playerCart.length * perPlayerPrice;
        const playerExpense = document.getElementById('player-expense');
        playerExpense.innerText = totalPlayerPrice;
    }





})

//calculate total expense event handler

document.getElementById('btn-total').addEventListener('click', function () {
    const manegerPrice = getInputField('maneger-price');
    const coachPrice = getInputField('coach-price');

    const perPlayerPrice = getInputField('player-price');
    const totalExpense = document.getElementById('total-expense');



    if (isNaN(manegerPrice) || manegerPrice === '' || isNaN(coachPrice) || coachPrice === '') {
        alert('Warning: Put Only Number Value')
    } else {
        const totalPlayerPrice = playerCart.length * perPlayerPrice;

        const totalExpenseCalculate = totalPlayerPrice + manegerPrice + coachPrice;
        totalExpense.innerText = totalExpenseCalculate;
    }



})