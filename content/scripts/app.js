// گرفتن المان‌ها
const memeContainer = document.querySelector('main');
const modal = document.querySelector('.modal');
const inputS = document.querySelectorAll('input');
const firstTextMeme = document.querySelector('.first-text-meme');
const secondTextMeme = document.querySelector('.second-text-meme');
const resetBtn = document.querySelector('.reset-btn')
const userDevice = window.navigator.userAgent;
const isNotPc = /Mobi|Android/i.test(userDevice); 


const checkUserDevice = () => {
  if (isNotPc) {
    alert('Welcome!');
  } else {
    alert('404');
  }
};


window.addEventListener('load', () => {
  checkUserDevice();
  
  if (!firstTextMeme || !secondTextMeme) {
    console.error('خطا: یکی از المان‌های متن میم پیدا نشد!');
  }

  if (inputS.length === 0) {
    console.error('خطا: هیچ ورودی‌ای پیدا نشد!');
  }
});

const inputTextHandler = (e, element) => {
    const val = e.target.value; 
    const inputNum = element.getAttribute("data-number"); 

    if (inputNum === '1') {
      firstTextMeme.innerHTML = val;
    } else if (inputNum === '2') {
      secondTextMeme.innerHTML = val;
    }
  };
  
 const resetHandler = () => {
    inputS.forEach(input => {
        
        input.value  = ''
        firstTextMeme.innerHTML = '';
        secondTextMeme.innerHTML = '';
  
        
    } 

    )
 }
  inputS.forEach((input) => {
    input.addEventListener('keyup', (e) => inputTextHandler(e, input));
  });



resetBtn.addEventListener('click' , resetHandler)
  





