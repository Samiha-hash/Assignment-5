


// blog connected to DOM

document.getElementById('blog-button').addEventListener('click', function () {
    window.location.href = './blog.html'
    
})




// function:

function forAllInput(id) {
    return parseFloat(document.getElementById(id).value);
}

function firstInnerText(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function mainBalance(id) {
    return parseFloat(document.getElementById(id).innerText)
}


// card-one-donation:

document.getElementById('first-donation')
    .addEventListener('click', function () {

        const firstInput = forAllInput('first-input');
        const firstCard = firstInnerText('first-balance');
        const totalBalance = mainBalance('main-balance');

        if (firstInput === 0 || firstInput < 0) {
            alert('Invalid ! Please try again!')
        }


        else if (isNaN(firstInput)) {
            alert('Invalid ! Please try again!')
            return;
        }



        const addedAmount = firstCard + firstInput;
        if (firstInput > totalBalance) {
            alert('Invalid ! Please try again!')
            return;
        }
        document.getElementById('first-balance').innerText = addedAmount;
        const minBalance = totalBalance - firstInput;
        if (minBalance < 0) {
            alert('Invalid ! Please try again!')
        }

        document.getElementById('main-balance').innerText = minBalance;

        document.getElementById('first-input').value = ''

        const modal = document.getElementById('my_modal_1')
        modal.showModal()

        createHistory(firstInput);


    })


// card-two-donation:

document.getElementById('second-donation')
    .addEventListener('click', function () {

        const secondInput = forAllInput('second-input');
        const secondCard = firstInnerText('second-balance');
        const totalBalance = mainBalance('main-balance');

        if (secondInput === 0 || secondInput < 0) {
            alert('Invalid ! Please try again!')
        }

        else if (isNaN(secondInput)) {
            alert('Invalid ! Please try again!')
            return;

        }


        const addedAmount = secondCard + secondInput;
        if (secondInput > totalBalance) {
            alert('Invalid ! Please try again!')
            return;
        }
        document.getElementById('second-balance').innerText = addedAmount;
        const minBalance = totalBalance - secondInput;
        if (minBalance < 0) {
            alert('Invalid ! Please try again!')
        }

        document.getElementById('main-balance').innerText = minBalance;

        document.getElementById('second-input').value = ''

        const modal = document.getElementById('my_modal_1')
        modal.showModal()

        createHistory2(secondInput)

    })


// card-third-donation

document.getElementById('third-donation')
    .addEventListener('click', function () {

        const thirdInput = forAllInput('third-input');
        const thirdCard = firstInnerText('third-balance');
        const totalBalance = mainBalance('main-balance');
        if (thirdInput === 0 || thirdInput < 0) {
            alert('Invalid ! Please try again!')
        }



        else if (isNaN(thirdInput)) {
            alert('Invalid ! Please try again!')
            return;

        }

        const addedAmount = thirdCard + thirdInput;
        if (thirdInput > totalBalance) {
            alert('Invalid ! Please try again!')
            return;
        }
        document.getElementById('third-balance').innerText = addedAmount;
        const minBalance = totalBalance - thirdInput;
        if (minBalance < 0) {
            alert('Invalid ! Please try again!')
        }

        document.getElementById('main-balance').innerText = minBalance;

        document.getElementById('third-input').value = ''

        const modal = document.getElementById('my_modal_1')
        modal.showModal()

        createHistory3(thirdInput)


    })


    function hideElement(id){
        document.getElementById('history-section').classList.add('hidden')
        document.getElementById(id).classList.remove('hidden')
    
        document.getElementById('donate-section').classList.add('hidden')
        document.getElementById(id).classList.remove('hidden')
    }
    

    document.getElementById('history').addEventListener('click', function(){
        document.getElementById('donate').classList.remove('bg-lime-400')
        document.getElementById('history').classList.add('bg-[#B4F461]')
        document.getElementById('footer').classList.add('hidden')
    })
    document.getElementById('donate').addEventListener('click', function(){
        document.getElementById('history').classList.remove('bg-[#B4F461]')
        document.getElementById('donate').classList.add('bg-[#B4F461]')
        document.getElementById('footer').classList.remove('hidden')
    })

    document.getElementById('donate').addEventListener('click', function(){
        hideElement('donate-section')
    })
    
    document.getElementById('history').addEventListener('click', function(){
        hideElement('history-section')
    })

hideElement()








