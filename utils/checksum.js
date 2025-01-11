import crypto from 'crypto';

const calculateChecksum = ({
  appId,
  currency,
  amount,
  orderId,
  requestKey,
}) => {
  const sourceString = `${appId}|${currency}|${amount}|${orderId}|${requestKey}`;
  const hash = crypto.createHash('sha256');
  hash.update(sourceString, 'utf-8');
  const hashHex = hash.digest('hex').toUpperCase(); // Return the hash in uppercase
  return hashHex;
};

export { calculateChecksum };
