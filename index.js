// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = (drivers) => {
  const firstTwoElements = drivers.slice(0, 2);
  return firstTwoElements;
};

returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = (drivers) => {
  const lastTwoElements = drivers.slice(2);
  return lastTwoElements;
};

returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) => (fare) => {
  return fare * integer;
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, selectFunction) => {
    return selectFunction(drivers);
}
