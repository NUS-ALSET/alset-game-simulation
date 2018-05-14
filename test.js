const random = function(){
    return new Promise(resolve=>resolve(Math.random()));
    //console.log(Math.random());
}

const simulate = require("./index.js");
let botFiles = ["bot1.js", "bot2.js"];

let game1 = "gemCollector";
console.log("Testing",game1)
for (let botFile1 of botFiles){
    for (let botFile2 of botFiles){
        result = simulate(game1, "config.json", botFile1, botFile2).then(
            res=>console.log(game1,"player1",botFile1,"player2",botFile2,res)
            // Do something with result
        );
    
    }
}

let game2 = "squad";
console.log("Testing",game2)
for (let botFile1 of botFiles){
    for (let botFile2 of botFiles){
        result = simulate(game2, "config.json", botFile1, botFile2).then(
            res=>console.log(game2," player1",botFile1,"player2",botFile2,res)
            // Do something with result
        );
    
    }
}

let game3 = "squadGemCollector";
console.log("Testing",game3)
for (let botFile1 of botFiles){
    for (let botFile2 of botFiles){
        result = simulate(game3, "config.json", botFile1, botFile2).then(
            res=>console.log(game3," player1",botFile1,"player2",botFile2,res)
            // Do something with result
        );
    
    }
}

let game4 = "singlePlayerTwoWindows";
console.log("Testing",game4)
for (let botFile1 of botFiles){
    for (let botFile2 of botFiles){
        result = simulate(game4, "config.json", botFile1, botFile2).then(
            res=>console.log(game4," player1",botFile1,"player2",botFile2,res)
            // Do something with result
        );
    
    }
}


