
  const form = document.querySelector('.feedback-form');
 form.addEventListener('input', function (event) {
   const { email, message } = event.currentTarget.elements;
   saveFormData(email, message);
  });


  function saveFormData(a, b) {
    const formData = {
      email: a.value.trim(),
      message: b.value.trim()
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    form.elements.email.value = savedFormData.email;
    form.elements.message.value = savedFormData.message;
  }

 
  form.addEventListener('submit', function (event) {
    event.preventDefault();
   const { email, message } = event.currentTarget.elements;
    const formData = {
      email: email.value.trim(),
      message: message.value.trim()
    };

    if (!email.value.trim () || !message.value.trim ()) {
      alert('"Local storage is empty!".');
      return;
    }

 console.log('Submitted form data:', formData);

    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
  });
// Зайві операції Trim: У прослуховувачі події submit об'єкт даних форми (formData) створюється після очищення полів форми. Це призводить до того, що обидві властивості, email та message, будуть порожніми рядками, незалежно від застосованого trim.
// Критичні помилки:

// Логічна помилка з даними для подання форми: Ви очищаєте поля вводу перед створенням об'єкта formData для реєстрації. Це означає, що зареєстрований formData завжди буде мати порожні рядки для email та message, що не є бажаною поведінкою.
// Для покращення рішення:

// Змініть порядок операцій у вашому обробнику події подання, щоб створити об'єкт formData з поточними значеннями вводу перед скиданням полів форми.
// Рефакторінг тексту сповіщення, щоб зробити його більш зрозумілим та дружелюбним для користувача, коли введення відсутні.
// Завдання не було прийняте через критичну проблему з даними подання форми. Після виправлення цієї помилки ваше рішення має відповідати вимогам завдання. Продовжуйте докладати старання і не вагайтеся звертатися, якщо у вас виникають якісь запитання!