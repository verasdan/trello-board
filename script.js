
function allowDrop(ev) {
    ev.preventDefault();
    }
    function drag(ev) {
    
    ev.dataTransfer.setData("card",
    
    ev.target.id);
    }
    
    function drop(ev, id) {
    ev.preventDefault();
    const target = document.getElementById(id);
    const data =
    
    ev.dataTransfer.getData("card");
    
    const cardId = document.getElementById(data)
    target.appendChild(cardId);
    ev.dataTransfer.clearData();
    }
    function addCard(element) {
    const text = prompt('Qual é a tarefa?');
    if (!text) return;
    const cardId = +new Date();
    const cardTemplate = `
    
    <li id="${cardId}" class="card"
    
    draggable="true" ondragstart="drag(event)">
    
    <p>${text}</p>
    
    <p class="remove" onclick="removeCard(this)">x</p>
    
    </li>
    `
    
    const board =
    document.getElementById(element.previousElementSibling.id);
    
    board.innerHTML += cardTemplate;
    }
    
    function removeCard (element) {
        document.getElementById(element.parentElement.id).remove();
    }