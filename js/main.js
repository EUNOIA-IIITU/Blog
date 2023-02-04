// filter js
$(document).ready(function(){
    $('.filter-item').click(function(){
  const value=$(this).attr('data-filter');
  if(value=='all'){
    $('.post-box').show('1000');
  }
   else{
     $('.post-box').not('.'+ value).hide('1000');
   $('.post-box').filter('.'+ value).show('1000');
 }
    });
    //add active to btn
    $(".filter-item").click(function(){
      $(this).addClass("active-filter").siblings().removeclass("active-filter");
    });
});
//header  background change on scroll
let header = document.querySelector('header')

window.addEventListener('scroll',()=>{
  header.classList.toggle("shadow", wondpw.scrollY>0);
}); 