// Check the localStorage "todos" key and return the appropriate value.
function getSavedTodos() {

    const todosJSON = localStorage.getItem('todos')

    // If we find a non empty key, return the contents.
    // Otherwise return an empty array.
    if (todosJSON !== null ) {
        console.log('Not empty')
        console.log(todosJSON)
        return JSON.parse(todosJSON)
    } else {
        console.log('Empty')
        return []
    }
}

function saveTodos(todos) 
{
    localStorage.setItem('todos',JSON.stringify(todos))
    return todos
}

function addNewTodo(todos,newItem) 
{
    newTodo = {
        text: newItem,
        completed: false
    }
    console.log(`Adding new item ${newTodo}`)
    todos.push(newTodo)
    
    return saveTodos(todos) 
    
}

// The renderTodos function expects the filters list as well as a task list.
// It will render the list of tasks that match the supplied filter list.
function renderTodos(todos, filters) {

        // Get the todo-list div element.
        const todolist = document.querySelector('div#todo-list')
    
        // Reset the text in the div
        todolist.innerHTML = "<h4>Search results</h4>"
    
        // Filter the todo list to contain only those items that match the input field...
        // IF they are flagged as complete
        
        const completeTodos = todos.filter( function (todo) {
            if (todo.completed) {
                return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
            }
        })
    
        // Filter the todo list to contain only those items that match the input field...
        // IF they are flagged as incomplete
    
        const incompleteTodos = todos.filter( function (todo) {
            if (!todo.completed) {
                return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
            }
        })
        // Filter the todo list to contain only those items that match the input field...
        // irrespective of the completed flag.
        const allTodos = todos.filter( function (todo) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        })
    
        // Filter the todo list to contain only those items that match the input field.
        const filteredTodos = todos.filter( function (todo) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        })
    
        let renderTodos = {}
    
        if (filters.hideCompleted) {
            renderTodos = incompleteTodos
        } else {
            renderTodos = filteredTodos
        }
    
        // If the todo list is empty, then we just state there are no items left.
        // If there are items in the todo list then we iterate through them all
        //  and append them to the todo div element.
        if (renderTodos.length < 1) {
            emptyText = `No todo's left!`
            todolist.appendChild(generateTodoDOM(emptyText))
        } else {
        renderTodos.forEach( function (todo) {
            todolist.appendChild(generateTodoDOM(todo.text))
            }
        )}
    
}

function generateTodoDOM(text) {
    const todoEM = document.createElement('p')
    todoEM.textContent = text 
    
    return todoEM

}

function generateSummaryDOM() {

}