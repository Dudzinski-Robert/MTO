#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lingeringLine = "";


function myPrintf(formatString, param){

    // for(var i=0;i<formatString.length;i++){
	// 	if((formatString.charAt(i) == '#') && (formatString.charAt(i+1) == 'g')){

    //     }
	// }

    let splitString = formatString.split('#');
    if(splitString.length === 1){
        console.log(formatString);
        return;
    }

    const temp = splitString.pop();
    splitString = [...splitString, ...temp.split('g')];

    if(splitString.length === 2){
        console.log(formatString);
        return;
    }
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