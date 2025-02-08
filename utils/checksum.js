import crypto from 'crypto';
import CryptoJS from 'crypto-js';

function calculateChecksum({ secretKey, detail, amount, orderId }) {
  // Concatenate the string in the required format
  const str = `${secretKey}${detail}${amount}${orderId}`;

  // Generate HMAC-SHA256 hash
  const sha256Hash = CryptoJS.HmacSHA256(str, secretKey).toString(
    CryptoJS.enc.Hex
  );

  return sha256Hash;
}

function calculateChecksumRecurring({ secretKey, recurringId, orderId }) {
  console.log('DEBUG', secretKey, recurringId, orderId);
  // Concatenate the string in the required format
  // const str = `${secretKey}${recurringId}${orderId}`;

  // // Generate HMAC-SHA256 hash
  // const sha256Hash = CryptoJS.HmacSHA256(str, secretKey).toString(
  //   CryptoJS.enc.Hex
  // );

  // return sha256Hash;

  const hash = crypto
    .createHash('sha256')
    .update(secretKey + recurringId + orderId)
    .digest('hex');

  console.log('DEBUG', hash);

  return hash;
}

export { calculateChecksum, calculateChecksumRecurring };
