const generateDates = () => {
  const datesArray = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i);
    const day = futureDate.toLocaleDateString('en-US', { weekday: 'short' });
    const date = futureDate.getDate();
    datesArray.push({
      display: `${day} ${date}`,
      value: futureDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
    });
  }
  return datesArray;
};

const genOrderId = ({ bookingId }) => {
  const timeInUnix = Math.floor(Date.now() / 1000); // Get current time in Unix format (seconds)
  return `PS-${bookingId}-${timeInUnix}`;
};

export { generateDates, genOrderId };
