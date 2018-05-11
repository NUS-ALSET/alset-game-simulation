let gameFunc;
let config;
let bot1;
let bot2;
function getParameterByName(name) {
	var result = false;
	process.argv.forEach((arg)=>{
		var argArr=arg.split("=");
		if(argArr[0]===name){
			result = argArr[1];
		}
	});
	return result;
}
if(getParameterByName("game")){
	var gameName = getParameterByName("game");
	switch(gameName){
		case 'gemCollector':
			gameFunc = require('./games/gemCollector/');
			break;
		case 'squadGemCollector':
			gameFunc = require('./games/squadGemCollector/');
			break;
		case 'singlePlayerTwoWindows':
			gameFunc = require('./games/singlePlayerTwoWindows/');
			break;
		case 'squad':
			gameFunc = require('./games/squad/');
			break;
		default:
			gameFunc = require('./games/gemCollector/');
			break;
	}
}
else{
	console.error("\x1b[31m","No game name! Please, specify game name (ex. game=gemCollector )", "\x1b[37m");
	return;
}
if(getParameterByName("config")){
	config =  require('./'+getParameterByName("config"));
}
else{
	console.error("\x1b[31m","No config! Please, specify config name (ex. config=config.json )", "\x1b[37m");
	return;
}
if(getParameterByName("player1")){
	bot1 =  require('./'+getParameterByName("player1"));
}
else{
	console.error("\x1b[31m","No player1 script! Please, specify player1 script (ex. player1=bot1.js )", "\x1b[37m");
	return;
}
if(getParameterByName("player2")){
	bot2 =  require('./'+getParameterByName("player2"));
}
else{
	console.error("\x1b[31m","No player2 script! Please, specify player2 script (ex. player2=bot2.js )", "\x1b[37m");
	return;
}
gameFunc(config, bot1, bot2).then(res=>console.log(res));