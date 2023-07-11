const cards = document.querySelector('.cards')
const form = document.querySelector('.search__users')
const refresh = document.querySelector('.refresh')
const clear = document.querySelector('.clear')




const modeLocal = localStorage.getItem('mode')
if (modeLocal) {
    darkMode.classList.toggle('hidden')
    lightMode.classList.toggle('hidden')
    body.classList.toggle('body__dark')
}

const toggleMode = () => {
    darkMode.classList.toggle('hidden')
    lightMode.classList.toggle('hidden')
    body.classList.toggle('body__dark')
}

darkMode.addEventListener('click', () => {
    toggleMode()
    localStorage.setItem('mode', 'dark-item')
})
lightMode.addEventListener('click', () => {
    toggleMode()
    localStorage.setItem('mode', '')
})

refresh.addEventListener('click', (e) => {
    e.preventDefault()
    reload()
    clear.classList.remove('hidden')
    inputValue = ''
})

clear.addEventListener('click', (e) => {
    e.preventDefault()
    cards.innerHTML = ''
    clear.classList.add('hidden')
    inputValue = ''
})
// console.log(delBtn);
// delBtn.addEventListener('click', ()=>
// console.log(delBtn.parentElement)
// )





form.search__input.addEventListener('input', () => {
    const inputValue = form.search__input.value.toLowerCase()
    refresh.addEventListener('click', (e) => {
        inputValue = ''
    })
    clear.addEventListener('click', (e) => {
        inputValue = ''
    })
    const userName = document.querySelectorAll('.user__name')
    console.log(inputValue);
    userName.forEach(item => {
        if (item.innerText.toLowerCase().includes(inputValue)) {
            item.parentElement.classList.remove('hidden')
        }else{
            item.parentElement.classList.add('hidden')
        }
    })
})


const updateUl = (data) => {
    cards.innerHTML = ''
    data.forEach(item => {
        // console.log(item);
        const { gender, name, picture, location, dob } = item;
        cards.innerHTML += `       <div class="card">
        <img src="${picture.large}" alt="user">
        <span class = 'user__name'><i class="fa-regular fa-circle-user"></i> - ${name.title} ${name.first} ${name.last}</span>
        <span><i class="fa-solid fa-cake-candles"></i> - ${dob.age} years old</span>
        <spam><i class="fa-solid fa-street-view"></i> - ${location.city} ${location.country}</spam>
        <span><i class="fa-solid fa-person-half-dress"></i> - ${gender}</span>
        <i class="delete__icon__btn fa-regular fa-trash-can "></i>
        </div>`

        
    });
}

document.addEventListener('click', (e)=>{
    if (e.target.classList[0] == 'delete__icon__btn') {
        console.log(e.target);
        e.target.parentElement.remove()
    }
    if (!cards.children.length) {
        clear.classList.add('hidden')
    }
})


