// Pair Programming W2D3 - Word Search
// Brianna Cerkiewicz && Karan Gaba && Courtney Amos

// using yesterday's pair coding for the vertical search
const transpose = function(matrix) {
  let finalArray = [];
  let holderArray = [];
  let count = 0;
  
  for (let i = 0; i < matrix[0].length; i++) {
    for (const elm of matrix) {
      holderArray.push(elm[count]);
    }
    finalArray.push(holderArray);
    count += 1;
    holderArray = [];
  }
  
  return finalArray;
};
  

const wordSearch = (letters, word) => {
  if (letters.length === 0) { // checking if letters is empty
    return "You didn't enter anything.";
  }

  const transposedLetters = transpose(letters); // flipping letters for vertical search
  const horizontalJoin = letters.map((element) => element.join("")); // joining letter for horizontal
  const verticalJoin = transposedLetters.map((element) => element.join("")); // joining letters for vertical

  for (let row of horizontalJoin) { // looping through horizontal case
    if (row.includes(word)) { // if word is found return true
      return true;
    }
  }

  for (let row of verticalJoin) { // looping through vertical case
    if (row.includes(word)) { // if word is found return true
      return true;
    }
  }

  return false; // if word not found return false
};
  
module.exports = wordSearch;