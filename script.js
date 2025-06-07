let btnWrapper = document.getElementById("Btnwrapper");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchButton");
let todoList = document.getElementById("todoList");
let searcher = document.getElementById("searcher");
let searcherBtn = document.getElementById("searchBtn");
let arr = [];

searchBtn.addEventListener("click", ()=>{
    let name = searchInput.value;
    let li = document.createElement('li');
    todoList.appendChild(li);
    li.classList = 'li'
    li.textContent = name;
    arr.push(li.textContent);
    for (i = 0; i < arr.length; i++ ){
        localStorage.setItem(`${i}`, arr[i]);
    }
    let clearBtn = document.createElement('button');
    li.appendChild(clearBtn);
    clearBtn.classList = 'removeBtn'
    clearBtn.textContent = "Clear";
    clearBtn.addEventListener('click', () => {
        li.remove();
    });
    let changeBtn = document.createElement('button');
    changeBtn.textContent = "Change Name";
    li.appendChild(changeBtn);
    changeBtn.classList = 'changeBtn'
    changeBtn.addEventListener('click', () => {
        let newName = prompt("Enter new name:");
        li.textContent = newName;
    })
    let doneBtn = document.createElement('button');
    li.appendChild(doneBtn);
    doneBtn.classList = 'done'
    doneBtn.textContent = "Done";
    doneBtn.addEventListener('click', () => {
        li.style.backgroundColor = "green";
        doneBtn.remove();
        NotDoneBtn.remove();
        clearBtn.remove();
        changeBtn.remove();
    });
    let NotDoneBtn = document.createElement('button');
    li.appendChild(NotDoneBtn);
    NotDoneBtn.classList = 'notDone'
    NotDoneBtn.textContent = "Not Done";
    NotDoneBtn.addEventListener('click', () => {
        li.style.backgroundColor = "red";
        doneBtn.remove();
        NotDoneBtn.remove();
        clearBtn.remove();
        changeBtn.remove();
    })
})
