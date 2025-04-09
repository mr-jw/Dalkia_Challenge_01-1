function getCurrentDate() {
        return new Date();
}

function getSpecificDate(date) {
    if (validateDateArgument(date)) {
        return new Date(date);
    }
}

function validateDateArgument(date)
{
    // validate data type.
    if (typeof date !== "string") {
        console.error("Argument must be string.");
        return false;
    }

    // validate string format.
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
        console.error("Date must be in YYYY-MM-DD format.");
        return false;
    }

  return true;
}

function calculateRemainingDays(currentDate, targetDate) {
    return Math.round((targetDate - currentDate) / (1000 * 60 * 60 * 24));
}

function alterPageElement(result, elementId) {
    var variable = document.getElementById(elementId);
    variable.innerText = result;
}

function f3(date, elementId) {
    // dates.
    var p = getCurrentDate();
    var q = getSpecificDate(date); 
  
    // result of calculation.
    var result = calculateRemainingDays(p, q);

    // alter specified page element.
    alterPageElement(result, elementId);
  }

  f3("2025-12-25", "my-element");
  f3("2026-01-01", "my-element2");
  