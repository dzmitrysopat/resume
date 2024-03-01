
const input_file = document.getElementById("photo");
const input_label = document.getElementById("photoLabel")

const convert_to_base64 = file => new Promise((response) => {
const file_reader = new FileReader();
    file_reader.readAsDataURL(file);
    file_reader.onload = () => response(file_reader.result);
});

input_file.addEventListener('change', async function(){
    const file = document.querySelector("#photo").files;
    const my_image = await convert_to_base64(file[0]);
    input_label.style.backgroundImage =`url(${my_image})`
})

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
        alert('Дата окончания превышает дату поступления');
    } else{
    document.getElementById("educationInfo").classList.add("hidden");
    document.getElementById("otherInfo").classList.remove("hidden");
    document.getElementById("thirdBlock").classList.remove("active");
    document.getElementById("lastBlock").classList.add("active");
}
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

document.querySelector('.theme').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
    }
    else {
    localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
    });
    
    function addDarkClassToHTML() {
    const image = document.getElementById("logoImg");
    
    try {
            if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.add('dark');
            image.src = './img/bulb_sm_white.png';
    }
    else {
            document.querySelector('html').classList.remove('dark');
            image.src = './img/bulb_sm.png';
    }
    } catch (err) { }
    }
    addDarkClassToHTML();
