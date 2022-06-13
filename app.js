"use strict";

let userInputs = [];
let questionArray = ["a adjective", "a profession", "a boy's name", "an animal (plural)", "an object", "an animal"];
let defaultAnswers = ["naughty", "shephard", "John", "sheep", "tree", "wolf"];
let numberOfQuestions = 6;
let questionCounter = 0;

for(let i = numberOfQuestions; i > 0; i--){
    numberOfQuestions--;
    const questionPrompt = prompt(`Enter ${questionArray[questionCounter]}

(You have ${numberOfQuestions} questions left)`); 
    
    questionPrompt.length > 1 ? userInputs.push(questionPrompt) : userInputs.push(defaultAnswers[questionCounter]);
    questionCounter++;
}

let newStory = `Once upon a time, there was a very ${userInputs[0]} ${userInputs[1]} called ${userInputs[2]}. He would take his ${userInputs[3]} for grazing, then climb up a ${userInputs[4]}, and shout for help, claiming that a ${userInputs[5]} was attacking his ${userInputs[3]}.

Every time this happened, the farmers and other men would come to rescue ${userInputs[2]} and his flock. But once they saw he was lying, they would leave angrily. Then, the boy would laugh. This went on for a long time, but one day, a ${userInputs[5]} really came and attacked his ${userInputs[3]}. But this time nobody heard him or offered to help him because they did not believe him anymore.`;

document.write(newStory);











/* Once upon a time, there was a very naughty shepherd called John. He would take his sheep for grazing, then climb up a tree, and shout for help, claiming that a wolf was attacking his sheep.

Every time this happened, the farmers and other men would come to rescue him and his flock. But once they saw he was lying, they would leave angrily. Then, the boy would laugh. This went on for a long time, but one day, a wolf really came and attacked his sheep. But this time nobody heard him or offered to help him because they did not believe him anymore. */