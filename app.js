
// <========================  digital watch ======================================>


const clock = document.querySelector('.clock');
const name = document.querySelector('#name');

clock.style.color = '#fff';

clock.style.display = 'inline-block' ;
clock.style.fontFamily = 'italic'









setInterval(function(){
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    let ampm = h > 12 ? 'PM' : 'AM';
    let timeout = h > 12 ? h-12 : h;

    let hour = '';
    if(h == 0){
        hour = 12;
    }else if(h > 0 &&  h <=12){
        hour = h;
    }else{
        hour = h-12;
    }


    let second = '';
    if(s < 10){
        second = '0'+s
    }else{
        second = s;
    }

    
   


  clock.innerHTML = `${hour}:${m}:${second} ${ampm}`

},1000)










// ====================counter with loader===============================




let box = document.querySelector('.box');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let output = document.querySelector('#output');
let count = document.querySelector('#count');
let loader = document.querySelector('.loader');



let counter_value ;
let counter;


start.addEventListener('click',function(){
   

  counter_value =  count.value ;
  output.innerHTML = counter_value ;



  counter = setInterval(function(){

    output.innerHTML = counter_value ;


    let width = dynamicloader(count.value,counter_value);
    loader.style.width = `${width}%`;

    if(width > 80 && width <=100 ){
        loader.style.backgroundColor = "blue";
    }else if(width > 40 && width <=80 ){
        loader.style.backgroundColor = "green";
    }else if(width > 10 && width <=40 ){
        loader.style.backgroundColor = "orange";
    } else if(width >= 0  && width <=10){
        loader.style.backgroundColor = "blue";
    };
    
    


    if(counter_value == 0){
        clearInterval(counter);

    }

    counter_value-- ;








  }, 1000)





});





//   <===============To-do===================>





const todo = document.querySelector('#do');
const add = document.querySelector('#add');
const list = document.querySelector('#list');




add.addEventListener('click',function(){

   let li = document.createElement('li');
   li.className = 'list-group-item';
   li.innerText = todo.value ;
   list.appendChild(li);
   todo.value = '';




});





//===================== subject marks add==========================>


const doname = document.querySelector('#doname');
const number = document.querySelector('#number');
const checkbtn = document.querySelector('#checkbtn');
const result = document.querySelector('#result');




checkbtn.addEventListener('click',function(){

   result.innerHTML = submarks(doname.value,number.value);





})













