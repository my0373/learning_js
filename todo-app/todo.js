
console.log(uuidv4())

// Here we define the default todo array.
let todos = getSavedTodos()


// This is a blank filter to start with. Default is no filtering.
filters = {
    searchText: '',
    hideCompleted: false
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
    e.target.elements.newTodoName.value = ''
    addNewTodo(todos,newTodoName)
    renderTodos(todos,filters)
    }
)

// Add a listener for the "hide completed" checkbox

document.querySelector('#hideCompleted').addEventListener('change', function (e) {
        const filterCompleted = e.target.checked      
        filters.hideCompleted = filterCompleted
        renderTodos(todos,filters)
    }
)

// This listener picks up changes to the text field. It updates the filters and rerenders the div.
document.querySelector('input#filter-todos').addEventListener('input', function (e) {

    // Set the filter to the value of the search box.
    filters.searchText = e.target.value
    renderTodos(todos,filters)

})
