const monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const GetMonth = (date) => {
  const monthIndex = date.getMonth();
  return monthsArray[monthIndex];
};

export default GetMonth;
