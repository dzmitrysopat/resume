


function nextStep2(){
    document.getElementById("commonInfo").classList.add("hidden");
    document.getElementById("contactInfo").classList.remove("hidden");
    document.getElementById("firstBlock").classList.remove("active");
    document.getElementById("secondBlock").classList.add("active");
}

function nextStep3(){
    document.getElementById("contactInfo").classList.add("hidden");
    document.getElementById("educationInfo").classList.remove("hidden");
    document.getElementById("secondBlock").classList.remove("active");
    document.getElementById("thirdBlock").classList.add("active");
}

function nextStep4(){
    const startYear = document.getElementById("startYear").value;
    const finishYear = document.getElementById("finishYear").value;
    console.log(startYear);
    console.log(finishYear);
    if (startYear > finishYear) {
        console.log('error');
    }
    else {
        console.log('good');
    }
    document.getElementById("educationInfo").classList.add("hidden");
    document.getElementById("otherInfo").classList.remove("hidden");
    document.getElementById("thirdBlock").classList.remove("active");
    document.getElementById("lastBlock").classList.add("active");
}

// prev Steps

function prevStep1(){
    document.getElementById("commonInfo").classList.remove("hidden");
    document.getElementById("contactInfo").classList.add("hidden");
    document.getElementById("firstBlock").classList.add("active");
    document.getElementById("secondBlock").classList.remove("active");
}

function prevStep2(){
    document.getElementById("educationInfo").classList.add("hidden");
    document.getElementById("contactInfo").classList.remove("hidden");
    document.getElementById("thirdBlock").classList.remove("active");
    document.getElementById("secondBlock").classList.add("active");
}

function prevStep3(){
    document.getElementById("otherInfo").classList.add("hidden");
    document.getElementById("educationInfo").classList.remove("hidden");
    document.getElementById("lastBlock").classList.remove("active");
    document.getElementById("thirdBlock").classList.add("active");
}
