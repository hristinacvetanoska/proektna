const form = document.querySelector('#form\\:enter');
const ol = document.querySelector('#ol\\:lista');
const button = document.querySelector('#button\\:brisenje');
const date=document.getElementById('date:date');
const naslov=document.getElementById('fname:naslov');
const input = document.getElementById('item');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
let dateArray = localStorage.getItem('datumi') ? JSON.parse(localStorage.getItem('datumi')) : [];
let titleArray = localStorage.getItem('titleS') ? JSON.parse(localStorage.getItem('titleS')) : [];

localStorage.setItem('datumi', JSON.stringify(dateArray));
localStorage.setItem('titleS', JSON.stringify(titleArray));
localStorage.setItem('items', JSON.stringify(itemsArray));

function liMaker(text) {
  const p = document.createElement('p');
  p.textContent = text;
  ol.appendChild(p);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  dateArray.push(date.value);
  localStorage.setItem('datumi', JSON.stringify(dateArray));

  titleArray.push(naslov.value);
  localStorage.setItem('titleS', JSON.stringify(titleArray));

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));


  //proba3
  liMaker(naslov.value);
  naslov.value = "";

  liMaker(date.value);
  date.value = "";

  liMaker(input.value);
  input.value = "";
});
for( var j=0;j<itemsArray.length;j++){
  var count=0;
  const p = document.createElement('p');
  const B = document.createElement('button');
  B.innerHTML ="&#10084;:";
  p.innerText = titleArray[j] + '\n' + '\n' + itemsArray[j] + '\n' + '\n' + dateArray[j] + '\n';
  B.onclick=function(){
    count += 1;
    B.innerHTML ="&#10084;:" + count;
    localStorage.setItem('likes',count);
  };
  ol.appendChild(p);
  B.innerHTML=localStorage.getItem('likes');
  ol.appendChild(B);

}
button.addEventListener('click', function () {
  localStorage.clear();
  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }
 dateArray = [];
  titleArray = [];
  itemsArray = [];
});