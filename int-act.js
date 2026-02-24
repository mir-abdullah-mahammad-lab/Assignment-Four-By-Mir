// console.log('testing')
const btnALL = document.getElementById('all');
btnALL.addEventListener('click',function (){ 
    // console.log('clicked');
    const allJobsContainer = document.getElementById("ultimate-container");
    const emptyContainer = document.getElementById("ContainerInterview");
    const emptyContainerRej = document.getElementById("ContainerRejected");

    allJobsContainer.classList.add('hidden')
    emptyContainer.classList.add('hidden')
    emptyContainerRej.classList.add('hidden')

    allJobsContainer.classList.remove('hidden')


});


const btnInterview = document.getElementById('interview')
btnInterview.addEventListener('click', function(){
    // console.log('int clicked')

    const allJobsContainer = document.getElementById("ultimate-container");
    const emptyContainer = document.getElementById("ContainerInterview");
    const emptyContainerRej = document.getElementById("ContainerRejected");
    

    allJobsContainer.classList.add('hidden')
    emptyContainer.classList.add('hidden')
    emptyContainerRej.classList.add('hidden')

    emptyContainer.classList.remove('hidden')

})
const btnRejection = document.getElementById("rejected")
btnRejection.addEventListener('click', function(){
    console.log('rej clicked')

    const allJobsContainer = document.getElementById("ultimate-container");
    const emptyContainer = document.getElementById("ContainerInterview");
    const emptyContainerRej = document.getElementById("ContainerRejected");
    

    allJobsContainer.classList.add('hidden')
    emptyContainer.classList.add('hidden')
    emptyContainerRej.classList.add('hidden')

    emptyContainerRej.classList.remove('hidden')

    

})

