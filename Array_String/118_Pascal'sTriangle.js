function generate(numRows) {
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];

  //base
  const tr = [[1]];
  for (let i = 1; i < numRows; i++) {
    let preRow = tr[i - 1]; //[1]

    let curRow = [];

    //start buliding a level
    curRow.push(1);
    for (let j = 1; j < i; j++) {
      curRow[j] = preRow[j] + preRow[j - 1];
    }
    curRow.push(1);
    //finish buiding the level

    //push to the tr
    tr.push(curRow);
  }
  return tr;
}

console.log(generate(1));
