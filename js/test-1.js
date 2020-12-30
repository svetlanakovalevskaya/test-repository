// let balance = 10000;
// const payment = 20000;
// alert(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету.`);
// alert(payment <= balance ? `На счету осталось ${balance - payment} кредитов` : `На счету недостаточно средств для проведения операции!`);
// alert("Операция завершена!");

// function filterArray(numbers, value) {
//     // Пиши код ниже этой строки
//     numbers = [1, 2, 3, 4, 5];
//     value = 3;
//   const newNumbers = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] <= value) {
//         continue;
//       } else {
      
//       newNumbers.push(numbers[i]);
//       }
//     }
//   console.log(newNumbers);
//     return newNumbers;
//     // Пиши код выше этой строки
//   }

//   filterArray();

// function getCommonElements(array1, array2) {
//     // Пиши код ниже этой строки

//     array1 = [24, 12, 27, 3];
//     array2 = [12, 8, 3, 36, 27];
//   const generalElemArr = [];
   
//   let maxArrLength;
//   if (array1.length < array2.length) {
//     maxArrLength = array2.length;
//   } else {
//     maxArrLength = array1.length;
//   }
//   array1.length = maxArrLength;
//   array2.length = maxArrLength;

          
//     for (let i = 0; i < maxArrLength; i += 1) {
//       if (array2.includes(array1[i]) === false) {
//         continue;
//       }
      
//       generalElemArr.push(array1[i]);
//     }
//     console.log(generalElemArr);
//     return generalElemArr;
//     // Пиши код выше этой строки
//   }

//   getCommonElements();

// function getEvenNumbers(start, end) {
//     start = 2;
//     end = 5;
//     // Пиши код ниже этой строки
// const evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
// if (i % 2 !== 0) {
// continue;
//   } 
//     evenNumbers.push(i);
// }
//   return evenNumbers;
//     // Пиши код выше этой строки
//   }

//   getEvenNumbers();

function includes(array, value) {

    array = [1, 2, 3, 4, 5];
    value = 3;
    // Пиши код ниже этой строки
    let isTrue;
    const isTrueArray = [];
      for (let i = 0; i < array.length; i += 1) {
          if (array[i] !== value) {
            isTrue = false;
            isTrueArray.push(isTrue);
          } else {
            isTrue = true;
            isTrueArray.push(isTrue);
          }
      }
    console.log(isTrueArray);

    if (isTrueArray === true) {
 //       return true;
        console.log(true);
    } else {
//       return false;
        console.log(false);
    }
}
  includes();