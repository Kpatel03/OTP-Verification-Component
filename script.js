const inputs = document.querySelectorAll('.otp-input');
const verifyBtn = document.getElementById('verifyBtn');
const message = document.getElementById('message');

// Sample valid OTP
const validOTP = '1230';

// Auto-focus to next box
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value === '' && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

// Verify OTP
verifyBtn.addEventListener('click', () => {
  const enteredOTP = Array.from(inputs).map(input => input.value).join('');
  
  if (enteredOTP === validOTP) {
    message.textContent = '✅ OTP Verified Successfully!';
    message.style.color = '#22c55e';
    inputs.forEach(input => {
      input.classList.remove('error');
      input.classList.add('success');
    });
  } else {
    message.textContent = '';
    alert('❌ Invalid OTP');
    inputs.forEach(input => {
      input.classList.remove('success');
      input.classList.add('error');
    });
  }
});
