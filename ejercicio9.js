/*function fizzBuzz(n) {
    // Write your code here
    let numbers= [];
    for(let i =1; i<=n;i++){
        numbers.push(i);
    }
    console.log(numbers)
    numbers.forEach(e=>{
    let three = e%3;
    let five =e%5
    if (three==0 && five==0){
        console.log("FizzBuzz") ;
        continue;
    }
    else {
        if (three==0){
            console.log("Fizz");
            continue;
        }
        if (five == 0){
            console.log("Buzz");
            continue;
        }
        else{
            console.log(e);
        }
    }
    
    });  
}
fizzBuzz(11);
*/
function funWithAnagrams(text) {
    let aux=[];
    let aux2=[];
    let arr=[];
    let aux4=[];
    let aux5=[];
     /*   for(let i=97; i<=122;i++){
        aux.push(String.fromCharCode(i))
    }*/
    text.forEach(e=>{
        aux2.push(e.length);
    })
    aux4.push(aux2[0]);
    for(let i =0; i<aux2.length-2;i++){
        let x = aux2[i+1];
        let y = aux4[i];
        let z = x+y+1;
        aux4.push(z);

    }
    
    console.log(aux4)
    //console.log(aux2);
    text.forEach((e,i,ar)=>{
       // aux2.push(e.split('').join(','))
       let aux3= e.split('');
       aux3.forEach((el)=>{
           arr.push(el.charCodeAt());
           if(arr.length==aux4[i]){
               arr.push('-')
           }
       })
    
    });
    
  console.log(arr);
  let array=[];
  array=arr.join().split(',-,');
console.log(array)
  let array2=[];
  let array3=[];
  /*array2= array[0].split(',').map(e=>{
    return parseInt(e);
});*/
  array.forEach(e=>{
    array2= e.split(',').map(e=>{
        return parseInt(e);
        
  })
  array3.push(array2.sort((a,b)=>{
      return a-b;
  }))
});
 
  //let narr2=array2
let auxiliar = [];

  console.log(array3[1]);

  for(let i=0; i<array3.length;i++){
      let x = array3[i];
      let y = array3[i+1];
      
      if(JSON.stringify(x)==JSON.stringify(y)){
        console.log("entro")
        auxiliar.push(i+1);
        array3.splice(i+1,1);
        text.splice(i+1,1);
        i=i-1;
      }
  }
  console.log(auxiliar);
  console.log(array3);
  console.log(text.sort());
  let array4=[];

}
//funWithAnagrams(['code'])
funWithAnagrams(['code', 'doce', 'ecod', 'framer','frame'])