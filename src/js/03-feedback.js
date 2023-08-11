import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form')
const KEY_FEEDBACK = "feedback-form-state"

let feedbackData= {}; 

const {elements: { email, message }} = feedbackForm;

feedbackForm.addEventListener('input', throttle(handlerSaveText, 500))
feedbackForm.addEventListener('submit', onClickSubmit)
  
 updateOutput();

function handlerSaveText(evt) {

  if (evt.currentTarget) {
    feedbackData = { email: email.value, message: message.value }
    localStorage.setItem(KEY_FEEDBACK, JSON.stringify(feedbackData));
}
}

function onClickSubmit(evt) {
  
  evt.preventDefault();  // щоб неперезавантажувалося 
  evt.currentTarget.reset();  // зкидує всі значення полів введення
  localStorage.removeItem(KEY_FEEDBACK);  // зачищаємо localStorage
}
function updateOutput() {
    
const saveFeedback =JSON.parse(localStorage.getItem(KEY_FEEDBACK)) || '';
  
  email.value = saveFeedback.email;
  message.value = saveFeedback.message;
    
}