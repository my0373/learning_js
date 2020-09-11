
/*
const p =  document.querySelector('p')

console.log(p)
p.remove()
 */

const ps = document.querySelectorAll('p')
console.log(ps)
ps.forEach(function (p) {
    console.log(p.textContent)
    p.textContent = "Hello Dave!"
})