import App from "./App";

let randsequence = [];
let playsequence = [];
let status = 'won';
let levelnum = 1;
let currentplace = 0;

export default function Game(colour, colourName) {
    if (status = 'won') {
        var element = document.getElementById('level-title');
        element.textContent = 'Level ' + levelnum;
    
        var element = document.getElementById(colourName);
        element.style.backgroundColor = "#9e9e9e";
        setTimeout(() => {
            element.style.backgroundColor = colourName;
        }, 100);
    
        setTimeout(300);
    
        AppendPlay(colour);
        check();
    }
};

export function PlaySound(name) {
    var audio = new Audio(process.env.PUBLIC_URL + '/sound/' + name + '.mp3');
    audio.type = 'audio/mp3';
    audio.play()
};

export function AppendPlay(colour) {
    switch (colour) {
        case 1:
            playsequence.push(1);
            console.log('pushing 1');
            if (playsequence.at(currentplace) === randsequence.at(currentplace)) {
                PlaySound('green');
            }
            else{
                PlaySound('wrong');
            }
            break;
        case 2:
            playsequence.push(2);
            console.log('pushing 2');
            if (playsequence.at(currentplace) === randsequence.at(currentplace)) {
                PlaySound('red');
            }
            else{
                PlaySound('wrong');
            }
            break;
        case 3:
            playsequence.push(3);
            console.log('pushing 3');
            if (playsequence.at(currentplace) === randsequence.at(currentplace)) {
                PlaySound('yellow');
            }
            else{
                PlaySound('wrong');
            }
            break;
        case 4:
            playsequence.push(4);
            console.log('pushing 4');
            if (playsequence.at(currentplace) === randsequence.at(currentplace)) {
                PlaySound('blue');
            }
            else{
                PlaySound('wrong');
            }
            break;
        default:
            console.log('err');
    };
}

export function RandomSequence(colourName) {
    let aaa = Math.floor(Math.random() * 4) + 1;
    switch (aaa) {
        case 1:
            var element = document.getElementById('green');
            element.style.backgroundColor = "#363636";
            setTimeout(() => {
                element.style.backgroundColor = 'green';
            }, 600);
            break;
        case 2:
            var element = document.getElementById('red');
            element.style.backgroundColor = "#363636";
            setTimeout(() => {
                element.style.backgroundColor = 'red';
            }, 600);
            break;
        case 3:
            var element = document.getElementById('yellow');
            element.style.backgroundColor = "#363636";
            setTimeout(() => {
                element.style.backgroundColor = 'yellow';
            }, 600);
            break;
        case 4:
            var element = document.getElementById('blue');
            element.style.backgroundColor = "#363636";
            setTimeout(() => {
                element.style.backgroundColor = 'blue';
            }, 600);
            break;
        default:
            console.log('error with rand shit.');
    };

    randsequence.push(aaa);
}

export function check() {
    if (playsequence.at(currentplace) !== randsequence.at(currentplace)) {
        PlaySound('wrong');
        console.log("playerlist current place = " + playsequence.at(currentplace) + " randomlist current place = " + randsequence.at(currentplace))
        playsequence=[]
        document.body.style = 'background: #911507;';
        var element = document.getElementById('level-title');
        element.textContent = 'You Failed. Press anything to retry';
        //window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
        levelnum = 1;
        currentplace = 0;
        window.onkeypress = () => {
            document.body.style = 'background: #011F3F;';
            randsequence=[]
            status='won'
            RandomSequence()
        }
    }
    else {
        currentplace = currentplace +1
        if (currentplace === randsequence.length) {
            playsequence=[]
            currentplace = 0;
            levelnum = levelnum +1;
            RandomSequence();
        }
        console.log("Player Sequence: ", playsequence);
        console.log("Rand sequence: ", randsequence);
        console.log("Player sequence length: ", playsequence.length);
        console.log("Rand sequence length: ", randsequence.length);
        console.log("Current place: ", currentplace);
    }
}