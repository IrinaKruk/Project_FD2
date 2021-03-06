"use strict"

let elementForm = document.getElementById('form');
elementForm.addEventListener('submit', formSubmit);


let elementMan = document.getElementById('man');
elementMan.addEventListener('blur', () => manValid(false));

function manValid(focusOnErr) {
   let errCount = 0;
   let manValue = document.getElementById('man').value;
   let manElem = document.getElementById('man');
   let manElemErr = document.getElementById('manErr');
   if (manValue === '') {
      manElemErr.innerHTML = 'Заполните поле';
      errCount++;
      if (focusOnErr) {
         manElem.focus();
      }
   } else {
      manElemErr.innerHTML = '';
   }
   return errCount;
}


let elementName = document.getElementById('name');
elementName.addEventListener('blur', () => nameValid(false));

function nameValid(focusOnErr) {
   let errCount = 0;
   let nameValue = document.getElementById('name').value;
   let nameElem = document.getElementById('name');
   if (nameValue === '') {
      document.getElementById('nameErr').innerHTML = 'Заполните поле';
      errCount++;
      if (focusOnErr) {
         nameElem.focus();
      }
   } else {
      document.getElementById('nameErr').innerHTML = '';
   }
   return errCount;
}


let elementUrl = document.getElementById('url');
elementUrl.addEventListener('blur', () => urlValid(false));

function urlValid(focusOnErr) {
   let errCount = 0;
   let urlValue = document.getElementById('url').value;
   let urlElem = document.getElementById('url');
   if ((urlValue === '') || !(urlValue.includes('www'))) { /*!(urlValue.includes('.')) - не могу понять как добавить и это условие, и можно ли вообще...*/
      document.getElementById('urlErr').innerHTML = 'Заполните поле';
      errCount++;
      if (focusOnErr) {
         urlElem.focus();
      }
   } else if (!(urlValue.includes('.'))) {
      document.getElementById('urlErr').innerHTML = 'Заполните поле';
      errCount++;
      if (focusOnErr) {
         urlElem.focus();
      }
   } else {
      document.getElementById('urlErr').innerHTML = '';
   }
   return errCount;
}


let elementDate = document.getElementById('date');
elementDate.addEventListener('blur', () => dateValid(false));

function dateValid(focusOnErr) {
   let errCount = 0;
   let dateValue = document.getElementById('date').value;
   let dateElem = document.getElementById('date');
   if (dateValue === '') {
      document.getElementById('dateErr').innerHTML = 'Заполните поле';
      errCount++;
      if (focusOnErr) {
         dateElem.focus();
      }
   } else {
      document.getElementById('dateErr').innerHTML = '';
   }
   return errCount;
}


let elementVisitor = document.getElementById('visitor');
elementVisitor.addEventListener('blur', () => visitorValid(false));

function visitorValid(focusOnErr) {
   let errCount = 0;
   let visitorValue = document.getElementById('visitor').value;
   let visitorElem = document.getElementById('visitor');
   if (visitorValue === '' || isNaN(visitorValue)) {
      document.getElementById('visitorErr').innerHTML = 'Заполните поле';
      errCount++;
      if (focusOnErr) {
         visitorElem.focus();
      }
   } else {
      document.getElementById('visitorErr').innerHTML = '';
   }
   return errCount;
}


let elementMail = document.getElementById('mail');
elementMail.addEventListener('blur', () => mailValid(false));

function mailValid(focusOnErr) {
   let errCount = 0;
   let mailValue = document.getElementById('mail').value;
   let mailElem = document.getElementById('mail');
   if ((mailValue === '') || !(mailValue.includes('@'))) {
      document.getElementById('mailErr').innerHTML = 'Заполните поле';
      errCount++;
      if (focusOnErr) {
         mailElem.focus();
      }
   } else if (!(mailValue.includes('.'))) {
      document.getElementById('mailErr').innerHTML = 'Заполните поле';
      errCount++;
      if (focusOnErr) {
         mailElem.focus();
      }
   } else {
      document.getElementById('mailErr').innerHTML = '';
   }
   return errCount;
}


let elementSelect = document.getElementById('select');
elementSelect.addEventListener('change', () => selectValid(false));
//console.log(elementSelect);

function selectValid(focusOnErr) {
   let errCount = 0;
   let optionElem = elementSelect.getElementsByTagName('option');
   //console.log(optionElem);
   for (let i = 1; i < optionElem.length; i++) {
      let op = optionElem[i].selected;
      //console.log(r);
      if (op === false) {
         document.getElementById('selectErr').innerHTML = 'Заполните поле';
         errCount++;
         if (focusOnErr) {
            elementSelect.focus();
         }
      } else {
         document.getElementById('selectErr').innerHTML = '';
         errCount = 0;
         break;
      }
   }
   //alert(errCount);
   return errCount;
}


let elementRadio = document.getElementById('div');
elementRadio.addEventListener('change', () => radioValid(false));
//console.log(elementRadio);

function radioValid(focusOnErr) {
   let errCount = 0;
   let radioElem = elementRadio.getElementsByTagName('input');
   //console.log(radioElem);
   for (let i = 0; i < radioElem.length; i++) {
      let r = radioElem[i].checked;
      //console.log(r);
      if (r === false) {
         document.getElementById('radioErr').innerHTML = 'Заполните поле';
         errCount++;
         if (focusOnErr) {
            elementRadio.focus();
         }
      } else {
         document.getElementById('radioErr').innerHTML = '';
         errCount = 0;
         break;
      }
   }
   //alert(errCount);
   return errCount;
}


let elementCheck = document.getElementById('check');
elementCheck.addEventListener('change', () => checkValid(false));

function checkValid(focusOnErr) {
   let errCount = 0;
   let checkElem = document.getElementById('check');
   if (checkElem.checked === false) {
      document.getElementById('checkErr').innerHTML = 'Заполните поле';
      errCount++;
      if (focusOnErr) {
         checkElem.focus();
      }
   } else {
      document.getElementById('checkErr').innerHTML = '';
   }
   return errCount;
}


let elementText = document.getElementById('text');
elementText.addEventListener('blur', () => textValid(false));

function textValid(focusOnErr) {
   let errCount = 0;
   let textValue = document.getElementById('text').value;
   let textElem = document.getElementById('text');
   if (textValue === '') {
      document.getElementById('textErr').innerHTML = 'Заполните поле';
      errCount++;
      if (focusOnErr) {
         textElem.focus();
      }
   } else {
      document.getElementById('textErr').innerHTML = '';
   }
   return errCount;
}


function formSubmit(eo) {
   let errCount = 0;
   errCount += manValid(!errCount);
   errCount += nameValid(!errCount);
   errCount += urlValid(!errCount);
   errCount += dateValid(!errCount);
   errCount += visitorValid(!errCount);
   errCount += mailValid(!errCount);
   errCount += checkValid(!errCount);
   errCount += selectValid(!errCount);
   errCount += radioValid(!errCount);
   errCount += textValid(!errCount);
   if (errCount) {
      eo.preventDefault();
   }
}