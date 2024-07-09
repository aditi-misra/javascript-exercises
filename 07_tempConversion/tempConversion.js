const convertToCelsius = function(temp) {
  const tempInF = temp;

  let tempInC = (tempInF - 32)*(5/9);
  if(Number.isInteger(tempInC)){
    return tempInC;
  } else{
    let rounded = tempInC.toFixed(1);
    return parseFloat(rounded); 
  }
  
};

const convertToFahrenheit = function(temp) {
  const tempInC = temp;

  const tempInF = (tempInC*9/5)+32;
  if(Number.isInteger(tempInF)){
    return tempInF;
  } else{
    let rounded = tempInF.toFixed(1);
    return parseFloat(rounded); 
  }
    
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
