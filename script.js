const loginContainer = document.getElementById('login-form');

fetch('login.html')
  .then(response => response.text())
  .then(data => {
    loginContainer.innerHTML = data;
  })
  .catch(error => console.error(error));

  const footer = document.getElementById('footer');

  footer.innerHTML = 'Loading footer...'; // Add a loading message
  
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      footer.innerHTML = data;
    })
    .catch(error => {
      footer.innerHTML = 'Error loading footer.';
      console.error(error);
    });
