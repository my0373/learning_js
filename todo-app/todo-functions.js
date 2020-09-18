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
        id: uuidv4(),
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
            todolist.appendChild(generateTodoDOM(todo))
            }
        )}
    
}

function generateTodoDOM(todo) {
    const todoDivEM = document.createElement('div')
    const todoComplete = document.createElement('input')
    const todoEM = document.createElement('span')
    const delTodoEM = document.createElement('button')

    todoComplete.setAttribute('type','checkbox')

    /* 
    Originally I used this for the below code as ussing a setter seemed safer. 
    The tutorial says not, so I've simplified it below.
    if (todo.completed === true) {
        todoComplete.setAttribute('checked','')
    }
    */
    todoComplete.checked = todo.completed
    todoEM.textContent = todo.text 
    delTodoEM.textContent = 'x'
    
    todoComplete.addEventListener('click', function (e) {
        checkboxValue = e.target.checked
        console.log(`marking note ${todo.id} as ${checkboxValue}`)
        setTodoState(todo.id,checkboxValue)
    })

    delTodoEM.addEventListener('click', function (e) {
        console.log(`Note id is : ${todo.id}`)
        deleteTodo(todo.id)

    })
    
    todoDivEM.appendChild(todoComplete)
    todoDivEM.appendChild(todoEM)
    todoDivEM.appendChild(delTodoEM)




    return todoDivEM

}

function getTodoByID(id) {
    console.log(`Looking for ID : ${id}`)
    console.log(todos)
    index = todos.findIndex( function (todo) {
        return todo.id === id 
    })
    return index 
}
function setTodoState(id,checked) {

    const todoIndex = getTodoByID(id)
    console.log(`Updating todo ${todoIndex}`)
    if (todoIndex > -1) {
        todos[todoIndex].completed = checked 
    }
    saveTodos(todos)
    renderTodos(todos,filters)
}

function deleteTodo(id) {
    console.log(`Looking for ID : ${id}`)
    console.log(todos)
    const todoIndex = getTodoByID(id)

    console.log(`Removing todo ${todoIndex}`)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
    saveTodos(todos)
    renderTodos(todos,filters)
}

function generateSummaryDOM() {

}