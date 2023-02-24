let language;

const section = document.querySelector('.languages');
const languageChoose = document.querySelectorAll('.languageChoose');

languageChoose.forEach(e => {
    e.addEventListener('click', event => {
        section.classList.add('displayNone')
        e.innerText == '  English' ? language = 'english' : language = 'spanish'; 
        languageFunction()
    })
})

// HTML elements declaration

const h1index = document.getElementById('h1-index');

function languageFunction () {
    if (language === 'spanish') {
        // spanish texts
        h1index.innerText = 'Desarrollo, Diseño y Compatibilidad'
    
    } else {
        // englis texts
        h1index.innerText = 'Develop, Design y Preview'
    }
}