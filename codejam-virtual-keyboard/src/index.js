import './scss/main.scss';
import ru from './data/ru.json';


const textArea = document.getElementById('textarea');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


function swap(json) {
  const ret = {};
  Object.keys(json)
    .forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        ret[json[key]] = key;
      }
    });
  return ret;
}

const en = swap(ru);
console.log(en);

localStorage.setItem('lang', localStorage.getItem('lang') || 'ru');
if (localStorage.getItem('lang') === 'ru') {
  const letters = document.getElementsByClassName('letter');
  [].forEach.call(letters, (element) => {
    const elem = element; // Doing this to avoid mutating the arguments object, eslint no-param-reassign
    elem.innerHTML = ru[elem.textContent];
  });
  const symbols = document.getElementsByClassName('symbol');
  [].forEach.call(symbols, (symbol) => {
    const sym = symbol;
    if (ru[sym.firstChild.textContent]) {
      sym.firstChild.innerHTML = ru[sym.firstChild.textContent];
    }
  });
}

document.addEventListener('keydown', async (event) => {
  console.log(event);
  if (event.location !== 0) {
    if (event.key === 'Meta') {
      document.getElementById('leftShift')
        .classList
        .add('pressed');
      document.getElementById('leftAlt')
        .classList
        .add('pressed');
      await sleep(300);
      document.getElementById('leftShift')
        .classList
        .remove('pressed');
      document.getElementById('leftAlt')
        .classList
        .remove('pressed');
      const letters = document.getElementsByClassName('letter');
      const symbols = document.getElementsByClassName('symbol');
      const lang = localStorage.getItem('lang');
      [].forEach.call(letters, (element) => {
        const elem = element;
        if (lang === 'en') {
          if (ru[elem.textContent]) {
            elem.innerHTML = ru[elem.textContent];
          }
        } else if (en[elem.textContent]) {
          elem.innerHTML = en[elem.textContent];
        }
      });
      [].forEach.call(symbols, (symbol) => {
        const elem = symbol.firstChild;
        if (lang === 'en') {
          if (ru[elem.textContent]) {
            elem.innerHTML = ru[elem.textContent];
          }
        } else if (en[elem.textContent]) {
          elem.innerHTML = en[elem.textContent];
        }
      });
      localStorage.setItem('lang', lang === 'ru' ? 'en' : 'ru');
    } else if (event.key === 'Shift') {
      const letters = document.getElementsByClassName('letter');
      [].forEach.call(letters, (element) => {
        const elem = element;
        elem.innerHTML = elem.textContent.toUpperCase();
      });
      const symbols = document.getElementsByClassName('symbol');
      [].forEach.call(symbols, (symbol) => {
        const sym = symbol;
        if (localStorage.getItem('lang') === 'ru') {
          if (sym.lastChild.classList && sym.lastChild.classList.contains('on-ru')) {
            sym.firstChild.classList.remove('off');
            sym.firstChild.classList.add('on');

            sym.lastChild.classList.remove('on-ru');
            sym.lastChild.classList.add('off-ru');
          } else {
            sym.firstChild.innerHTML = sym.firstChild.textContent.toUpperCase();
          }
        } else {
          sym.firstChild.classList.remove('off');
          sym.firstChild.classList.add('on');

          const secondChild = sym.getElementsByClassName('on')[1];
          secondChild.classList.remove('on');
          secondChild.classList.add('off');
        }
      });
    } else {
      document.getElementById(`${event.location === 1 ? 'left' : 'right'}${event.key}`)
        .classList
        .add('pressed');
    }
  } else {
    if (event.key === 'CapsLock') {
      // Looping through each letter and making its text either upperCase or lowerCase
      const array = document.getElementsByClassName('letter');
      [].forEach.call(array, (element) => {
        const elem = element;
        elem.innerHTML = elem.textContent === elem.textContent.toUpperCase()
          ? elem.textContent.toLowerCase()
          : elem.textContent.toUpperCase();
      });
    }
    console.log(event.key.charCodeAt(0));
    if (event.key.charCodeAt(0) >= 128) {
      const element = document.getElementById(en[event.key] || en[event.key.toLowerCase()]);
      console.log(en[event.key]);
      if (element.parentElement) {
        element
          .parentElement
          .classList
          .add('pressed');
      }
      element
        .classList
        .add('pressed');
      element.classList.add('pressed');
    } else {
      if (event.shiftKey) {
        // if (event.key === ',') {
        const element = document.getElementById((event.key === ',' || event.key === '/')
          ? en[event.key]
          : event.key.toLowerCase());
        console.log(en[event.key]);
        if (element.parentElement) {
          element
            .parentElement
            .classList
            .add('pressed');
        }
        element.classList.add('pressed');
        // }
      } else {
        if (document.getElementById(event.key.toLowerCase()).parentElement) {
          document.getElementById(event.key.toLowerCase())
            .parentElement
            .classList
            .add('pressed');
        }
        document.getElementById(event.key.toLowerCase())
          .classList
          .add('pressed');
      }
    }
    textArea.blur();
    if (event.key === ' ') {
      textArea.value += ' ';
    } else if (event.key.toLowerCase() === 'backspace') {
      textArea.value = textArea.value.substring(0, textArea.value.length - 1);
    } else if (event.key.charCodeAt(0) <= 128) {
      if (localStorage.getItem('lang') === 'ru') {
        if (event.shiftKey) {
          // textArea.value += (ru[event.key] || ru[event.key.toLowerCase()]).toUpperCase();
          if (event.code.includes('Digit')) {
            textArea.value += event.key.toLowerCase();
          } else {
            textArea.value += ru[event.key.toLowerCase()].toUpperCase();
          }
        } else {
          textArea.value += ru[event.key.toLowerCase()] ? ru[event.key.toLowerCase()] : event.key;
        }
      } else if (event.shiftKey && (event.key === ',' || event.key === '/')) {
        textArea.value += en[event.key];
      } else {
        textArea.focus();
      }
    } else if (localStorage.getItem('lang') === 'en') {
      if (event.shiftKey) {
        // console.log(event.key.toLowerCase());
        // console.log(en[event.key.toLowerCase()]);
        // textArea.value += en[event.key.toLowerCase()].toUpperCase();
        textArea.value += (en[event.key] || en[event.key.toLowerCase()]).toUpperCase();
        console.log(en[event.key]);
      } else {
        textArea.value += en[event.key.toLowerCase()];
      }
    } else {
      textArea.focus();
    }
    if (event.key === 'Tab') {
      await sleep(300);
      document.getElementById(event.key.toLowerCase())
        .classList
        .remove('pressed');
    }
  }
});

document.addEventListener('keyup', async (event) => {
  await sleep(100);
  if (event.location !== 0) {
    if (event.key === 'Meta') {
      document.getElementById('leftShift')
        .classList
        .remove('pressed');
      document.getElementById('leftAlt')
        .classList
        .remove('pressed');
    } else if (event.key === 'Shift') {
      const letters = document.getElementsByClassName('letter');
      [].forEach.call(letters, (element) => {
        const elem = element;
        elem.innerHTML = elem.textContent.toLowerCase();
      });
      const symbols = document.getElementsByClassName('symbol');
      [].forEach.call(symbols, (symbol) => {
        const sym = symbol;
        sym.firstChild.classList.remove('on');
        sym.firstChild.classList.add('off');

        if (localStorage.getItem('lang') === 'ru') {
          if (sym.lastChild.classList && sym.lastChild.classList.contains('off-ru')) {
            sym.lastChild.classList.remove('off-ru');
            sym.lastChild.classList.add('on-ru');
          } else {
            sym.firstChild.innerHTML = sym.firstChild.textContent.toLowerCase();
          }
        } else {
          const secondChild = sym.getElementsByClassName('off')[1];
          secondChild.classList.add('on');
          secondChild.classList.remove('off');
        }
      });
      document.getElementById(`${event.location === 1 ? 'left' : 'right'}${event.key}`)
        .classList
        .remove('pressed');
    } else {
      document.getElementById(`${event.location === 1 ? 'left' : 'right'}${event.key}`)
        .classList
        .remove('pressed');
    }
  } else {
    if (event.shiftKey && event.key === ',') {
      const element = document.getElementById(en[event.key]);
      console.log(en[event.key]);
      if (element.parentElement) {
        element.parentElement.classList.remove('pressed');
      }
      element.classList.remove('pressed');
    }
    const element = document.getElementById(event.key.charCodeAt(0) > 128
      ? en[event.key.toLowerCase()]
      : event.key.toLowerCase());
    console.log(element);
    if (element.parentElement) {
      element.parentElement.classList.remove('pressed');
    }
    element.classList.remove('pressed');
  }
});

document.getElementById('keyboard')
  .addEventListener('click', async (event) => {
    if (!event.target.className.includes('row') && event.target.className !== '') {
      textArea.value += event.target.textContent;
      event.target.classList.add('pressed');
      await sleep(300);
      event.target.classList.remove('pressed');
    }
  });

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept(); // eslint-disable-line no-undef
}
