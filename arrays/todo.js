// Create an array with 5 things todo
const todo = ['Go to Dentist',
              'Pick up the kids',
              'Finish my work',
              'Clean the car',
              'Join a call'];

// Delete the 3rd item
todo.splice(2,1)
// Add a new item onto the end
todo.push('New Item')
// remove the first item from the list.
todo.shift()

console.log(todo)
// print each item in an array using foreach and a callback function
// passing 2 variables. Item (the array item), and the index (the ordinal position).
todo.forEach( function (item, index) {
    console.log(` Item ${index + 1}: ${item} `)
})

// a for loop!
// Initial value, conditional, operation on iteration.
for (let count = 1; count <= 10; count += 2 ) {
    console.log(`Loop ${count}`);
}