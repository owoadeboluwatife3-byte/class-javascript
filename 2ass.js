const colorinput = document.getElementById('colorinput')
const changebtn = document.getElementById('changebtn')
const resetbtn = document.getElementById('resetbtn')
changebtn.addEventListener('click', ()=>{
    const color = colorinput.value
    document.body.style.backgroundColor = color
})
resetbtn.addEventListener('click',()=>{
    
    document.body.style.backgroundColor = 'white'

})