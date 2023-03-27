const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() { // function interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();



//ejercicio
function sumWithClosure(firstNum) {

  return function (secondNum) {

    if (!secondNum) {
      return firstNum;
    } else if (!firstNum) {
      return secondNum;
    } else {
      return firstNum + secondNum;
  }
    
      
  }
    
  
}



sumWithClosure(1)(2);
sumWithClosure(0)(2);
sumWithClosure(1)(0);