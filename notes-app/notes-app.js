
const notes = [{
    title: 'Arachnophobia',
    body: 'I love spiders'},{
    title: 'Postman pat',
    body: 'And his black and white cat'
}]

const ps = document.querySelectorAll('p')
console.log(ps)
ps.forEach(function (p) {
    console.log(p.textContent)
    p.textContent = "Hello Dave!"
})

// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = "Hello Spider"
document.querySelector('body').appendChild(newParagraph)
