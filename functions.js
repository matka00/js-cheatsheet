console.log(aFunction1()); //sima függvény esetén előtte és utána is működik

function aFunction1(){
    //ez a függvény belseje
    
    //a függvény mindenképpen return-öl, ha lefuttatjuk - ha nem adunk meg return-t, akkor undefined-ot ad
    
    //scope-ján belül bárhol meg tudjuk hívni
    
    return "this is a function"
}



const aFunction2 = function(){
    //ez is egy függvény, majdnem ugyanúgy viselkedik, mintha a függvénynek neve lenne
    // a függvény egy speciális objectum (first class citizen), változókba tudunk objekumokat tenni, ezért tudjuk a függvényt is belementeni
    
    return "this is another function"
}

console.log(aFunction2()); // minden változóba mentett dolog értékéhez csak a változó létrehozása UTÁN férünk hozzá - csak az utána következő sorokban






function aFunction3 (parameter1, parameter2, parameter3){
    //a paraméterek a függvény definition-jében vannak listázva, nincs specifikálva a típusuk
    //az argumentumok a függvény változói
    
}




function példa () {
    if(true){
      //ha teljesül
    }else{
      //ha nem teljesül
    }
    
  }



  console.log("0" == 0);

  console.log("0" === 0);


  const arr = [34, 15, 88, 2] //ez egy tömb - [] zárójelekről ismerjük fel

  for (let index = 0; index < arr.length; index++) {
      
        console.log(arr[index])
      
  }

  for (const item of arr) {
      console.log(item)
  }
  //ez a két fenti for ciklus lényegében ugyanazt csinálja