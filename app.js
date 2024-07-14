// TASK 1) FUTBOLCHILARNI RO'YXATGA OLUVCHI FORMA YARATING TASK 2) ULARNI HTMLGA CHIQARING TASK 3) LOCALSTORAGE GA SAQLANG VA UNDAN OLING TASK 4)CLUB BO'YICHA FILTER QILING

const Form = document.querySelector('#Form');
const playerName = document.querySelector('#playerName');
const playerCity = document.querySelector('#playerCity');
const playerUrl = document.querySelector('#playerUrl');
const select = document.querySelector('#playersCategory');
const addBtn = document.querySelector('#addBtn');
const playersList = document.querySelector('#playersList');


const players= JSON.parse(localStorage.getItem('players')) ||[];


Form.addEventListener("submit", function (event) {
    event.preventDefault();
    const player = {
        name: playerName.value,
        city: playerCity.value,
        category: select.value,
        url: playerUrl.value,
    }
    players.push(player);
    localStorage.setItem('players', JSON.stringify(players));
    render();
    Form.reset();
})

function render() {
    playersList.innerHTML = '';
    for (let player of players) {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="flex gap-2 items-center margin-2 mb-2"><p>${player.name}</p><p>${player.city}</p></div>
        <img class="w-[100px] h-[100px]" src="${player.url}" alt="">
        <p>${player.category}</p>
        `
        playersList.appendChild(li);
    }
}





