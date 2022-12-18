#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lingeringLine = "";

const changeNumber = (param) => {
    const number = parseInt(param);
    let hexNumber = number.toString(16)

    hexArray = hexNumber.split('');
    hexArray = hexArray.map((item) => {
        if(item >= 'a' && item <= 'f'){
            return incrementChar(item, 6)
        }
        return item;
    })

    return hexArray.join('');
}

const incrementChar = (c, value) => {
    return String.fromCharCode(c.charCodeAt(0) + value);
}

function myPrintf(formatString, param){
    let splitString = formatString.split('#j');
    if(splitString.length !== 2){
        console.log(formatString);
        return;
    }

    console.log(splitString[0] + changeNumber(param) + splitString[1]);
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