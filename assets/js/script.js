

var nav = document.querySelector('nav');



window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-white');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
        nav.classList.remove('pt-lg-4');

    } else {
        nav.classList.remove('bg-white');
        nav.classList.add('navbar-light');
        nav.classList.add('pt-lg-4');


    }
})

$('.navbar-toggler').click(() => {
    
    // $('.navbar').toggleClass('navbar-light');
    $('.navbar').toggleClass('bg-light');
    $('.navbar-nav').css({'text-align': 'center'})
});




// gsap Animation

gsap.registerPlugin(ScrollTrigger);

gsap.to("#p-car",{
    scrollTrigger:{
        trigger:"#p-car",
        start:"top bottom",
        toggleActions:"restart pause none pause"
    },
    x:-50,
 
    ease:"elastic",
    duration:3
});
gsap.from("#smallcar",{
    x:50,
    ease:"elastic",
    duration:3
});
// TweenMax.fromTo("#smallcar",1,{scale: 0}, {scale: 1},0);
TweenMax.fromTo("#bigcar",5,{scale: 0,transformOrigin: 'center'}, {scale: 1},0);
   
gsap.to(".map-i",{
    scrollTrigger:{
        trigger:".map-i",
      
        toggleActions:"restart pause reverse pause"
    },
    y:-10,
    ease:"bounce",
    stagger:true,
    repeat:2,
    duration:3
});
gsap.from("#p-person",{
    scrollTrigger:{
        trigger:"#p-person",
     
        toggleActions:"restart none restart pause"
    },
    y:-150,
    ease:"bounce",
    transformOrigin:"0 -50%",
    stagger:true,
    duration:3
});
gsap.from(".hand",{
    scrollTrigger:{
        trigger:".hand",
        start:"top bottom",
        toggleActions:"restart pause reverse pause"
    },
    y:150,
    ease:"expo",
    transformOrigin:"0 -50%",
    stagger:true,
    duration:6
});



// modal
var exampleModal = document.getElementById('parkModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'Location : ' + recipient
  modalBodyInput.value = recipient
})



// data table

$(document).ready(function() {
    $('#example').DataTable( {
        "order": [[ 3, "desc" ]]
    } );
} );