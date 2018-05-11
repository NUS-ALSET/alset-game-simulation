async function simulate(game, config, player1, player2){
    let gameFunc;
    let configFile;
    let bot1;
    let bot2;
    switch(game){
		case 'gemCollector':
			gameFunc = require('./games/gemCollector/');
			break;
		default:
			gameFunc = require('./games/gemCollector/');
            break;
    }
    configFile =  require('./'+config);
    bot1 =  require('./'+player1);
    bot2 =  require('./'+player2);
    return await gameFunc(configFile, bot1, bot2);
}
//simulate("gemCollector","config.json","bot1.js","bot2.js");
module.exports = simulate;