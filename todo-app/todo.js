// The tasks are now an array in code.
const tasks = [{
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

// Here we find the "input" element with the class of search-todos
// and add an event listner for the "input" event.

// When the event fires, we callback the renderTodos function
document.querySelector('input#search-todos').addEventListener('input', function (e) {
    console.log(e.target.value)
    renderTodos(e.target.value,tasks)
})

// The renderTodos function expects the filters list as well as a task list.
// It will render the list of tasks that match the supplied filter list.
function renderTodos (filters, tasks) {
    console.log('rendering the todos')
    const todolist = document.querySelector('#todo-list')
    todolist.innerHTML = "<h4>Search results</h4>"

    tasks.forEach( function (value) {

        const todoEM = document.createElement('p')

        if (value.text.toLowerCase().includes(filters.toLowerCase())) {
            todoEM.textContent = value.text
            todolist.appendChild(todoEM)
        }

    })

}

