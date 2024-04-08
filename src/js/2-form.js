
//   const form = document.querySelector('.feedback-form');
//  form.addEventListener('input', function (event) {
//    const { email, message } = event.currentTarget.elements;
//    saveFormData(email, message);
//   });


//   function saveFormData(a, b) {
//     const formData = {
//       email: a.value.trim(),
//       message: b.value.trim()
//     };

//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//   }

//   const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
//   if (savedFormData) {
//     form.elements.email.value = savedFormData.email;
//     form.elements.message.value = savedFormData.message;
//   }

 
//   form.addEventListener('submit', function (event) {
//     event.preventDefault();
//    const { email, message } = event.currentTarget.elements;
//     const formData = {
//       email: email.value.trim(),
//       message: message.value.trim()
//     };

//     if (!email.value.trim () || !message.value.trim ()) {
//       alert('"Local storage is empty!".');
//       return;
//     }

//  console.log('Submitted form data:', formData);

//     localStorage.removeItem('feedback-form-state');
//     event.currentTarget.reset();
//   });
// Зайві операції Trim: У прослуховувачі події submit об'єкт даних форми (formData) створюється після очищення полів форми. Це призводить до того, що обидві властивості, email та message, будуть порожніми рядками, незалежно від застосованого trim.
// Критичні помилки:

// Логічна помилка з даними для подання форми: Ви очищаєте поля вводу перед створенням об'єкта formData для реєстрації. Це означає, що зареєстрований formData завжди буде мати порожні рядки для email та message, що не є бажаною поведінкою.
// Для покращення рішення:

// Змініть порядок операцій у вашому обробнику події подання, щоб створити об'єкт formData з поточними значеннями вводу перед скиданням полів форми.
// Рефакторінг тексту сповіщення, щоб зробити його більш зрозумілим та дружелюбним для користувача, коли введення відсутні.
// Завдання не було прийняте через критичну проблему з даними подання форми. Після виправлення цієї помилки ваше рішення має відповідати вимогам завдання. Продовжуйте докладати старання і не вагайтеся звертатися, якщо у вас виникають якісь запитання!
const form = document.querySelector("form");//import refs
const localStorageKey = "feedback-form-state";//import KEY

const data = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};//import localStorage.getItem


form.elements.email.value = data.email ? data.email.trim() : "";
form.elements.message.value = data.message ? data.message.trim() : "";



form.addEventListener("input", handleInput);
function handleInput(event) {

    data.email = event.currentTarget.elements.email.value.trim();
    data.message = event.currentTarget.elements.message.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(data));//import localStorage
   
}

 

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    
    event.preventDefault();
    const messageField = event.currentTarget.elements.message.value.trim();
    const emailField = event.currentTarget.elements.email.value.trim();

    if (!(messageField && emailField)) {
        alert("Fill all fields!")
        return
     
    }
    console.log(data);
    localStorage.removeItem(localStorageKey);// import localStorage.removeItem
    form.reset();

}
// const storageData = localStorage.getItem(storageKey)?? "";

// try {
//     const parseData = JSON.parse(storageData);
//     textarea.value = parseData.message;
//     form.elements.email.value = parseData.email;
// } catch {
//     console.log("LocalStorage is empty")
// }