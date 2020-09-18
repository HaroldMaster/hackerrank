//conversor de tiempo AM-PM a 24horas (militar)
function timeConversion(s) {
    /*
     * Write your code here.
     */
   // console.log(typeof s);
    let aux= s.slice(-2);
    if(aux=="AM"){
        console.log("entro en am");
        let doce= s.slice(0,2);
        if(doce=="12"){
            return s.replace("12","00").slice(0,-2);
        }
        else{
            return s.slice(0,-2);
        }
    }
    if(aux=="PM"){
        console.log("entro en pm");
        let dos = s.slice(0,2);
        if(dos=="12"){
            console.log("entro en pm 12");
            return s.slice(0,-2);
        }
        else{
            console.log("entro en pm dif 12");
            let num = parseInt(dos);
            let militar = num+12+"";
            console.log(militar);
            return s.replace(dos,militar).slice(0,-2);
        }
    }
}
