$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

document.getElementById('saveButton').addEventListener('click', function() {
    var icon = document.getElementById('thumbIcon');
    icon.classList.toggle('d-none');
});

function toggleHeart() {
    var regularHeart = document.getElementById('regularHeart');
    var solidHeart = document.getElementById('solidHeart');

    regularHeart.classList.add('d-none');
    solidHeart.classList.remove('d-none');
}


function Knowledge() {
    window.location.href = "Knowledge.html"; // Replace with your desired URL
}
function AboutUs() {
    window.location.href = "About Us.html"; // Replace with your desired URL
}