export function formatingNumber(num) {
  const numWithTwoDecimalPlaces = num.toFixed(2);
  const resultNumber = numWithTwoDecimalPlaces
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return resultNumber;
}

export const formatingTimestamp = timestamp => {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    date.getMonth()
  );
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};
