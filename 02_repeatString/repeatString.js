const repeatString = function(word, dig){
  if(dig < 0) return 'ERROR';
  let string = "";
  for(let i = 0; i < dig; i++){
    string += word;
  }
  return string;
}

// Do not edit below this line
module.exports = repeatString;
