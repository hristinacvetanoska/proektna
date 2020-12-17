const form = document.querySelector('#form\\:enter1');
const ol = document.querySelector('#ol\\:lista1');
const button = document.querySelector('#button\\:brisenje1');
const input = document.getElementById('item1');
let iArray = localStorage.getItem('i') ? JSON.parse(localStorage.getItem('i')) : [];

localStorage.setItem('i', JSON.stringify(iArray));
const data = JSON.parse(localStorage.getItem('i'));

const liMaker = (text) => {
  const p = document.createElement('p');
  p.textContent = text;
  ol.appendChild(p);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  iArray.push(input.value);
  localStorage.setItem('i', JSON.stringify(iArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});
const B = document.getElementById('button2');
B.innerHTML ="&#10084;:";
B.onclick=function(){
  count += 1;
  B.innerHTML ="&#10084;:" + count;
  localStorage.setItem('likes',count);
};
B.innerHTML=localStorage.getItem('likes');
document.getElementById('kopceLike').appendChild(B);


button.addEventListener('click', function () {
  localStorage.clear();
  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }
  iArray = [];
});