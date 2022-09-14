let faqExpand = document.querySelectorAll('.expand')
let answer = document.querySelectorAll('.answers')
let questions = document.querySelectorAll('.ques')

faqExpand.forEach((element,index) => {
    element.addEventListener('click',() => {
        questions[index].classList.toggle('overflow-hidden')
        answer[index].classList.toggle('translate-y-12')
        answer[index].classList.replace('-z-10','z-10')
    }) 
})
