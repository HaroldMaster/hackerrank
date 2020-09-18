'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the luckBalance function below.
function luckBalance(k, contests) {
    let importantes =[];
    let noimportantes=[];
    let aux= [];
    console.log(contests)
    contests.forEach((e1,index1)=>{
        e1.forEach((e2,index,arr)=>{
            if(index==1){
                if(e2==1){
                    importantes.push(arr[index-1]);
                    aux.push(arr[index-1]);
                }
            }
                if(index==1){
                    if(e2==0){
                    noimportantes.push(arr[index-1]);
                }
                }
                
                
            
        });
    });
    importantes.sort(function(a, b){return a-b});
    aux.sort(function(a, b){return a-b});
    console.log("primero:  importantes: "+importantes +" no importantes: "+noimportantes+" por restar: "+aux);
    
    let lose= importantes.length-k;
    aux.splice(lose,aux.length-1);
    //aux.splice(lose, aux.length-1);
    importantes.splice(0,lose);
    let sumai= 0;
    let sumani=0;
    let sumau=0;
    importantes.forEach(e=> sumai+=e);
    noimportantes.forEach(e=> sumani+=e);
    aux.forEach(e=>sumau+=e);
    let lucky = sumai+sumani-sumau;
console.log("importantes: "+importantes +" no importantes: "+noimportantes+" perdida: "+lose+ "por restar: "+aux);
return lucky;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    let contests = Array(n);

    for (let i = 0; i < n; i++) {
        contests[i] = readLine().split(' ').map(contestsTemp => parseInt(contestsTemp, 10));
    }

    const result = luckBalance(k, contests);

    ws.write(result + '\n');

    ws.end();
}
