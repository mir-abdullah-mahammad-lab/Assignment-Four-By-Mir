let interviewTotal8 = 0;
let totalCount = 0;
let containerInterview = document.getElementById('ContainerInterview').innerHTML
// console.log(containerInterview)


const btnInterviewSelect = document.getElementById('addInterview')
// console.log(btnInterviewSelect.innerText)

btnInterviewSelect.addEventListener('click', function(){
    const btnNotApplied = document.getElementById('notApplied')
    const createBtnInterview = document.createElement('button')
    createBtnInterview.classList.add('btn', 'btn-soft', 'btn-success')
    createBtnInterview.innerHTML = btnInterviewSelect.innerText
    // console.log(createBtnInterview)
    btnNotApplied.replaceWith(createBtnInterview)
    interviewTotal8 += 1;
    totalCount +=1;
    // console.log('tosl', interviewTotal8)

    document.getElementById('interviewInDash').innerText = interviewTotal8
    const jofjBtn=document.getElementById('jOfjobs')
    

    jofjBtn.innerText = `${interviewTotal8} of 8`


    const ContainerInterview = document.getElementById('ContainerInterview')
    
    // console.log(innerElementofContainerInterview)
    const keepJobDiv = document.createElement('div')
    keepJobDiv.classList.add('container','mx-auto')
    const innerht = document.getElementById('job-card1').innerHTML
    keepJobDiv.innerHTML = innerht
    // console.log(keepJobDiv)
    ContainerInterview.innerHTML = keepJobDiv.innerHTML
    return
})


let RejectedTotal = 0;
const btnReject = document.getElementById('addReject')
btnReject.addEventListener('click', function(){
    console.log('ccccccccccccc')

    const btnForRej = document.getElementById('notApplied')
    const createBtnReject = document.createElement('button')
    createBtnReject.classList.add('btn', 'btn-outline', 'btn-error')
    createBtnReject.innerHTML = btnReject.innerText
    // console.log(createBtnInterview)
    btnForRej.replaceWith(createBtnReject)
    RejectedTotal += 1;
    totalCount +=1;
    console.log('rejsss', RejectedTotal)

    document.getElementById('RejectedInDash').innerText = RejectedTotal
    const jofjBtn=document.getElementById('jOfjobs')
    

    jofjBtn.innerText = `${totalCount} of 8`


    const ContainerRejected = document.getElementById('ContainerRejected')
    
    // console.log(innerElementofContainerInterview)
    const keepRejDiv = document.createElement('div')
    keepRejDiv.classList.add('container','mx-auto')
    const innerht = document.getElementById('job-card1').innerHTML
    keepRejDiv.innerHTML = innerht.replace('id="addReject"','id="addReject-1"')
    // console.log(keepJobDiv)
    ContainerRejected.innerHTML = keepRejDiv.innerHTML
    return
})



function sendTo(id){
    interviewTotal8 +=1;
    const jofjBtn=document.getElementById('jOfjobs')
    jofjBtn.innerText = `${interviewTotal8} of 8`


    document.getElementById('interviewInDash').innerText = interviewTotal8
    const btnInterview2 = document.getElementById(id)
    // console.log(btnInterview2)

    const btnNotapplied = document.getElementById('notApplied2')
    // console.log(btnNotapplied)
    const btnKeeper = document.createElement('button')
    btnKeeper.classList.add('btn', 'btn-soft', 'btn-success')
    btnKeeper.innerText = btnInterview2.innerText

    btnNotapplied.replaceWith(btnKeeper)
    
    const bringInsidehtml=document.getElementById('ContainerInterview')
   
   
    console.log(bringInsidehtml)
    
    console.log(containerInterview)

    
    const card2 = document.getElementById('card-2');
    const inhtml = card2.innerHTML
    console.log(inhtml)
    if(bringInsidehtml === containerInterview){
        console.log('noooooooooo card')

        bringInsidehtml.replaceWith(inhtml)


    }

    
}