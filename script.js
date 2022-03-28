(function(){
  document.querySelector('.navbar-toggler').addEventListener('click', e=>{
    console.log(e.target.getAttribute('src'))
    if(e.target.getAttribute('src') == 'images/icon-hamburger.svg'){
      document.querySelector('.collapse').style.display ='block';
      e.target.setAttribute('src', 'images/icon-close.svg')
    }else if(e.target.getAttribute('src') == 'images/icon-close.svg'){
      document.querySelector('.collapse').style.display ='none';
      e.target.setAttribute('src', 'images/icon-hamburger.svg')
    }
  })
})()