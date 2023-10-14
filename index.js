const categorias =  document.getElementById('cats')
const lista = document.getElementById('results')
const btn = document.getElementById('icon')

categorias.addEventListener('click',()=>{
    lista.classList.toggle('results--show')
    btn.classList.toggle('icon--active')
})