#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lingeringLine = "";

const shiftParam = (param) => {
    if(param === undefined){
        return('');
    }
    param.split('').map((item) => {
        if(item === '0'){
            return '9'
        }

        return item-1;
    })

    return param;
}

function myPrintf(formatString, param){
    let splitString = formatString.split('#');
    if(splitString.length !== 2){
        console.log(formatString);
        return;
    }

    const temp = splitString.pop();
    splitString = [...splitString, ...temp.split('g')];

    if(splitString.length !== 3){
        console.log(formatString);
        return;
    }

    let padString = splitString[1][0] === '0' ? '0' : ' ';
    console.log(splitString[0] + shiftParam(param).padStart(splitString[1], padString) + splitString[2]);
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