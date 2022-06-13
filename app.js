"use strict";

const originalStory = "Once upon a time, there was a very naughty shepherd called John. He would take his sheep for grazing, then climb up a tree, and shout for help, claiming that a wolf was attacking his sheep. '/n' Every time this happened, the farmers and other men would come to rescue him and his flock. But once they saw he was lying, they would leave angrily. Then, the boy would laugh. This went on for a long time, but one day, a wolf really came and attacked his sheep. But this time nobody heard him or offered to help him because they did not believe him anymore."
let userInputs = [];

let newStory = "Once upon a time, there was a very ${userInputs[1]} ${userInputs[2]} called ${userInputs[3]}. He would take his ${userInputs[4]} for grazing, then climb up a ${userInputs[5]}, and shout for help, claiming that a ${userInputs[6]} was attacking his ${userInputs[4]}. '/n' Every time this happened, the farmers and other men would come to rescue ${userInputs[3]} and his flock. But once they saw he was lying, they would leave angrily. Then, the boy would laugh. This went on for a long time, but one day, a ${userInputs[6]} really came and attacked his ${userInputs[4]}. But this time nobody heard him or offered to help him because they did not believe him anymore."

let numberOfQuestions = 6;

let questionArray = ["a profession", "an adjective", "a boy's name", "an animal (plural)", "an object", "an animal"];
let questionCounter = 0;

for(let i = numberOfQuestions; i > 0; i--){
    console.log('questionCounter:' + questionCounter);
    console.log('Enter ' + questionArray[questionCounter]);
    console.log('i: ' + i);
    
    numberOfQuestions--;
    console.log(`You have ${numberOfQuestions} questions left`);

    
    questionCounter++;
}











/* Once upon a time, there was a very naughty shepherd called John. He would take his sheep for grazing, then climb up a tree, and shout for help, claiming that a wolf was attacking his sheep.

Every time this happened, the farmers and other men would come to rescue him and his flock. But once they saw he was lying, they would leave angrily. Then, the boy would laugh. This went on for a long time, but one day, a wolf really came and attacked his sheep. But this time nobody heard him or offered to help him because they did not believe him anymore. */