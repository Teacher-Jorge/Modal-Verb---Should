// Line 01
let btn1Possibility = document.getElementById('btn1Possibility')
let btn1Advice = document.getElementById('btn1Advice')
let btn1Expected = document.getElementById('btn1Expected')
let word1 = document.getElementById('word1')

let score = document.getElementById('score')
let value = 0

btn1Advice.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/like.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot1 = document.getElementById('slot1').appendChild(image)
    btn1Advice.style.backgroundColor = 'chartreuse'
    btn1Advice.style.color = 'black'
    word1.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Advice.disabled = true
    btn1Expected.disabled = true
    btn1Possibility.disabled = true
})

btn1Possibility.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot1 = document.getElementById('slot1').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 1000)
    btn1Possibility.style.backgroundColor = 'red'
    btn1Possibility.style.color = 'yellow'
    word1.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Possibility.disabled = true
})

btn1Expected.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot1 = document.getElementById('slot1').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 1000)
    btn1Expected.style.backgroundColor = 'red'
    btn1Expected.style.color = 'yellow'
    word1.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Expected.disabled = true
})

// Line 02

let btn2Possibility = document.getElementById('btn2Possibility')
let btn2Advice = document.getElementById('btn2Advice')
let btn2Expected = document.getElementById('btn2Expected')
let word2 = document.getElementById('word2')


btn2Possibility.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/like.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot2 = document.getElementById('slot2').appendChild(image)
    btn2Possibility.style.backgroundColor = 'chartreuse'
    btn2Possibility.style.color = 'black'
    word2.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Possibility.disabled = true
    btn2Expected.disabled = true
    btn2Possibility.disabled = true
})


btn2Advice.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot2 = document.getElementById('slot2').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 1200)
    btn2Advice.style.backgroundColor = 'red'
    btn2Advice.style.color = 'yellow'
    word2.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Advice.disabled = true
})

btn2Expected.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot2 = document.getElementById('slot2').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 1000)
    btn2Expected.style.backgroundColor = 'red'
    btn2Expected.style.color = 'yellow'
    word2.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Expected.disabled = true
})

// Line 03

let btn3Possibility = document.getElementById('btn3Possibility')
let btn3Advice = document.getElementById('btn3Advice')
let btn3Expected = document.getElementById('btn3Expected')
let word3 = document.getElementById('word3')


btn3Expected.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/like.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot3 = document.getElementById('slot3').appendChild(image)
    btn3Expected.style.backgroundColor = 'chartreuse'
    btn3Expected.style.color = 'black'
    word3.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Advice.disabled = true
    btn3Possibility.disabled = true
    btn3Expected.disabled = true
})

btn3Advice.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot3 = document.getElementById('slot3').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 1000)
    btn3Advice.style.backgroundColor = 'red'
    btn3Advice.style.color = 'yellow'
    word3.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Advice.disabled = true
})

btn3Possibility.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot3 = document.getElementById('slot3').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 1000)
    btn3Possibility.style.backgroundColor = 'red'
    btn3Possibility.style.color = 'yellow'
    word3.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Possibility.disabled = true
})

// Line 04
let btn4Possibility = document.getElementById('btn4Possibility')
let btn4Advice = document.getElementById('btn4Advice')
let btn4Expected = document.getElementById('btn4Expected')
let word4 = document.getElementById('word4')



btn4Advice.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/like.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot4 = document.getElementById('slot4').appendChild(image)
    btn4Advice.style.backgroundColor = 'chartreuse'
    btn4Advice.style.color = 'black'
    word4.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Advice.disabled = true
    btn4Expected.disabled = true
    btn4Possibility.disabled = true
})

btn4Possibility.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot4 = document.getElementById('slot4').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 999)
    btn4Possibility.style.backgroundColor = 'red'
    btn4Possibility.style.color = 'yellow'
    word4.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Possibility.disabled = true
})

btn4Expected.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '40')
    image.setAttribute('height', '40')
    let slot4 = document.getElementById('slot4').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 999)
    btn4Expected.style.backgroundColor = 'red'
    btn4Expected.style.color = 'yellow'
    word4.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Expected.disabled = true
})

// Line 05

let btn5Possibility = document.getElementById('btn5Possibility')
let btn5Advice = document.getElementById('btn5Advice')
let btn5Expected = document.getElementById('btn5Expected')
let word5 = document.getElementById('word5')


btn5Expected.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/like.png')
    image.setAttribute('width', '50')
    image.setAttribute('height', '50')
    let slot5 = document.getElementById('slot5').appendChild(image)
    btn5Expected.style.backgroundColor = 'chartreuse'
    btn5Expected.style.color = 'black'
    word5.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Advice.disabled = true
    btn5Possibility.disabled = true
    btn5Expected.disabled = true
})

btn5Advice.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '50')
    image.setAttribute('height', '50')
    let slot5 = document.getElementById('slot5').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 999)
    btn5Advice.style.backgroundColor = 'red'
    btn5Advice.style.color = 'yellow'
    word5.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Advice.disabled = true
})

btn5Possibility.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '50')
    image.setAttribute('height', '50')
    let slot5 = document.getElementById('slot5').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 999)
    btn5Possibility.style.backgroundColor = 'red'
    btn5Possibility.style.color = 'yellow'
    word5.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Possibility.disabled = true
})

// Line 06
let btn6Possibility = document.getElementById('btn6Possibility')
let btn6Advice = document.getElementById('btn6Advice')
let btn6Expected = document.getElementById('btn6Expected')
let word6 = document.getElementById('word6')



btn6Advice.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/like.png')
    image.setAttribute('width', '60')
    image.setAttribute('height', '60')
    let slot6 = document.getElementById('slot6').appendChild(image)
    btn6Advice.style.backgroundColor = 'chartreuse'
    btn6Advice.style.color = 'black'
    word6.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Advice.disabled = true
    btn6Expected.disabled = true
    btn6Possibility.disabled = true
})

btn6Possibility.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '60')
    image.setAttribute('height', '60')
    let slot6 = document.getElementById('slot6').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 999)
    btn6Possibility.style.backgroundColor = 'red'
    btn6Possibility.style.color = 'yellow'
    word6.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Possibility.disabled = true
})

btn6Expected.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let image = document.createElement('img')
    image.setAttribute('src', 'assets/notGood.png')
    image.setAttribute('width', '60')
    image.setAttribute('height', '60')
    let slot6 = document.getElementById('slot6').appendChild(image)
    setTimeout(function() {
        image.remove()
    }, 999)
    btn6Expected.style.backgroundColor = 'red'
    btn6Expected.style.color = 'yellow'
    word6.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Expected.disabled = true
})


