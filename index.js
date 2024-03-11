// Code your solution here
const drivers =[
    "Alan",
   "kurdistan",
   "birhat","amad","Kovan"
];

function findMatching(drivers, name) {
   return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
      
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  