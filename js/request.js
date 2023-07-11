

//api
const API = 'https://randomuser.me/api/?results=9'


//overlay
const overlay = document.getElementById('overlay')


const loaderToggle = (toggle)=>{
    if(toggle){
        overlay.classList.remove('hidden')
    }else{
        overlay.classList.add('hidden')
    }
}

//request , promise

const getData = (resource)=>{
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest()


        request.addEventListener('readystatechange', ()=>{
            if (request.readyState < 4) {
                loaderToggle(true)
            }else if(request.readyState = 4 && request.status == 200){
                const data = JSON.parse(request.responseText)
                resolve(data.results);
                loaderToggle(false)
            }else if(request.readyState = 4)
                reject('Error...');
            })

        request.open('GET', resource)
        request.send()
    })
}

const reload = () =>{
    getData(API)
    .then((data)=>{
        updateUl(data);
    }).catch((err)=>{
        console.log(err);
    })
}

document.addEventListener('DOMContentLoaded', reload)