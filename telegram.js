"use strict"

const TOKEN = '7437568340:AAGGMMdXb_FcoGW__PZ5L858HqjKTU1CKNw'
const CHAT_ID = '-1002433455867'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

async function sendEmailTelegram(event) {
    event.preventDefault()

    const form = event.target;
    const formBtn = document.querySelector('buttons button');
    const formSendResult = document.querySelector('form__sent__result');
    formSendResult.textContent = '';

    const formData = new FormData(form);
}