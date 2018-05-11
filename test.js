const random = function(){
    return new Promise(resolve=>resolve(Math.random()));
    //console.log(Math.random());
}



const simulate = require("./index.js");
let botFiles = ["bot1.js", "bot2.js"];
for (let botFile1 of botFiles){
    for (let botFile2 of botFiles){
        result = simulate("gemCollector", "config.json", botFile1, botFile2).then(
            res=>console.log(res)
        );
    // Do something with result
    }
}


    /*for(var i=0;i<1;i++){
        
        simulate("gemCollector","config.json","bot2.js","bot1.js");
        simulate("gemCollector","config.json","bot1.js","bot1.js");
        simulate("gemCollector","config.json","bot1.js","bot2.js");
        simulate("gemCollector","config.json","bot2.js","bot2.js");
    }*/

