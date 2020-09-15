// Create an array of objects
const taskobjects = [{
    title: 'make coffee',
    body: 'Remember to make a coffee'
}, {
    title: 'feed the guinea pigs',
    body: 'Remember to feed blondie and fluffy'
}]

// For arrays of objects, we use a callback function to test if the title matches the desired string.
// If it does, we return the index of the matching object and print that element out.

// Define a function to look at the task objects and search for a supplied task title.
const findTask = function (taskobjects, taskTitle) {


    // We have now simplified this by using the find method on the array (instead of findIndex)
    // we also return the taskobjects.find directly without the need to declare a const to catch
    // the output.

    return taskobjects.find( function (task) {
        // We convert both strings to lowercase to make the search case insensitive.
        return task.title.toLowerCase() === taskTitle.toLowerCase();
    })
}

// Call the search function and return the task
task = findTask(taskobjects,'feed the guinea pigs')

// print the task
console.log(task)
