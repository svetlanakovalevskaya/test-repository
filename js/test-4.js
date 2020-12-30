function includes(array, value) {
    // Пиши код ниже этой строки
  let result;
    
for (const item of array) {
    if (item === value) {
        result = true;
        break;
    } else {
        result = false;
        continue;
    }
  }

    return result;
    // Пиши код выше этой строки
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));

// const arr = ['pop', 'rock', 'classical', 'metal', 'rap', 'k-pop', 'punk', 'jazz', 'blues'];
// console.table(arr);

// const arrString = arr.join(' ');
// console.log(arrString);

// const newArr = arrString.split(' ');
// console.table(newArr);

// console.log(newArr.indexOf('rap'));
// console.log(newArr.includes('classical'));

// newArr.push('r&b');
// console.log(newArr);

// newArr.pop();
// console.log(newArr);

// newArr.pop();
// console.log(newArr);

// newArr.shift();
// console.log(newArr);

// newArr.unshift('r&b');
// console.log(newArr);

// const newNewArr = newArr.slice();
// console.log(newNewArr);

// const newNewNewArr = newNewArr.splice(3, 2);
// console.log(newNewNewArr);
// console.log(newNewArr);

// newNewNewArr.splice(0, 1);
// console.log(newNewNewArr);

// newNewNewArr.splice(0, 0, 58, 55);
// console.log(newNewNewArr);

// newNewNewArr.splice(2, 1, 5, 88);
// console.log(newNewNewArr);

// const powerArr = newNewNewArr.concat(newNewArr);
// console.log(powerArr);
