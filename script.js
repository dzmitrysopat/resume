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
      document.querySelector("header nav a[href*="+ articleId + "-anchor" + "]").classList.add("active-link");
      document.querySelector("header nav div a[href*="+articleId +"]").classList.add("active-link");
    } else {
      document.querySelector("header nav a[href*="+ articleId + "-anchor" + "]").classList.remove("active-link");
      document.querySelector("header nav div a[href*="+articleId +"]").classList.remove("active-link");
    }
  });
}

function showStep2(){
  document.getElementById("commonInfo").classList.add("hidden");
  document.getElementById("contactInfo").classList.remove("hidden");
}

function showStep3(){
  document.getElementById("contactInfo").classList.add("hidden");
  document.getElementById("EducationInfo").classList.remove("hidden");
}

function showStep4(){
  document.getElementById("EducationInfo").classList.add("hidden");
  document.getElementById("OtherInfo").classList.remove("hidden");
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


const education = document.querySelectorAll(".education");
const work = document.querySelectorAll(".work");

function show(){
    for (const worker of work){
        worker.classList.remove("hidden");
    }
    for (const school of education){
        school.classList.add("hidden");
    }
    document.getElementById("WorkBtn").classList.add("active");
    document.getElementById("EducationBtn").classList.remove("active");
}

function hide(){
    for (const worker of work){
        worker.classList.add("hidden");
    }
    for (const school of education){
        school.classList.remove("hidden");
    }

    document.getElementById("WorkBtn").classList.remove("active");
    document.getElementById("EducationBtn").classList.add("active");
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
    scrollProgress.style.background = `conic-gradient(#f7941d ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    }
    else{
      scrollProgress.style.background = `conic-gradient(#F7941D ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    }
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;



  document.querySelector('.uil-apps').addEventListener('click', (event) => {
    document.getElementById("menu").classList.add("slide-top");
    document.getElementById("menu").classList.add("burger-menu");
  });

  document.querySelector('.uil-times').addEventListener('click', (event) => {
    document.getElementById("menu").classList.remove("slide-top");
    document.getElementById("menu").classList.remove("burger-menu");
  });


setTimeout(function(){
	document.body.classList.add('body_visible');
}, 0);

function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		change.target.classList.add('element-show');
	  }
	});
  }
  let options = { threshold: [0.4] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
	observer.observe(elm);
  }

  // typing
  var typed = new Typed(".typing",{
    strings:["Front-End Web Developer"],
    typeSpeed: 150,
    // BackSpeed: 0.5,
    // loop:true
  })

