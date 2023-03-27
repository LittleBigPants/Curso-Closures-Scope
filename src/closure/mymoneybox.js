// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
      saveCoins += coins;
      console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
  }
  
  const myMoneyBox = moneyBox();
  myMoneyBox(5);
  myMoneyBox(5);
  myMoneyBox(15);
  
  const moneyBoxAna = moneyBox();
  moneyBoxAna(10);
  moneyBoxAna(20);
  moneyBoxAna(5);

  // ejercicio con array

   function createPetList() {
    let array = []
    return function addPet(pet) {
      if (pet) {
        array.push(pet);
        return;
      }
      return array
    }
   
  }
  
  const myPetList = createPetList();

  myPetList("michi");
  
  myPetList("firulais");
  
  myPetList();