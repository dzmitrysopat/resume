function nextStep2(){
    document.getElementById("commonInfo").classList.add("hidden");
    document.getElementById("contactInfo").classList.remove("hidden");
}

function nextStep3(){
    document.getElementById("contactInfo").classList.add("hidden");
    document.getElementById("educationInfo").classList.remove("hidden");
}

function nextStep4(){
    document.getElementById("educationInfo").classList.add("hidden");
    document.getElementById("otherInfo").classList.remove("hidden");
}

// prev Steps

function prevStep1(){
    document.getElementById("commonInfo").classList.remove("hidden");
    document.getElementById("contactInfo").classList.add("hidden");
}

function prevStep2(){
    document.getElementById("educationInfo").classList.add("hidden");
    document.getElementById("contactInfo").classList.remove("hidden");
}

function prevStep3(){
    document.getElementById("otherInfo").classList.add("hidden");
    document.getElementById("educationInfo").classList.remove("hidden");
}