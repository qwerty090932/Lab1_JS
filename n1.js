let num = +prompt("Введите число:");
let count = 0;
let max = null;
while (!isNaN(num)) {
    num = +num;
    let num = +prompt("Введите число:");
    if (!isNaN(num)){
        break;
    }
    if (num > max && count % 2 == 0){
        max = num;
    }
    count++;
}
max !== null ? alert(max) : alert("Вы не ввели чисел!");
alert(max);