

function findLongestWord(string) {
    // string = 'The quick brown fox jumped over the lazy dog';

    //1. Переделываем строку в массив
    let arr = string.split(' ');

    //2. Делаем новый массив с кол-вом букв в каждом слове предыдущего массива
    let countLetters = [];

    for (let i=0; i < arr.length; i += 1) {
        countLetters.splice(arr.length - 1, 0, arr[i].length);
    }
    // console.log(countLetters);

    //3. Узнаём наибольшее число нового массива
    let maxCountLetters = Math.max(...countLetters);
    // console.log(maxCountLetters);

    //4. Узнаём индекс наибольшего числа
    let maxCountLettersIndex = countLetters.indexOf(maxCountLetters);
    // console.log(maxCountLettersIndex);

    //5. Выводи слово с наибольшим кол-вом букв исходного массива
    // console.log(arr[maxCountLettersIndex]);
    return arr[maxCountLettersIndex];
  }
  
  findLongestWord();