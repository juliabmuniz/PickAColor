const colors = ['Yellow', 'Red', 'Blue', 'Purple', 'Green', 'Black', 'Orange']
const textColors = ['Black', 'Red', 'Blue', 'Purple', 'Green', 'Black', 'Orange','Gray']
const btn = document.getElementById('btn')
const backgroundColor = document.querySelector('.backgroundColor')
const textColor = document.querySelector('.textColor')


btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    const randomColorPre = getRandomColor()
    const randomColor2 = randomColorPre === randomColor ? 7 : randomColorPre;

    document.body.style.background = colors[randomColor]
    backgroundColor.textContent = colors[randomColor]
    document.getElementById('changeColor').style.color = textColors[randomColor2]
    textColor.textContent = textColors[randomColor2]

    

})


function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}




