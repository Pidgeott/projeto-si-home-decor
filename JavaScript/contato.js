function showCustomAlert(message, type) {
    const customAlert = document.getElementById("custom-alert");
    const alertText = document.getElementById("alert-text");
    alertText.textContent = message;
  
    customAlert.className = "custom-alert " + type; 
    customAlert.style.display = "block";
    setTimeout(() => {
      customAlert.style.display = "none";
    }, 3000);
  }
  
  function exibirMensagemEnviada() {
    showCustomAlert("Mensagem enviada!", "success"); 
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    exibirMensagemEnviada();
    myForm.submit();
  }
  
  const myForm = document.getElementById('si-Form');
  myForm.onsubmit = handleSubmit;
  