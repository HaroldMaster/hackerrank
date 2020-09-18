let a = function palindromeIndex(s) {
    let reversa = s.split('').reverse().join('');
    if(s==reversa){
        return -1
    }
    let aux= [];
    let aux2=[];
   // s =  s.split('');
    for(let i=0, j=s.length-1; i<s.length/2, j>=s.length/2;i++,j--){
    
            console.log(i+""+j)
            
            if(s.charAt(i)!=s.charAt(j)){
               
                if(s.charAt(i+1)==s.charAt(j)){
                    console.log("El caracter en conflicto inicial es "+s.charAt(i))
                    //s.split("").splice(i,1).join("")
                    //i++;
                    //console.log("el nuevo array es: "+s)
                    aux.push(i);
                    i++;
              
                }
                if(s.charAt(j-1)==s.charAt(i)){
                    console.log("El caracter en conflicto final es "+s.charAt(j))
                    //s.split("").splice(i,1).join("")
                    
                    //console.log("el nuevo array es: "+s)
                    aux.push(j);
                    j--;
                
                }

                
            }
            console.log("la lista de conflictos es: "+aux)
        
        
    }
    if(aux.length==1){
        return aux;
    }
    if(aux.length>1){
        for(let i=0, j=s.length-1; i<s.length/2, j>=s.length/2;i++,j--){
    
            console.log(i+""+j)
            
            if(s.charAt(i)!=s.charAt(j)){
                if(s.charAt(j-1)==s.charAt(i)){
                    console.log("El caracter en conflicto final es "+s.charAt(j))
                    //s.split("").splice(i,1).join("")
                    
                    //console.log("el nuevo array es: "+s)
                    aux2.push(j);
                    j--;
                
                }
                if(s.charAt(i+1)==s.charAt(j)){
                    console.log("El caracter en conflicto inicial es "+s.charAt(i))
                    //s.split("").splice(i,1).join("")
                    //i++;
                    //console.log("el nuevo array es: "+s)
                    aux2.push(i);
                    i++;
              
                }
                if(aux2.length==1){
                    return aux2;
                }
               

                
            }
            console.log("la lista de conflictos es: "+aux)
        
        
    }
    }
}
//palindromeIndex('bcbc');
console.log("el return es "+a('aaab'));