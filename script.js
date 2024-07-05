const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  document.getElementsByClassName('loading-container-with-heading')[0].classList.remove('hide');
  document.getElementsByClassName('btn-container')[0].classList.add('hide');
  setTimeout(()=>{
    window.location="https://internee.pk/";
  }, 4200);

})  