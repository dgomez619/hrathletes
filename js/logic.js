// navigation

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// go to top btn

const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY > 200){
        goTopBtn.style.display = "flex"
    }else {
        goTopBtn.style.display = "none"
    }
}

goTopBtn.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})



// scroll behavior 
 const navigationHeight = document.querySelector('.navbar').offsetHeight;

// console.log(navigationHeight);

document.documentElement.style.setProperty('--scroll-padding', navigationHeight -1 + "px");


