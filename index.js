var todoLista = [...document.querySelectorAll('.do')]

const btn = document.querySelector('button')

const todo = document.querySelector(".do")


//ADD ITEMS TO TODO LIST

let toMove = [];

function add() {
   
    if (todo.value == "" || todo.value == " ") {
        alert('Empty')
    } else {
        const li = document.createElement("li");
        const ul = document.querySelector('.onhold')
        li.appendChild(document.createTextNode(todoLista[0].value));
        ul.appendChild(li);

        li.addEventListener("click", () => {
            if (li.classList.contains("selected")) {
                li.classList.remove("selected")
            } else {
                li.classList.add("selected")
                toMove.push(li)
                done.push(li)
            }
        })
        todo.value = ''
    }
}



//MOVE ITEMS TO PROGRESS LIST

function move() {
    for (let i = 0; i < toMove.length; i++) {
        if (toMove[i].classList.contains('selected')) {

            const li = toMove[i]
            const ul = document.querySelector('.inprogress')
            ul.appendChild(li);
            console.log(li)
            li.classList.remove('selected')
        }
    }
}


let done = []
///MOVE ITEMS TO DONE LIST
function moveDone() {
    for (let i = 0; i < done.length; i++) {
        const li = done[i]
        const ul = document.querySelector(".done")
      
        li.addEventListener("click", () => {
            if (li.classList.contains("selected")) {
                li.classList.remove("selected")
              
            } else {
                li.classList.add("selected")
                toMove.push(li)
                done.push(li)
            }
        })
        if(li.classList.contains("selected")){
            ul.appendChild(li);
            li.classList.remove('selected')
        }
    }


}

function clickPress(event) {
    if (event.keyCode == 13) {
       
    if (todo.value == "" || todo.value == " ") {
        alert('Empty')
    } else {
        const li = document.createElement("li");
        const ul = document.querySelector('.onhold')
        li.appendChild(document.createTextNode(todoLista[0].value));
        ul.appendChild(li);

        li.addEventListener("click", () => {
            if (li.classList.contains("selected")) {
                li.classList.remove("selected")
            } else {
                li.classList.add("selected")
                toMove.push(li)
                done.push(li)
            }
        })
        todo.value = ''
    }
    }
}