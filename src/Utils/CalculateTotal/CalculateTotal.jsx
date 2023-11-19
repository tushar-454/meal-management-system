const calculateTotalMeal = (arrData = []) => {
  let total = 0;
  arrData.map((item) => (total += item.perDayTotal));
  return total;
};

export default calculateTotalMeal;
