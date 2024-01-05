let chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
const helperAdd = function (chocolates, color, count) {
  for (let i = 0; i < count; i++) {
    chocolates.unshift(color);
  }
};
function addChocolates(chocolates, color, count) {
  return count <= 0
    ? 'Number cannot be zero/negative'
    : helperAdd(chocolates, color, count);
}
//Progression 2: Remove z chocolates from the top the dispenser
const helperRemove = function (chocolates, count) {
  let removedChocolates = [];
  while (count > 0) {
    removedChocolates.push(chocolates.shift());
    count -= 1;
  }
  return removedChocolates;
};
function removeChocolates(chocolates, count) {
  const lengthOfChocolatesStore = chocolates.length;
  return count <= 0
    ? 'Number cannot be zero/negative'
    : lengthOfChocolatesStore < count
    ? 'Insufficient chocolates in the dispenser'
    : helperRemove(chocolates, count);
}
//Progression 3: Dispense z chocolates
const helperDispense = function (chocolates, number) {
  const dispensedChocolates = [];
  while (number > 0) {
    number -= 1;
    dispensedChocolates.push(chocolates.pop());
  }
  return dispensedChocolates;
};
function dispenseChocolates(chocolates, number) {
  const lengthOfChocolatesStore = chocolates.length;
  return number <= 0
    ? 'Number cannot be zero/negative'
    : lengthOfChocolatesStore < number
    ? 'Insufficient chocolates in the dispenser'
    : helperDispense(chocolates, number);
}
//Progression 4: Dispense z chocolates of x color
const dispenseChocolatesOfColor = (chocolates, number, color) => {
  return dispenseChocolates(chocolates.filter(c => c === color), number);
};
//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
const noOfChocolates = (chocolates) => {
  return Array.from(new Set(chocolates)).map(color => chocolates.filter(c => c === color).length);
};
//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
  const chocolateCountMap = new Map();
  chocolates.forEach(chocolate => {
    chocolateCountMap.set(chocolate, (chocolateCountMap.get(chocolate) || 0) + 1);
  });
  const sortedChocolates = chocolates.sort((a, b) => {
    const countA = chocolateCountMap.get(a);
    const countB = chocolateCountMap.get(b);
    if (countA === countB) {
      return a.localeCompare(b);
    }
    return countB - countA;
  });
  return sortedChocolates;
}
//Progression 7: Change z chocolates of x color to y color
const changeChocolateColor = (chocolates, number, color, finalColor) => {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  } else if (color === finalColor) {
    return "Can't replace the same chocolates";
  } else {
    return chocolates.map(c => (c === color && number-- > 0) ? finalColor : c);
  }
};
//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
const changeChocolateColorAllOfxCount = (chocolates, color, finalColor) => {
  const changedColor = chocolates.map(c => (c === color) ? finalColor : c);
  const counter = changedColor.filter(c => c === finalColor).length;

  return (color === finalColor) ? "Can't replace the same chocolates" : [counter, changedColor];
};
//Challenge 1: Remove one chocolate of x color from the top
function removeChocolateOfColor(chocolates, givenColor) {
  for (let index = 0; index < chocolates.length; index++) {
    if (chocolates[index] == givenColor) {
      position = index;
      break;
    }
  }
  chocolates.splice(position, 1);
  return chocolates;
}
//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(chocolates) {
  const store = {}; 
  chocolates.forEach((chocolate) => {
    if (chocolate in store) {
      store[chocolate] += 1;
    } else {
      store[chocolate] = 1;
    }
  });
  countOfEachChocolate = Object.values(store);
  totalNumberOfRainbowChocolates = 0;
  countOfEachChocolate.forEach((count) => {
    if (count % 3 == 0) {
      totalNumberOfRainbowChocolates += count / 3;
    }
  });
  return totalNumberOfRainbowChocolates;
}
