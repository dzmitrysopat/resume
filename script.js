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
    if (document.getElementById("name").value.length ==   0) {
        alert('Укажите Имя');
    } else if (document.getElementById("birth").value.length == 0){
        alert('Вы забыли указать дату рождения')
    } else if (document.getElementById("family").value.length == 0){
        alert('Укажите семейное положение')
    } else if (document.getElementById("city").value.length == 0){
        alert('Забыли город проживания')    
    }   else{
        document.getElementById("commonInfo").classList.add("hidden");
        document.getElementById("contactInfo").classList.remove("hidden");
        document.getElementById("firstBlock").classList.remove("active");
        document.getElementById("secondBlock").classList.add("active");
    }
}

function nextStep3(){
    if (document.getElementById("tel").value.length ==   0) {
        alert('Укажите Телефон для связи');
    } else if (document.getElementById("telegram").value.length == 0){
        alert('Вы забыли Ваш Telegram')
    } else if (document.getElementById("instagram").value.length == 0){
        alert('Укажите Ваш ник в Instagram')
    }   else{
    document.getElementById("contactInfo").classList.add("hidden");
    document.getElementById("educationInfo").classList.remove("hidden");
    document.getElementById("secondBlock").classList.remove("active");
    document.getElementById("thirdBlock").classList.add("active");
}
}

function nextStep4(){
    if (document.getElementById("college").value.length ==   0) {
        alert('Укажите Учебное заведение');
    } else if (document.getElementById("education").value.length == 0){
        alert('Вы забыли указать уровень образования')
    } else if (document.getElementById("educationType").value.length == 0){
        alert('Укажите форму обучения')
    } else if (document.getElementById("speciality").value.length == 0){
        alert('Забыли указать свою специальность')    
    } else if (document.getElementById("startYear").value.length == 0 ) {
        alert('Не указали дату поступления');
    } else if (document.getElementById("finishYear").value.length == 0) {
        alert('Забыли дату выпуска');
    } else if (document.getElementById("startYear").value > document.getElementById("finishYear").value) {
        alert('Дата окончания превышает дату поступления');
    } else if (document.getElementById("diploma").value.length == 0){
        alert('Тема вашей дипломной работы')
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

// tabs start

// function Step1(){
//         document.getElementById("firstBlock").classList.add("active");
//         document.getElementById("secondBlock").classList.remove("active");
//         document.getElementById("thirdBlock").classList.remove("active");
//         document.getElementById("lastBlock").classList.remove("active");
//         document.getElementById("commonInfo").classList.remove("hidden");
//         document.getElementById("contactInfo").classList.add("hidden");
//         document.getElementById("educationInfo").classList.add("hidden");
//         document.getElementById("otherInfo").classList.add("hidden");
// }

// function Step2(){
//     document.getElementById("firstBlock").classList.remove("active");
//     document.getElementById("secondBlock").classList.add("active");
//     document.getElementById("thirdBlock").classList.remove("active");
//     document.getElementById("lastBlock").classList.remove("active");
//     document.getElementById("commonInfo").classList.add("hidden");
//     document.getElementById("contactInfo").classList.remove("hidden");
//     document.getElementById("educationInfo").classList.add("hidden");
//     document.getElementById("otherInfo").classList.add("hidden");
// }

// function Step3(){
//     document.getElementById("firstBlock").classList.remove("active");
//     document.getElementById("secondBlock").classList.remove("active");
//     document.getElementById("thirdBlock").classList.add("active");
//     document.getElementById("lastBlock").classList.remove("active");
//     document.getElementById("commonInfo").classList.add("hidden");
//     document.getElementById("contactInfo").classList.add("hidden");
//     document.getElementById("educationInfo").classList.remove("hidden");
//     document.getElementById("otherInfo").classList.add("hidden");
// }

// function Step4(){
//     document.getElementById("firstBlock").classList.remove("active");
//     document.getElementById("secondBlock").classList.remove("active");
//     document.getElementById("thirdBlock").classList.remove("active");
//     document.getElementById("lastBlock").classList.add("active");
//     document.getElementById("commonInfo").classList.add("hidden");
//     document.getElementById("contactInfo").classList.add("hidden");
//     document.getElementById("educationInfo").classList.add("hidden");
//     document.getElementById("otherInfo").classList.remove("hidden");
// }

// tabs ends


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


    document.addEventListener('DOMContentLoaded', () => {
        const TOKEN = '7437568340:AAGGMMdXb_FcoGW__PZ5L858HqjKTU1CKNw'
        const CHAT_ID = '-1002433455867'
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
        const photo_API = `https://api.telegram.org/bot${TOKEN}/sendPhoto`
      
        
        function clearInputs(inputs) {
          inputs.forEach((input) => input.value = '')
        }
      
        document.getElementById('telegramForm').addEventListener('submit', function (event) {
          event.preventDefault()
          const date = new Date().toLocaleString()

          const formData = new formData();
        formData.append('chat_id', CHAT_ID);
        formData.append('photo', this.photo.files[0]);

          const textMessage = `
            <b>Анкета | ${date}</b>\n
            <b>ФИО: </b>${this.name.value}
            <b>Дата рождения: </b>${this.birth.value}
            <b>Семейное положение: </b>${this.family.value}
            <b>Гражданство: </b>${this.country.value}
            <b>Город: </b>${this.city.value}
            <b>Телефон: </b><a href="tel:${this.tel.value}">${this.tel.value}</a>
            <b>Telegram: </b><a href="${this.telegram.value}">${this.telegram.value}</a>
            <b>Instagram: </b><a href="${this.instagram.value}">${this.instagram.value}</a>
            <b>Фотография: </b><a href="${this.photo.value}">${this.photo.value}</a>
            <b>Учебное заведение: </b>${this.college.value}
            <b>Уровень образования: </b>${this.education.value}
            <b>Форма обучения: </b>${this.educationType.value}
            <b>Специальность: </b>${this.speciality.value}
            <b>Год поступления: </b>${this.startYear.value}
            <b>Год окончания: </b>${this.finishYear.value}
            <b>Тема выпускной работы: </b>${this.diploma.value}
            <b>Языки: </b>${this.languages.value}
            <b>Навыки: </b>${this.skills.value}
            <b>Что заинтересовало: </b>${this.interestings.value}
            <b>Достижения: </b>${this.achievements.value}
            <b>О себе: </b><i>${this.about.value}</i>
          `
      
        if (document.getElementById("languages").value.length ==   0) {
            alert('Укажите языки');
        } else if (document.getElementById("skills").value.length == 0){
            alert('Ваши скиллы для успеха');
        } else if (document.getElementById("interestings").value.length == 0){
            alert('Чем заинтересовал проект');
        } else if (document.getElementById("achievements").value.length == 0){
            alert('Ваши достижения');
        }   else if (document.getElementById("agree").checked == false) {
          alert('Нам нужно Ваше согласие на обработку получаемых данных');
        } else  
        {
          fetch(URI_API, {
            method: 'POST',
            headers: { 'content-type': 'application/json', },
            body: JSON.stringify({
              chat_id: CHAT_ID,
              parse_mode: 'html',
              text: textMessage
            }),
          },
          formData, {
            headers: { 'content-type': 'multipart/form-data', },
            chat_id: CHAT_ID,
            photo: 
          }
        )
            .then(() => open('./sent.html', '_self'))
            .catch(e => console.error(e))
            .finally(() => clearInputs(this.querySelectorAll('input, select, textarea')))
        }})
      })