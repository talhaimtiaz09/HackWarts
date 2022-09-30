let faqExpand = document.querySelectorAll('.expand')
let answer = document.querySelectorAll('.answers')
let questions = document.querySelectorAll('.ques')
const deleteButton = document.querySelectorAll('.deleteButton')

document.querySelector('button').addEventListener('click', deleteContribution)

Array.from(deleteButton).forEach(el => {
    el.addEventListener('click', deleteContribution)
})

faqExpand.forEach((element,index) => {
    element.addEventListener('click',() => {
        questions[index].classList.toggle('overflow-hidden')
        answer[index].classList.toggle('translate-y-12')
        answer[index].classList.replace('-z-10','z-10')
    }) 
})

async function deleteContribution(){
    
    const cloudinaryID = this.parentNode.parentNode.childNodes[9].innerText
    try{
        const response = await fetch('/deleteContribution', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'cloudinID': cloudinaryID })
        })
        const data = await response.json()
        console.log(data)
        window.location.reload()
    }
    catch(err){
        console.error(err)
    }
}
