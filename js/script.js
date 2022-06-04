// const menu = document.getElementById('menu-label');
// const sidebar = document.getElementsByClassName('sidebar')[0];

// menu.addEventListener('click', function() {
//     sidebar.classList.toggle('hide');
// })

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})