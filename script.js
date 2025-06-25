var isDate = function (input) {
  // Check if input is a valid Date object
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // If input is not already a Date object, try to parse it
  const date = new Date(input);
  return !isNaN(date);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
