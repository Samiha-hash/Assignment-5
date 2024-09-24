

// history

// 1.

function createHistory(Amount) {
    const historySection = document.getElementById('history-section')
    const d = new Date();
    let text = d.toString();
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="border border-slate-100 rounded-lg p-5 py-8 mb-3">
        <p class=" text-xl font-bold"> ${Amount} Taka is Donated for Aid for Injured in the Quota Movement </p>
        <p class="text-lg pt-2"> Date : ${text} </p>
        </div>
        `
        historySection.appendChild(div)

}

// 2.

function createHistory2(Amount) {
    const historySection = document.getElementById('history-section')
    const d = new Date();
    let text = d.toString();
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="border border-slate-100 rounded-lg p-5 py-8 mb-3">
        <p class=" text-xl font-bold"> ${Amount} Taka is Donated for Aid for Injured in the Quota Movement </p>
        <p class="text-lg pt-2"> Date : ${text} </p>
        </div>
        `
        historySection.appendChild(div)

}

// 3.

function createHistory3(Amount) {
    const historySection = document.getElementById('history-section')
    const d = new Date();
    let text = d.toString();
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="border border-slate-100 rounded-lg p-5 py-8 mb-3">
        <p class=" text-xl font-bold"> ${Amount} Taka is Donated for Aid for Injured in the Quota Movement </p>
        <p class="text-lg pt-2"> Date : ${text} </p>
        </div>
        `
        historySection.appendChild(div)

}







document.getElementById('index-button').addEventListener('click', function(){
    window.location.href = './index.html'
  
})
