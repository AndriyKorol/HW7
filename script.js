//1
let btnMsg = document.getElementById('btn-msg');
	
document.addEventListener('DOMContentLoaded', function (event) {      
  btnMsg.addEventListener('click', function (){alert(event.target.tagValue)}, true );
  
  btnMsg.onmouseover = function (event) {
  let target = event.target;
  target.style.background = 'red';  
};
  
  btnMsg.onmouseout = function(event) {
  let target = event.target;
  target.style.background = '';
};

document.body.onclick = function(event) {
    document.getElementById('tag').innerHTML = "Tag: " + event.target.tagName;
  
};
});

//2
let season = [
  {"лето": "одень футболку и шорты"},
  {"осень": "одень куртку и штани"},
  {"зима": "одень шубу и теплые штаны"},
  {"весна": "одень ветровку и джынсы"}
];
const seasonsList = document.getElementById('seasons');
const input = document.querySelector('input');

input.value = seasonsActionArr[seasonsList.value][seasonsList.options[seasonsList.selectedIndex].text.toLowerCase()];

seasonsList.addEventListener ('change',function(){
    input.value = seasonsActionArr[seasonsList.value][seasonsList.options[seasonsList.selectedIndex].text.toLowerCase()];
    });
