document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.rating');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));

        button.classList.toggle('active');
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    let selectedRating = null;

    const ratingButtons = document.querySelectorAll('.rating');

    ratingButtons.forEach(button => {
      button.addEventListener('click', function() {
        ratingButtons.forEach(btn => btn.classList.remove('selected'));

        button.classList.add('selected');
        selectedRating = button.value;
      });
    });

    const submitButton = document.querySelector('.submit_btn');

    submitButton.addEventListener('click', function() {
      const numberSelectedElement = document.querySelector('.number_selected');
      if (selectedRating !== null) {
        numberSelectedElement.textContent = selectedRating;
      } else {
        numberSelectedElement.textContent = ''; 
        alert('Please select a rating before submitting.');
      }
    });
  });
 document.addEventListener('DOMContentLoaded', function() {
  let selectedRating = null;

  const ratingButtons = document.querySelectorAll('.rating');
  

  ratingButtons.forEach(button => {
    button.addEventListener('click', function() {

      ratingButtons.forEach(btn => btn.classList.remove('selected'));

      button.classList.add('selected');

      selectedRating = button.value;
    });
  });

  const submitButton = document.querySelector('.submit_btn');
  
  submitButton.addEventListener('click', function() {
    const numberSelectedElement = document.querySelector('.number_selected');
    const mainDiv = document.querySelector('.main');
    const thankYouDiv = document.querySelector('.thankYou');
    
    if (selectedRating !== null) {
      numberSelectedElement.textContent = selectedRating;
      thankYouDiv.style.display = 'flex';
      mainDiv.style.display = 'none';
    } else {
      numberSelectedElement.textContent = ''; 
      alert('Please select a rating before submitting.');
    }
  });
});

  
    
  