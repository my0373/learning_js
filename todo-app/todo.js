// remove all paragraph selectors that contain the word the.

const ps = document.querySelectorAll('p')

ps.forEach( function (p ) {
    console.log(p)
    if (p.textContent.toLowerCase().includes('the')) {
        console.log(`Removing element with text ${p.textContent}`)
        p.remove()
    }
})