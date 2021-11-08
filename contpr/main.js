
const btnReg = document.querySelector('.bottom-btn');
//
function magic() {
  if (window.pageYOffset > 100) {
    btnReg.classList.add('active');
  } else { btnReg.classList.remove('active'); }
};

// When scrolling, we run the function
window.onscroll = magic;