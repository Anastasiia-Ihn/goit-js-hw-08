import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form')
const KEY_FEEDBACK = "feedback-form-state"

let feedbackData= {}; 

const {elements: { email, message }} = feedbackForm;

feedbackForm.addEventListener('input', throttle(handlerSaveText, 500))
feedbackForm.addEventListener('submit', onClickSubmit)
  
 updateOutput();

function handlerSaveText(evt) {

 
    feedbackData = { email: email.value, message: message.value }
    localStorage.setItem(KEY_FEEDBACK, JSON.stringify(feedbackData));
}


function onClickSubmit(evt) {
  
  evt.preventDefault();  // щоб неперезавантажувалося 
   //  feedbackData = { email: email.value, message: message.value }

  console.log({"Email": email.value , "Message": message.value})
    
 evt.currentTarget.reset();  // зкидує всі значення полів введення
  localStorage.removeItem(KEY_FEEDBACK);  // зачищаємо localStorage
}

function updateOutput() {
        // feedbackData = { email: email.value, message: message.value }
const fd = localStorage.getItem(KEY_FEEDBACK)
  const saveFeedback = JSON.parse(fd) ?? {}

  email.value = saveFeedback.email ?? '';
  message.value = saveFeedback.message ?? '';
}