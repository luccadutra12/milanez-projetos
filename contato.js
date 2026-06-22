const whatsappButton = document.getElementById('whatsappButton');

if (whatsappButton) {
  whatsappButton.addEventListener('click', () => {
    const phoneNumber = '551436533150';
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre regularização, averbação e financiamento do meu projeto.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  });
}
