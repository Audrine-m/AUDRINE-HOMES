const loginContainer = document.getElementById('login-form');

fetch('login.html')
  .then(response => response.text())
  .then(data => {
    loginContainer.innerHTML = data;
  })
  .catch(error => console.error(error));
