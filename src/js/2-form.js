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

    if (!emailInput.value.trim() || !messageInput.value.trim()) {
      alert('"Local storage is empty!".');
      return;
    }

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';

    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };
    console.log('Submitted form data:', formData);
  });
});