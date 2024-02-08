let articles = document.querySelectorAll("article[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let scrollY = window.scrollY;
  articles.forEach(current => {
    let articleHeight = current.offsetHeight;
    let articleTop = current.offsetTop - 350;    
    let articleId = current.getAttribute("id");
    if (
      scrollY > articleTop &&
      scrollY <= articleTop + articleHeight
    ){
      document.querySelector("header nav a[href*=" + articleId + "-anchor" + "]").classList.add("active-link");
    } else {
      document.querySelector(".navigation a[href*=" + articleId + "-anchor" + "]").classList.remove("active-link");
    }
  });
}

var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

function show(){
    document.getElementById("educationBtn").classList.remove("active");
    document.getElementById("workBtn").classList.add("active");    
    document.getElementById("education").classList.remove("show");
    document.getElementById("education").classList.add("hidden");
    document.getElementById("work").classList.add("show");
    document.getElementById("work").classList.remove("hidden");
}

function hide(){
    document.getElementById("Education").classList.add("active");
    document.getElementById("Work").classList.remove("active");    
    document.getElementById("Education").classList.add("show");
    document.getElementById("Education").classList.remove("hidden");
    document.getElementById("Work").classList.remove("show");
    document.getElementById("work").classList.add("hidden"); 
}

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.querySelector("header nav a[href*=" + "home-anchor" + "]").classList.add("active-link");
  });
  if (localStorage.getItem('theme') != 'dark') {
  scrollProgress.style.background = `conic-gradient(#383838 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  }
  else{
    scrollProgress.style.background = `conic-gradient(#F7941D ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  }
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

