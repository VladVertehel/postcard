let body = document.getElementById('body');
let backBtn = document.getElementById('back');
let forwardBtn = document.getElementById('forward');
let book = document.getElementById('book');
let sheet1 = document.getElementById('sheet1');
let sheet2 = document.getElementById('sheet2');
let sheet3 = document.getElementById('sheet3');
let sheet4 = document.getElementById('sheet4');
let sheet5 = document.getElementById('sheet5');
let curLoc = 1;
let numOfSheets = 5;
let maxLoc = numOfSheets + 1;
let hapBrth = document.querySelector('.happybirthday');
let sign = document.querySelector('.sign');
let money = document.querySelector('.money');
let attachment = document.querySelector('.attachment');
let buy = document.querySelector('.buy');
let fire = document.querySelector('.fire');
let fire1 = document.querySelector('.fire1');
let fire2 = document.querySelector('.fire2');
let fire3 = document.querySelector('.fire3');
let fire4 = document.querySelector('.fire4');
let cake = document.querySelector('.cake');
let music = document.getElementById('music');
let player = document.getElementById('player');
let button = document.getElementById('button');
let score = 0;
let h1 = document.getElementById('score');
let doubleclick = document.getElementById('double-click');
let tripleclick = document.getElementById('triple-click');
let fiveclick = document.getElementById('five-click');
let smiley = document.getElementById('smiley');
let demon = document.getElementById('demon');
let cup = document.getElementById('cup');
let winSound = new Audio;
winSound.src = 'audio/win.mp3';

function openBook() {
    book.style.transform = 'translateX(50%)';
    backBtn.style.transform = 'translateX(-300px)'
    forwardBtn.style.transform = 'translateX(300px)'
}
function closeBookFront() {
    book.style.transform = 'translateX(0%)';
    backBtn.style.transform = 'translateX(0px)'
    forwardBtn.style.transform = 'translateX(0px)'
}
function closeBookBack() {
    book.style.transform = 'translateX(100%)';
    backBtn.style.transform = 'translateX(0px)'
    forwardBtn.style.transform = 'translateX(0px)'
}


backBtn.addEventListener('click', () => {
    if (curLoc > 1) {
        switch (curLoc) {
            case 2:
                closeBookFront();
                sheet1.classList.remove('flipped');
                sheet1.style.zIndex = 11;
                hapBrth.classList.add('unvisible');
                sign.classList.add('unvisible');
                money.classList.add('unvisible');
                attachment.classList.add('unvisible');
                buy.classList.add('unvisible');
                fire.classList.add('unvisible');
                cake.classList.add('unvisible');
                break;
            case 3:
                sheet2.classList.remove('flipped');
                sheet2.style.zIndex = 10;
                hapBrth.classList.add('unvisible');
                sign.classList.add('unvisible');
                money.classList.add('unvisible');
                attachment.classList.add('unvisible');
                buy.classList.add('unvisible');
                fire.classList.add('unvisible');
                cake.classList.add('unvisible');
                break;
            case 4:
                sheet3.classList.remove('flipped');
                sheet3.style.zIndex = 9;
                hapBrth.classList.add('unvisible');
                sign.classList.add('unvisible');
                money.classList.remove('unvisible');
                attachment.classList.remove('unvisible');
                buy.classList.remove('unvisible');
                fire.classList.add('unvisible');
                cake.classList.add('unvisible');
                sheet4.style.zIndex = 8;
                break;
            case 5:
                sheet4.classList.remove('flipped');
                sheet4.style.zIndex = 8;
                hapBrth.classList.add('unvisible');
                sign.classList.add('unvisible');
                money.classList.add('unvisible');
                attachment.classList.add('unvisible');
                buy.classList.add('unvisible');
                fire.classList.remove('unvisible');
                cake.classList.remove('unvisible');
                sheet5.style.zIndex = 7;
                break;
            case 6:
                openBook();
                sheet5.classList.remove('flipped');
                sheet5.style.zIndex = 10;
                hapBrth.classList.add('unvisible');
                sign.classList.add('unvisible');
                money.classList.add('unvisible');
                attachment.classList.add('unvisible');
                buy.classList.add('unvisible');
                fire.classList.add('unvisible');
                cake.classList.add('unvisible');
                break;
        }
        curLoc--;
        console.log(curLoc);

        if (curLoc == 1) {
            body.style.background = 'linear-gradient(150deg, #CDB4DB 60%, #FFC8DD)'
        } else if (curLoc == 2) {
            body.style.background = 'linear-gradient(150deg, #CDB4DB 20%, #FFC8DD)';
        } else if (curLoc == 3) {
            body.style.background = 'linear-gradient(150deg, #FFC8DD 60%, #FFAFEE)';
        } else if (curLoc == 4) {
            body.style.background = 'linear-gradient(150deg, #FFC8DD 20%, #FFAFEE)';
        } else if (curLoc == 5) {
            body.style.background = 'linear-gradient(150deg, #FFAFEE 60%, #BDE0FE)';
        } else if (curLoc == 6) {
            body.style.background = 'linear-gradient(150deg, #FFAFEE 20%, #BDE0FE)';
        }
    }
});

forwardBtn.addEventListener('click', () => {
    if (curLoc < maxLoc) {
        switch (curLoc) {
            case 1:
                openBook();
                sheet1.classList.add('flipped');
                sheet1.style.zIndex = 6;
                hapBrth.classList.add('unvisible');
                sign.classList.add('unvisible');
                money.classList.add('unvisible');
                attachment.classList.add('unvisible');
                buy.classList.add('unvisible');
                fire.classList.add('unvisible');
                cake.classList.add('unvisible');
                break;
            case 2:
                sheet2.classList.add('flipped');
                sheet2.style.zIndex = 7;
                hapBrth.classList.add('unvisible');
                sign.classList.add('unvisible');
                money.classList.remove('unvisible');
                attachment.classList.remove('unvisible');
                buy.classList.remove('unvisible');
                fire.classList.add('unvisible');
                cake.classList.add('unvisible');
                break;
            case 3:
                sheet3.classList.add('flipped');
                sheet3.style.zIndex = 8;
                hapBrth.classList.add('unvisible');
                sign.classList.add('unvisible');
                money.classList.add('unvisible');
                attachment.classList.add('unvisible');
                buy.classList.add('unvisible');
                fire.classList.remove('unvisible');
                cake.classList.remove('unvisible');
                sheet4.style.zIndex = 9;
                break;
            case 4:
                sheet4.classList.add('flipped');
                sheet4.style.zIndex = 9;
                hapBrth.classList.add('unvisible');
                sign.classList.add('unvisible');
                money.classList.add('unvisible');
                attachment.classList.add('unvisible');
                buy.classList.add('unvisible');
                fire.classList.add('unvisible');
                cake.classList.add('unvisible');
                sheet5.style.zIndex = 10;
                break;
            case 5:
                closeBookBack();
                sheet5.classList.add('flipped');
                sheet5.style.zIndex = 10;
                hapBrth.classList.remove('unvisible');
                sign.classList.remove('unvisible');
                money.classList.add('unvisible');
                attachment.classList.add('unvisible');
                buy.classList.add('unvisible');
                fire.classList.add('unvisible');
                cake.classList.add('unvisible');
                break;
        }
        curLoc++;
        console.log(curLoc);

        if (curLoc == 1) {
            body.style.background = 'linear-gradient(150deg, #CDB4DB 60%, #FFC8DD)';
        } else if (curLoc == 2) {
            body.style.background = 'linear-gradient(150deg, #CDB4DB 20%, #FFC8DD)';
        } else if (curLoc == 3) {
            body.style.background = 'linear-gradient(150deg, #FFC8DD 60%, #FFAFEE)';
        } else if (curLoc == 4) {
            body.style.background = 'linear-gradient(150deg, #FFC8DD 20%, #FFAFEE)';
        } else if (curLoc == 5) {
            body.style.background = 'linear-gradient(150deg, #FFAFEE 60%, #BDE0FE)';
        } else if (curLoc == 6) {
            body.style.background = 'linear-gradient(150deg, #FFAFEE 20%, #BDE0FE)';
        }
    }
});

let counter = 1;
h1.innerHTML = 'Score: ' + score;
function oneClick() {
    if (counter == 1) {
        fire.style.opacity = 0;
        counter = 0;
    } else if (counter == 0) {
        fire.style.opacity = 1;
        counter = 1;
    }
    score++;
    h1.innerHTML = 'Score: ' + score;
}
function doubleClick() {
    if (counter == 1) {
        fire.style.opacity = 0;
        fire1.style.opacity = 0;
        counter = 0;
    } else if (counter == 0) {
        fire.style.opacity = 1;
        fire1.style.opacity = 1;
        counter = 1;
    }
    score = score + 2;
    h1.innerHTML = 'Score: ' + score;
}
function tripleClick() {
    if (counter == 1) {
        fire.style.opacity = 0;
        fire1.style.opacity = 0;
        fire2.style.opacity = 0;
        counter = 0;
    } else if (counter == 0) {
        fire.style.opacity = 1;
        fire1.style.opacity = 1;
        fire2.style.opacity = 1;
        counter = 1;
    }
    score = score + 3;
    h1.innerHTML = 'Score: ' + score;
}
function fiveClick() {
    if (counter == 1) {
        fire.style.opacity = 0;
        fire1.style.opacity = 0;
        fire2.style.opacity = 0;
        fire3.style.opacity = 0;
        fire4.style.opacity = 0;
        counter = 0;
    } else if (counter == 0) {
        fire.style.opacity = 1;
        fire1.style.opacity = 1;
        fire2.style.opacity = 1;
        fire3.style.opacity = 1;
        fire4.style.opacity = 1;
        counter = 1;
    }
    score = score + 5;
    h1.innerHTML = 'Score: ' + score;
}

cake.addEventListener('click', oneClick);

doubleclick.addEventListener('click', () => {
    if (score >= 50) {
        score = score - 50;
        h1.innerHTML = 'Score: ' + score;
        cake.removeEventListener('click', oneClick);
        cake.addEventListener('click', doubleClick);
        cake.src = 'img/double-cake.png';
        doubleclick.style.display = 'none';
        tripleclick.style.display = 'flex';
        fire1.classList.remove('unvisible');
        document.querySelector('.doubleclick').classList.remove('unvisible');
    }
})

tripleclick.addEventListener('click', () => {
    if (score >= 150) {
        score = score - 150;
        h1.innerHTML = 'Score: ' + score;
        cake.removeEventListener('click', doubleClick);
        cake.addEventListener('click', tripleClick);
        cake.src = 'img/triple-cake.png';
        tripleclick.style.display = 'none';
        fiveclick.style.display = 'flex';
        fire2.classList.remove('unvisible');
        document.querySelector('.doubleclick').classList.add('unvisible');
        document.querySelector('.tripleclick').classList.remove('unvisible');
    }
})

fiveclick.addEventListener('click', () => {
    if (score >= 1050) {
        score = score - 1050;
        h1.innerHTML = 'Score: ' + score;
        cake.removeEventListener('click', tripleClick);
        cake.addEventListener('click', fiveClick);
        cake.src = 'img/five-cake.png';
        fiveclick.style.display = 'none';
        fire3.classList.remove('unvisible');
        fire4.classList.remove('unvisible');
        document.querySelector('.tripleclick').classList.add('unvisible');
        document.querySelector('.fiveclick').classList.remove('unvisible');
    }
})

smiley.addEventListener('click', () => {
    if (score >= 150) {
        score = score - 150;
        h1.innerHTML = 'Score: ' + score;
        smiley.style.display = 'none';
        demon.style.display = 'flex';
        document.querySelector('.smiley').classList.remove('unvisible');
        setInterval(() => {
            score = score + 2;
            h1.innerHTML = 'Score: ' + score;
        }, 1000);
    }
})

demon.addEventListener('click', () => {
    if (score >= 1500) {
        score = score - 1500;
        h1.innerHTML = 'Score: ' + score;
        demon.style.display = 'none';
        document.querySelector('.demon').classList.remove('unvisible');
        setInterval(() => {
            score = score + 10;
            h1.innerHTML = 'Score: ' + score;
        }, 1000);
    }
})

cup.addEventListener('click', () => {
    if (score >= 5000) {
        score = score - 5000;
        h1.innerHTML = 'Score: ' + score;
        document.querySelector('.store').style.display = 'none';
        document.querySelector('.store-name').style.display = 'none';
        document.querySelector('.cup').classList.remove('unvisible');

        player.pause();
        music.src = 'ico/music_off_black_24dp.svg';
        setTimeout(() => {
            winSound.play();
        }, 500);
        setTimeout(() => {
            player.play();
            music.src = 'ico/music_note_black_24dp.svg';
        }, 4500);
    }
})

let anotherCounter = 1;
button.addEventListener('click', () => {
    if (anotherCounter == 1) {
        player.pause();
        music.src = 'ico/music_off_black_24dp.svg';
        anotherCounter = 0;
    } else if (anotherCounter == 0) {
        player.play();
        music.src = 'ico/music_note_black_24dp.svg';
        anotherCounter = 1;
    }
})