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
//function (season) {
  //  for(i = 0; i < season.length; i++){console.log(i)};
//};

let list = document.querySelector('select');
list.addEventListener('change', function() {	
	let item = list[list.selectedIndex];
   // document.getElementByArtibute('value').innerHTML = "Tag: " + event.target.tagName;
	list.nextElementSibling.innerHTML = list[list.selectedIndex].text;
	console.log(list[list.selectedIndex]);
});