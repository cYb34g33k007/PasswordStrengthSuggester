document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.querySelector('.input-box input');
  const errorIcon = document.querySelector('.error_icon');
  const errorText = document.querySelector('.text');
  const suggestButton = document.getElementById('suggestButton');
  const suggestedPasswordDiv = document.getElementById('suggestedPassword');
  const showHideIcon = document.querySelector('.show_hide');

  // Function to update the password strength indicator
  const updateStrengthIndicator = (password) => {
    let strength = 0;

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      strength += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      strength += 1;
    }

    // Check for numbers
    if (/[0-9]/.test(password)) {
      strength += 1;
    }

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength += 1;
    }

    // Check password length
    if (password.length >= 8) {
      strength += 1;
    }

    // Update the strength indicator based on the strength value
    switch (strength) {
      case 0:
      case 1:
        errorIcon.classList.remove('fa-check-circle');
        errorIcon.classList.add('fa-exclamation-circle');
        errorText.textContent = 'Weak';
        errorText.style.color = '#ff5d5d';
        break;
      case 2:
        errorIcon.classList.remove('fa-exclamation-circle');
        errorIcon.classList.add('fa-check-circle');
        errorText.textContent = 'Medium';
        errorText.style.color = '#ffc833';
        break;
      case 3:
        errorIcon.classList.remove('fa-exclamation-circle');
        errorIcon.classList.add('fa-check-circle');
        errorText.textContent = 'Strong';
        errorText.style.color = '#2bd366';
        break;
      case 4:
        errorIcon.classList.remove('fa-exclamation-circle');
        errorIcon.classList.add('fa-check-circle');
        errorText.textContent = 'Very Strong';
        errorText.style.color = '#0090ff';
        break;
    }
  };

  // Event listener to check password strength on input change
  inputBox.addEventListener('input', (e) => {
    const password = e.target.value;
    updateStrengthIndicator(password);
  });

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    if (inputBox.type === 'password') {
      inputBox.type = 'text';
      showHideIcon.classList.remove('fa-eye-slash');
      showHideIcon.classList.add('fa-eye');
    } else {
      inputBox.type = 'password';
      showHideIcon.classList.remove('fa-eye');
      showHideIcon.classList.add('fa-eye-slash');
    }
  };

  // Event listener for the show/hide password icon
  showHideIcon.addEventListener('click', togglePasswordVisibility);

  // Function to generate a suggested password
  const suggestPassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const length = 12;
    let suggestedPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      suggestedPassword += characters.charAt(randomIndex);
    }

    return suggestedPassword;
  };

  // Event listener for the suggest password button
  suggestButton.addEventListener('click', () => {
    const suggestedPassword = suggestPassword();
    suggestedPasswordDiv.textContent = 'Suggested password: ' + suggestedPassword;
  });
});
