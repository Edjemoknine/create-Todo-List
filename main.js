const input = document.getElementById("input");
const add = document.getElementById("add");
const content = document.getElementById("content");

add.addEventListener('click', function() {

    let task = document.createElement('div');
    task.classList.add('task');

    let list = document.createElement('li');
    list.innerText = `${input.value}`;
    task.appendChild(list);

    let chekbtn = document.createElement('button');
    chekbtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    chekbtn.classList.add('chekclass');
    task.appendChild(chekbtn);

    let btn = document.createElement('button');
    btn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    btn.classList.add('Deleteclass');
    task.appendChild(btn);


    if (input.value === "") {
        alert('Please Enter a Task');
    } else {
        content.appendChild(task);
    }

    input.value = "";

    btn.addEventListener('click', function(e) {
        e.target.parentElement.remove();

    });

    chekbtn.addEventListener('click', function() {
        list.style.textDecoration = 'line-through';

    });



});