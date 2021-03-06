// setup brain.js
const brain = require("brain.js")

// we will be using a neural network
var net = new brain.NeuralNetwork();

// let's train our network to predict if white or black text should be used for a given background-color
net.train([
    {input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
    {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
    {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}
]);


// some data for testing
var input = { r: 1, g: 0.4, b: 0 };
console.log(input);

// let's test it
var output = net.run(input);
console.log(output);
