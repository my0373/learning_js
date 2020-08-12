const notes = ['Note 1', 'Note 2', 'Note 3'];
// Pop the last item from the array.
console.log(`Popping : ${notes.pop()}`)

// Append an item to the end of the list
notes.push('Note 4');
console.log(notes);

// Shift the array left effectively removing the first item from the list
console.log(`Shifting : ${notes.shift()}`)
console.log(notes);

// Unshift the array. Add an item to the start of the list.
console.log(`Shifting : ${notes.unshift('hello Dave!'.toLowerCase())}`)
console.log(`Shifting : ${notes.unshift('hello Dave!'.toUpperCase())} `)
console.log(notes);

// Use splice to remove the first item in the array.
notes.splice(0,1);

// Use splice to add a new item in position 1
notes.splice(1,0,'My second task');

// Update the entry in position 0
notes[0] = notes[0].toLowerCase();
console.log(notes);
/*
console.log(notes);
console.log(notes.length);
console.log(notes[0]);
*/
