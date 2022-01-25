export function formatingNumber(num) {
  const numWithTwoDecimalPlaces = num.toFixed(2);
  const resultNumber = numWithTwoDecimalPlaces
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return resultNumber;
}
