// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(queryString) {
  const searchParams = new URLSearchParams(queryString);
  let searchObject = {};
  for (const entry of searchParams) {
    const [key, value] = entry;
    searchObject[key] = value;
  }
  return searchObject;
}

function isLeapYear(year) {
  if (year < 0) return "Year must be greater than 0";
  if (typeof year !== "number") return "Year must be an number";
  const isDivisibleBy4 = year % 4 == false;
  const isDivisibleBy100 = year % 100 == false;
  const isDivisibleBy400 = year % 400 == false;
  return (isDivisibleBy4 && !isDivisibleBy100) || isDivisibleBy400;
}
