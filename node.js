const toggle=document.getElementById('darkmode');
const body=document.querySelector('body');

toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness')){
        body.style.background='rgb(26, 23, 23)';
        body.style.color='white';
        body.style.transition='1s';
    }else{
        body.style.background='white';
        body.style.color='rgb(26, 23, 23)';
        body.style.transition='1s';
    }
})