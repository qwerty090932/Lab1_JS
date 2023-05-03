let n = prompt("Введите значение n:");
  if (isNaN(parseFloat(n)) || !isFinite(n) || (+n % 1 != 0) || (+n <= 2) || (+n >= 15)) {
    alert("Некорректные данные!");
  }
  else {    
    html = '';
    for(let i=1; i<=n; i++) {
      html += `<hr width="${100/i}%">`;
    }
    html += '<table border = "1px solid black" align = "center">';
    let j = 1;
    let darkCell = 1;
    for (let i = 1; i <= n; i++) {
      html += '<tr>';
      while (j <= i) {
        html += '<td bgcolor = "lightgrey"></td>';
        j++;
      }
      darkCell++;
      j = 1;
      for (let whiteCell = darkCell; whiteCell <= n; whiteCell++) {
        html+="<td></td>";
      }
      whiteCell = 1;
      html += '</tr>';
    }
    html += '</table>';
    for (let i=n; i>=1; i--) {
      html += `<hr width="${100/i}%">`;
    }
    document.write(html);
  }
