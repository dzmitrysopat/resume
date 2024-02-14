
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

// previous
function showStep1(){
  document.getElementById("commonInfo").classList.remove("hidden");
  document.getElementById("contactInfo").classList.add("hidden");
}

function backStep2(){
  document.getElementById("contactInfo").classList.remove("hidden");
  document.getElementById("EducationInfo").classList.add("hidden");
}

function backStep3(){
  document.getElementById("EducationInfo").classList.remove("hidden");
  document.getElementById("OtherInfo").classList.add("hidden");}

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

