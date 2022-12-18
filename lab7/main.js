#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lingeringLine = "";

const changeNumber = (param) => {
    let newParam = param;


    return newParam.toString();
}

function myPrintf(formatString, param){
    let splitString = formatString.split('#j');
    if(splitString.length !== 2){
        console.log(formatString);
        return;
    }

    console.log(splitString[0] + changeNumber(param) + splitString[2]);
}

process.stdin.on('data', function(chunk) {
	lines = chunk.split("\n");

	lines[0] = lingeringLine + lines[0];
	lingeringLine = lines.pop();
	for(var i=0;i<lines.length;i++){
		myPrintf(lines[i],lines[i+1])
		i++;
	}
});