
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let shuffleSortElement = document.getElementById('shuffleSort');

numbers.forEach((item, index) => {
    shuffleSortElement.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
})

document.getElementById('btnShuffle').addEventListener('click', event => {
    numbers = numbers.sort(() => { return .5 - Math.random() });
    shuffleSortElement.innerHTML = ''
    let html = ''
    for (let i = 0; i < numbers.length; i++) {
        html += `<li data-item=${numbers[i]}>${numbers[i]}</li>`;
    }
    shuffleSortElement.innerHTML = html;
})

document.getElementById('btnSort').addEventListener('click', event => {
    numbers = numbers.sort((a, b) => { return a - b });
    shuffleSortElement.innerHTML = ''
    let html = ''
    for (let i = 0; i < numbers.length; i++) {
        html += `<li data-item=${numbers[i]}>${numbers[i]}</li>`;
    }
    shuffleSortElement.innerHTML = html;
})
