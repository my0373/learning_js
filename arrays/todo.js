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
    // Use the array findindex method to find an object whose title property
    // matches the supplied taskTitle parameter. This will return the index of the matching object,
    // or -1 if there is no match
    const index = taskobjects.findIndex( function (task) {

        // We convert both strings to lowercase to make the search case insensitive.
        return task.title.toLowerCase() === taskTitle.toLowerCase();
    })
    // Attempt to retrieve the object at the specified index in the array
    // if it is -1 (no match found) then there will be no array object and
    // we will return undefined (as we have nothing to return)
    return taskobjects[index];

}

// Call the search function and return the task
task = findTask(taskobjects,'feed the guinea pigs')

// print the task
console.log(task)
