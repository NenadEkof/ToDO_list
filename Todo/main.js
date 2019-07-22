const showInput = document.querySelector('.open-input');
const inputSec = document.querySelector('.input-sec');
const task = document.querySelector('.task');
const submitBtn = document.querySelector('.submit-btn');
const userList = document.querySelector('ul');

showInput.addEventListener('click',ToogleInput);
submitBtn.addEventListener('click',OnSubmit);

let itemsArray= [];
localStorage.setItem('items',JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));



function ToogleInput(){
    if (inputSec.style.display === 'none'){
        inputSec.style.display = 'block'
    }
    else {
        inputSec.style.display = 'none';
    }
}
function OnSubmit(e){
    e.preventDefault();
    if (task.value === ''){
        alert('You can not enter blank field');
    }
    else {
        const li = document.createElement('li');
        li.append(document.createTextNode(`${task.value}`))
        userList.append(li);
        task.value= '';
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        itemsArray.push(task.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));

        span.className = 'close';
        span.append(txt);
        li.append(span);
        let close = document.querySelectorAll('.close');
        for (let i = 0;i < close.length; i++){
            close[i].onclick = function(){
                let div = this.parentElement;
                div.style.display = 'none';
            }
        }
        
        
        }

}
userList.addEventListener('click',checked);
function checked(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
    
}

let myNodeList = document.querySelectorAll('LI');
for(let i = 0; i < myNodeList.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.append(txt);
    myNodeList[i].append(span);
}

let close = document.querySelectorAll('.close');
for (let i = 0;i < close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = 'none';
    }
}
