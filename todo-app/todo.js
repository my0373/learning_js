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

// A couple of simple functions to allow us to pick out the tasks we want.
function isComplete(task) {
    return task.completed === true
}

function isIncomplete(task) {
    return task.completed === false
}

// We now run these filters on the array twice, counting the length of the array.
let completed = tasks.filter(isComplete).length
let uncompleted = tasks.filter(isIncomplete).length

// Define the summary message
const summaryText = `You have ${completed + uncompleted} tasks in total. ${completed} tasks have been completed. ${uncompleted} tasks are incomplete`

// Go through each task and print it in green if completed, otherwise in red.
// I could have done this using the same list filtering as above, but I wanted to show both methods.
// Then append the task to the bottom of the body object
tasks.forEach( function (task ) {
    if (task.completed === true) {
        const p = document.createElement('p')
        p.textContent = task.text
        p.style.color = "green"
        document.querySelector('body').appendChild(p)
    } else {
        const p = document.createElement('p')
        p.textContent = task.text
        p.style.color = "red"
        document.querySelector('body').appendChild(p)
    }
})

// create the summary and append it to the bottom of the body object
const summary = document.createElement('p')
summary.textContent = summaryText
document.querySelector('body').appendChild(summary)
document.querySelector('#create-todo').addEventListener('click',function (e){
    e.target.textContent = "Adding new todo"
})

// Add an event handler for our todo search. Using the input event to catch all keypresses.
// The 'change' event fires when we hit submit, or move focus out of the box.
document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})
// 1. print a summary message saying how many todos to complete
// 2. Print a paragraph for each todo above. Us ethe text value as the label
