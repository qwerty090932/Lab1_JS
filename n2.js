let pos = 0;
    let oldPos = 0;
    let newStr = '';
    let max = '';
    let min = '';
   //добавляем пробел, чтобы пробел был признаком конца всех слов, в том числе и последнего
    let str = prompt("Введите строку: ");
    while (str.indexOf(' ', pos) != -1)
    {
      oldPos = pos;
      pos = str.indexOf(' ',pos) + 1;
      newStr = str.substring(pos, oldPos);
      if (isNaN(newStr)) {
        max = newStr;
        min = newStr;
        document.write(`Первое слово - ${max}<br><hr>`);
        break;
      }
    }
    while (str.indexOf(' ', pos) != -1) {
        oldPos = pos; //начало очередного слова
        pos = str.indexOf(' ', pos) + 1; //конец очередного слова
        newStr = str.substring(pos, oldPos);
        if (isNaN(newStr)) {
          if (newStr.length > max.length) {
            max = newStr;
          }
          if (newStr.length < min.length){
            min = newStr;
          }
          document.write(`${newStr} - ${newStr.length-1}<hr><br>`);
      }
  } 
  document.write(`Самый длинное слово - ${max}<hr><hr><br>`);
  document.write(`Самое короткое слово - ${min}<hr><hr><br>`);