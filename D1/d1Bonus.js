/*Ingredients for 4 persons:
         spaghetti 400g,
         guanciale 250g,
         very fresh egg yolks 6,
         aged grated Pecorino Romano cheese 50g,
         raw black pepper 4g
*/
let spagetti = 400;
let guanciale = 250;
let eggYolk = 18;
let cheese = 50;
let bPepper = 4;

let oneCmLayerGuanciale = guanciale;
console.log("First cut the guanciale into 1cm layers,");
console.log(oneCmLayerGuanciale+"g");

let longStripGuanciale = oneCmLayerGuanciale;
console.log("then into long strips");
console.log(longStripGuanciale+"g");

let yolksAndCheese = (eggYolk*6) + cheese;
console.log("Combine the egg yolks with the finely grated Pecorino Romano.");
console.log(yolksAndCheese+"g");

let roastPepper = bPepper - 1;
let cheesePepperYolks = yolksAndCheese + (((bPepper-4)+2)/2);
console.log("Roast the black pepper on a pan until it smokes and sizzles,\n and combine a small amount of it to the yolks and cheese mixture, set aside the rest.");
console.log(cheesePepperYolks+"g");

let brownStripsGuanciale = longStripGuanciale;
let crispGuanciale = brownStripsGuanciale;
console.log("Brown the strips of guanciale for 3 minutes at medium heat, \nthen 1 minune on high heat til crisp, then turn off the heat, take out \nthe guanciale, leaving only the grease on the pan cool down.");
console.log(crispGuanciale+"g");

let cookedPasta = spagetti * 2.25;
console.log("Cook the pasta with a pinch of salt in the water \n(guanciale is already very salty);");
console.log(cookedPasta+"g");

let ladlefulPastaWater = 17;
let drainedPasta = cookedPasta;
console.log("set aside a ladleful of the pasta water before draining it, \nthen drain the pasta once it is cooked al dente.")
console.log(drainedPasta+"g");
console.log(ladlefulPastaWater+"g");

let pastaStarch = crispGuanciale + ladlefulPastaWater*0.2;
console.log("Pour 2 spoons of the reserved hot water into the part of \nthe frying pan containing the cooled guanciale and turn on the heat");
console.log("this will create a creamy sauce with the pasta starch contained in that water.");
console.log(pastaStarch+"g");

let starchAndPasta = drainedPasta +pastaStarch;
console.log("TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together.");
console.log(starchAndPasta+"g");

let creamyPasta = cheesePepperYolks + starchAndPasta;
console.log("Add the yolk and cheese mixture, stirring rapidly. \nIn the warm pan with the hot pasta, the eggs will cook gently and become creamy.");
console.log(creamyPasta+"g");

console.log("It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs.");

let carbonara= creamyPasta + roastPepper;
console.log("Add the remaining roasted black pepper and serve immediately.");
console.log(carbonara+"g");
console.log("Dig in!");