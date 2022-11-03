import App from "./App";

let randsequence = [];
let playsequence = [];

export default function Game(colour, colourName) {
    RandomSequence();
    AppendPlay(colour)
    console.log("Player Sequence: ", playsequence);
}

export function AppendPlay(colour) {
    switch (colour) {
        case 1:
            playsequence.push(1);
            break;
        case 2:
            playsequence.push(2);
            break;
        case 3:
            playsequence.push(3);
            break;
        case 4:
            playsequence.push(4);
            break;
        default:
            console.log('err');
    };
}

export function RandomSequence(colourName) {
    let aaa = Math.floor(Math.random() * 4) +1;
    randsequence.push(aaa);
    console.log("Random Sequence: ", randsequence);
    var element = document.getElementById(colourName);
    element.style.backgroundColor = "#9e9e9e";
}