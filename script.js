
let btnCheck = document.querySelector('.buttonCheck');
let inputCompleteDate = document.querySelector('.completeDate');
let result = document.querySelector('h1')


btnCheck.addEventListener('click', (event) => {
    let completeDate = inputCompleteDate.value;
    result.innerText = moment(`${completeDate}`, 'MM/DD/YYYY', true).isValid();
})

