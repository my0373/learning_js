// The tasks are now an array in code.
const todos = [{
    text: 'make coffee',
    completed: true
},{
    text: 'feed the guinea pigs',
    completed: true
},{
    text: 'Hide the bodies',
    completed: true
},{
    text: 'buy acid',
    completed: true
},{
    text: 'buy plastic buckets',
    completed: false
},{
    text: 'Wash up',
    completed: false
},]

// This is a blank filter to start with. Default is no filtering.
filters = {
    searchText: ''
}

// The renderTodos function expects the filters list as well as a task list.
// It will render the list of tasks that match the supplied filter list.
const renderTodos = function(todos, filters) {

    // Get the todo-list div element.
    const todolist = document.querySelector('div#todo-list')

    // Reset the text in the div
    todolist.innerHTML = "<h4>Search results</h4>"

    // Filter the todo list to contain only those items that match the input field.
    const filteredTodos = todos.filter( function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // For each
    filteredTodos.forEach( function (todo) {

        const todoEM = document.createElement('p')
        todoEM.textContent = todo.text
        todolist.appendChild(todoEM)

    })

}

const addNewTodo = function(todos,newItem) {
    newTodo = {
        text: newItem,
        completed: false
    }
    todos.push(newTodo)
}

// The entry point where we load all the todos.
renderTodos(todos,filters)

/*
    ** Listeners **
*/


// Set an event handler on the "add new todo form".
// Override the default page refresh on submit and manually get the element based
// on it's form name within the "target.elements" array.
// We then add the new todo (on the assumption it's not complete)
//  to the list and rerender the page.

document.querySelector('form#new-todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const newTodoName = e.target.elements.newTodoName.value
    addNewTodo(todos,newTodoName)
    renderTodos(todos,filters)
    }
)

// This listener picks up changes to the text field. It updates the filters and rerenders the div.
document.querySelector('input#filter-todos').addEventListener('input', function (e) {

    // Set the filter to the value of the search box.
    filters.searchText = e.target.value
    renderTodos(todos,filters)

})