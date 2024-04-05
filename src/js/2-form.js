document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const submitButton = form.querySelector('button[type="submit"]');

  function saveFormData() {
    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    emailInput.value = savedFormData.email;
    messageInput.value = savedFormData.message;
  }

  form.addEventListener('input', function () {
    saveFormData();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };

    if (!emailInput.value () || !messageInput.value ()) {
      alert('"Local storage is empty!".');
      return;
    }

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';

 
    console.log('Submitted form data:', formData);
  });
});
// Зайві операції Trim: У прослуховувачі події submit об'єкт даних форми (formData) створюється після очищення полів форми. Це призводить до того, що обидві властивості, email та message, будуть порожніми рядками, незалежно від застосованого trim.
// Критичні помилки:

// Логічна помилка з даними для подання форми: Ви очищаєте поля вводу перед створенням об'єкта formData для реєстрації. Це означає, що зареєстрований formData завжди буде мати порожні рядки для email та message, що не є бажаною поведінкою.
// Для покращення рішення:

// Змініть порядок операцій у вашому обробнику події подання, щоб створити об'єкт formData з поточними значеннями вводу перед скиданням полів форми.
// Рефакторінг тексту сповіщення, щоб зробити його більш зрозумілим та дружелюбним для користувача, коли введення відсутні.
// Завдання не було прийняте через критичну проблему з даними подання форми. Після виправлення цієї помилки ваше рішення має відповідати вимогам завдання. Продовжуйте докладати старання і не вагайтеся звертатися, якщо у вас виникають якісь запитання!