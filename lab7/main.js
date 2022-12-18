#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lingeringLine = "";

const changeNumber = (param) => {
    let newParam = "";
    param.split('').map((item) => {
        if(item === 0) {
            newParam += "9";
        } 
        else if (item) {
            const newNumber = (((item * 9) + 1) %10);
            newParam += newNumber.toString();
        }
    })

    return newParam.toString();
}

function myPrintf(formatString, param){
    let splitString = formatString.split('#.');
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
    console.log(splitString[0] + changeNumber(param).padStart(splitString[1], padString) + splitString[2]);
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