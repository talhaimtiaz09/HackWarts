let nav=document.querySelector('[data-ul]')
let menu=document.querySelector('#menuIcon')
let dimScreen=document.querySelector('#dimScreen')
let li_s=document.querySelectorAll('.li')
let faqExpand = document.querySelectorAll('.expand')
let faqCollapse = document.querySelectorAll('.collapse')
let answerP = document.querySelectorAll('.answer-p')
let answerContainer = document.querySelectorAll('.answer-container')
let hLine = document.querySelectorAll('.h-line')
let questions = document.querySelectorAll('.ques')
let betaNote=document.querySelector('#beta-note')
let betaBtn=document.querySelector('#beta-btn')
let betaArrowIcon=document.querySelector('#beta-arrow-icon')

const deleteButton = document.querySelectorAll('.deleteButton')
const approveButton = document.querySelectorAll('.approveButton')

Array.from(deleteButton).forEach(el => {
    el.addEventListener('click', deleteContribution)
})

Array.from(approveButton).forEach(el => {
    el.addEventListener('click', approveContribution)
})

faqExpand.forEach((element,index) => {
    element.addEventListener('click',() => {
        questions[index].classList.toggle('overflow-hidden')
        answerP[index].classList.toggle('translate-y-12')
        answerP[index].classList.replace('-z-10','z-10')
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

async function approveContribution(){
    
    const contributingUser = this.parentNode.parentNode.childNodes[1].innerText
    const fileName = this.parentNode.parentNode.childNodes[3].childNodes[0].innerText
    const fileLink = this.parentNode.parentNode.childNodes[3].childNodes[0].href
    const course = this.parentNode.parentNode.childNodes[5].innerText
    const categoryName = this.parentNode.parentNode.childNodes[7].innerText

    if(categoryName === "Assignments"){
        try{
            const response = await fetch('/addAssignment', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    'contributingUser': contributingUser,
                    'fileName': fileName,
                    'fileLink': fileLink,
                    'course': course, 
                })
            })
            const data = await response.json()
            console.log(data)
            window.location.reload()
        }
        catch(err){
            console.error(err)
        }
    }
    else if(categoryName === "Quizzes"){
        try{
            const response = await fetch('/addQuiz', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    'contributingUser': contributingUser,
                    'fileName': fileName,
                    'fileLink': fileLink,
                    'course': course, 
                })
            })
            const data = await response.json()
            console.log(data)
            window.location.reload()
        }
        catch(err){
            console.error(err)
        }
    }
    else if(categoryName === "MidsFinals"){
        try{
            const response = await fetch('/addMidFinal', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    'contributingUser': contributingUser,
                    'fileName': fileName,
                    'fileLink': fileLink,
                    'course': course, 
                })
            })
            const data = await response.json()
            console.log(data)
            window.location.reload()
        }
        catch(err){
            console.error(err)
        }
    }
}


faqExpand.forEach((element,index) => {
    function handleFaqExpand(){
        
        
        const currentHeight=getComputedStyle(answerP[index]).maxHeight
        if(currentHeight==="0px")
        {answerP[index].style.maxHeight="150px"
        element.classList.toggle('rotate-90')
    }
    else if(currentHeight==="150px"){
        
        answerP[index].classList.toggle('ease-in-out','ease-out')
        answerP[index].style.maxHeight="0px"
        element.classList.toggle('rotate-90')
    }
 
    }

    
    element.addEventListener('click',handleFaqExpand ) 
})



menu.addEventListener('click',()=>{
  li_s.forEach((Element)=>{
    Element.classList.toggle('border-b-2')
    Element.classList.toggle('border-slate-100')
    Element.classList.toggle('w-full')
    Element.classList.toggle('py-4')


  })
  if(menu.src.includes('/icons/closeIcon.svg'))
  menu.src='/icons/menuIcon.svg'
  else
  menu.src='/icons/closeIcon.svg'


  nav.classList.toggle('animateNav')
  dimScreen.classList.toggle('hidden')
})


betaBtn.addEventListener('click',()=>{
    currHeight=getComputedStyle(betaNote).maxHeight
    betaNote.classList.toggle('p-4')
    if(currHeight==='0px')
    betaNote.style.maxHeight='200px'
    else if(currHeight==='200px')
    betaNote.style.maxHeight='0px'
    betaArrowIcon.classList.toggle('rotate-180')})



    // // Nav bar responsiveness script 
    // let navDropDown=document.querySelector('.nav-drop-down')
    // let profileIcon=document.querySelector('.profileIcon')
    // profileIcon.addEventListener('click',()=>{
    //   const currHeight1=getComputedStyle(navDropDown).maxHeight
    //   if(currHeight1=='0px')
    //   navDropDown.style.maxHeight= '200px';
    //   else if(currHeight1=='200px')
    //   navDropDown.style.maxHeight= '0px';
    // })