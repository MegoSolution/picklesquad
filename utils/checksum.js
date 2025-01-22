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
  // Concatenate the string in the required format
  const str = `${recurringId}${orderId}`;

  // Generate HMAC-SHA256 hash
  const sha256Hash = CryptoJS.HmacSHA256(str, secretKey).toString(
    CryptoJS.enc.Hex
  );

  return sha256Hash;
}

export { calculateChecksum, calculateChecksumRecurring };
