const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    //Limpar todos que ja foram adcionados
    listElement.innerHTML = '';

    for (todo of todos){
        //Criar li
        const todoElement = document.createElement('li');
        //Criar texto que ficará dentro da li
        const todoText = document.createTextNode(todo);
        //Criar um elemento 'a'
        const linkElement = document.createElement('a');
        // Criar texto que ficará dentro do 'a'
        const linkText = document.createTextNode('  x');
        //Adc Href no 'a'
        linkElement.setAttribute('href', '#');

        //posição do array
        const pos = todos.indexOf(todo);
        //adc onclick como atributo do 'a'
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        //Adicionar texto no 'a'
        linkElement.appendChild(linkText);
        //Adicionando texto dentro da li
        todoElement.appendChild(todoText);
        //Adicionar 'a' no html
        todoElement.appendChild(linkElement);
        //Adicionando li dentro da ul no HTML
        listElement.appendChild(todoElement)
    }
}

renderTodos();

function addTodos(){
    // Pega o valor do input
    const textTodo = inputElement.value;
    // Coloca o valor no final do array 'todos'
    todos.push(textTodo);
    //Limpar o input
    inputElement.value = '';
    // Renderiza novamente com o todo adicionado
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodos;

function deleteTodo(pos){
    //remover 1 item dada uma posição
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    //Armazenando os 'todos' localmente em formato json (Javascript Object Notation)
    localStorage.setItem('list_todos', JSON.stringify(todos));
}