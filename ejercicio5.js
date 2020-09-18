//gemstones
'use strict';

const fs = require('fs');

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

// Complete the gemstones function below.
function gemstones(arr) {
    let limpio = [];
    let contador = 0;
    let aux=0;
    let a='abcdefghijklmnopqrstuvwxyz';
    let al = a.split("");
    
    arr.forEach(e=>{
        limpio.push([...new Set(e)]);
    
    });
    al.forEach(e=>{
        if(arr.every(el=>el.includes(e))){
            contador++
        }
    });
    console.log(limpio)
    /*al.forEach(e=>{
        limpio.forEach((element)=>{
            
            if(element.find((f)=>f==e)){

                if(aux==3){
                    contador++;

                }
            }
        });
    });
    /*al.forEach(e=>{
        limpio.forEach(element=>{
            if(element.find(f=>f==e)){
                aux++;
                if(aux==3){
                    contador++;
                    aux=0;
                }
            })
    
    });*/
    
    return contador;
    /*limpio.forEach((e,i)=>{
        e.forEach(e2=>{
            i++;
            if(e.find(f=>f==e2)){
                contador++;
            }
        });
    });*/
    

    /*/let limpio = [...new Set(arr)]
    let a='abcdefghijklmnopqrstuvwxyz';
    let al = a.split("");
    console.log(limpio);
    al.forEach(e=>{
        
    });

   /* for(let i=0; i<arr.length; i++){
        let arr
    }
    let arr1 = arr.slice(0,1).toString().split("");
    let arr2 = arr.slice(1,2).toString().split("");
    let arr3 = arr.slice(2).toString().split("");
    arr1 = [...new Set(arr1)];
    arr2 = [...new Set(arr2)];
    arr3 = [...new Set(arr3)];
    let cont = 0
    arr1.forEach((e,i)=>{
        if(arr2.find(f=> f==e) && arr3.find(f2=> f2==e)){
            cont++;
            i++;
        }
        
    });
    console.log(arr1);
    return cont;*/
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    let result = gemstones(arr);

    ws.write(result + "\n");

    ws.end();
}
