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

const resolveBookingIdFromMandateRef = (mandateReference) => {
  const mandateReferenceSplit = mandateReference.split('-');
  return mandateReferenceSplit[1];
};

// 13:10 -> 1:10PM
const convertTo12HourFormat = (time24) => {
  const [hour, minute] = time24.split(':').map(Number);
  const period = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minute.toString().padStart(2, '0')}${period}`;
};

export {
  generateDates,
  genOrderId,
  resolveBookingIdFromMandateRef,
  convertTo12HourFormat,
};
