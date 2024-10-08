document.addEventListener('DOMContentLoaded', () => {
  const TOKEN = '7437568340:AAGGMMdXb_FcoGW__PZ5L858HqjKTU1CKNw'
  const CHAT_ID = '-1002433455867'
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
  // const photo_API = `https://api.telegram.org/bot${TOKEN}/sendDocument`

  
  function clearInputs(inputs) {
    inputs.forEach((input) => input.value = '')
  }

  document.getElementById('telegramForm').addEventListener('submit', function (event) {
    event.preventDefault()
    const date = new Date().toLocaleString()

    const textMessage = `
      <b>Анкета | ${date}</b>\n
      <b>ФИО: </b>${this.name.value}
      <b>Дата рождения: </b>${this.birth.value}
      <b>Семейное положение: </b>${this.family.value}
      <b>Гражданство: </b>${this.country.value}
      <b>Город: </b>${this.city.value}
      <b>Телефон: </b><a href="tel:${this.tel.value}">${this.tel.value}</a>
      <b>Эл.Почта: </b><a href="mailto:${this.email.value}">${this.email.value}</a>
      <b>Telegram: </b><a href="${this.telegram.value}">${this.telegram.value}</a>
      <b>Instagram: </b><a href="${this.instagram.value}">${this.instagram.value}</a>
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
      alert('Ваши скиллы для успеха')
  } else if (document.getElementById("interestings").value.length == 0){
      alert('Чем заинтересовал проект')
  } else if (document.getElementById("achievements").value.length == 0){
      alert('Ваши достижения')    
  }   else if (document.getElementById("agree").checked == false) {
    alert('Нам нужно Ваше согласие на обработку получаемых данных')
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
    })
      .then(() => open('./sent.html'))
      .catch((e) => console.error(e))
      .finally(() => clearInputs(this.querySelectorAll('input, select, textarea')))
  }})
})