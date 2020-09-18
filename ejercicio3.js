//ratio
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let positivos = 0;
    let negativos =0;
    let ceros = 0;
    for(let i=0; i<arr.length; i++){
        if(Math.sign(arr[i])==1){
            positivos++;
        }
        if(Math.sign(arr[i])==-1){
            negativos++;
        }
        if(arr[i]==0){
            ceros++;
        }
    }
    return console.log(positivos/arr.length +'\n'+ negativos/arr.length+'\n'+ceros/arr.length);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}