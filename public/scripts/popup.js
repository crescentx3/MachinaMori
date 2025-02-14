  // Get the popup and relevant buttons
  const popup = document.getElementById('credits-popup');
  const openPopupBtn = document.querySelector('.credits-button');
  const closePopupBtn = document.querySelector('.popup-close');

  // Function to show popup
  function showPopup() {
    popup.classList.add('visible');
  }

  // Function to hide popup
  function hidePopup() {
    popup.classList.remove('visible');
  }

  // Event listeners for open and close
  openPopupBtn.addEventListener('click', showPopup);
  closePopupBtn.addEventListener('click', hidePopup);

  // (Optional) Close popup if clicking outside the content
  popup.addEventListener('click', (e) => {
    if (e.target === popup) hidePopup();
  });