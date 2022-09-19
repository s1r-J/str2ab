import base64url from 'base64url';

/**
 * Convert string to ArrayBuffer.
 *
 * @param str String
 * @returns ArrayBuffer
 */
function string2arraybuffer(str: string): ArrayBuffer {
  const buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  const bufView = new Uint16Array(buf);
  for (let i = 0; i < str.length; i++) {
    bufView[i] = str.charCodeAt(i);
  }

  return buf;
}

/**
 * Convert string to Buffer.
 *
 * @param str String
 * @returns Buffer
 */
function string2buffer(str: string): Buffer {
  return Buffer.from(str);
}

/**
 * Encode string to Base64URL.
 *
 * @param str String
 * @returns Base64URL
 */
function string2base64url(str: string): string {
  return base64url.encode(str);
}

/**
 * Encode string to Base64.
 *
 * @param str String
 * @returns Base64
 */
function string2base64(str: string): string {
  return base64url.toBase64(base64url.encode(str));
}

/**
 * Convert ArrayBuffer to string.
 *
 * @param ab ArrayBuffer
 * @returns string
 */
function arraybuffer2string(ab: ArrayBuffer): string {
  let uarr;
  if (ab.byteLength % 2 === 0) {
    uarr = new Uint16Array(ab);
  } else {
    uarr = new Uint8Array(ab);
  }
  let str = '';
  for (let i = 0; i < uarr.length; i++) {
    str += String.fromCharCode(uarr[i]);
  }

  return str;
}

/**
 * Convert Buffer to string.
 *
 * @param buffer Buffer
 * @returns string
 */
function buffer2string(buffer: Buffer): string {
  return buffer.toString('utf8');
}

/**
 * Decode Base64URL to ArrayBuffer.
 *
 * @param b64u Base64URL
 * @returns ArrayBuffer
 */
function base64url2arraybuffer(b64u: string): ArrayBuffer {
  const buf = base64url.toBuffer(b64u);
  return buffer2arraybuffer(buf);
}

/**
 * Decode Base64URL to Buffer.
 *
 * @param b64u Base64URL
 * @returns Buffer
 */
function base64url2buffer(b64u: string): Buffer {
  return base64url.toBuffer(b64u);
}

/**
 * Decode Base64URL to string.
 *
 * @param b64u Base64URL
 * @returns string
 */
function base64url2string(b64u: string): string {
  return base64url.decode(b64u);
}

/**
 * Convert Base64URL to Base64.
 *
 * @param b64u Base64URL
 * @returns Base64
 */
function base64url2base64(b64u: string): string {
  return base64url.toBase64(b64u);
}

/**
 * Encode ArrayBuffer to Base64URL.
 *
 * @param ab ArrayBuffer
 * @returns Base64URL
 */
function arraybuffer2base64url(ab: ArrayBuffer): string {
  return base64url.encode(Buffer.from(ab), 'utf8');
}

/**
 * Encode Buffer to Base64URL.
 *
 * @param buffer Buffer
 * @returns Base64URL
 */
function buffer2base64url(buffer: Buffer): string {
  return base64url.encode(buffer, 'utf8');
}

/**
 * Encode ArrayBuffer to Base64.
 *
 * @param ab ArrayBuffer
 * @returns Base64
 */
function arraybuffer2base64(ab: ArrayBuffer): string {
  return Buffer.from(ab).toString('base64');
}

/**
 * Encode Buffer to Base64.
 *
 * @param buffer Buffer
 * @returns Base64
 */
function buffer2base64(buffer: Buffer): string {
  return buffer.toString('base64');
}

/**
 * Decode Base64 to ArrayBuffer.
 *
 * @param base64 Base64
 * @returns ArrayBuffer
 */
function base642arraybuffer(base64: string): ArrayBuffer {
  const buf = base64url.toBuffer(base64);
  return buffer2arraybuffer(buf);
}

/**
 * Decode Base64 to Buffer.
 *
 * @param base64 Base64
 * @returns Buffer
 */
function base642buffer(base64: string): Buffer {
  return base64url.toBuffer(base64);
}

/**
 * Decode Base64 to String.
 *
 * @param base64 Base64
 * @returns String
 */
function base642string(base64: string): string {
  return base64url.decode(base64url.fromBase64(base64));
}

/**
 * Convert Base64 to Base64URL
 *
 * @param base64 Base64
 * @returns Base64URL
 */
function base642base64url(base64: string): string {
  return base64url.fromBase64(base64);
}

/**
 * Convert Buffer to ArrayBuffer.
 *
 * @param buffer Buffer
 * @returns ArrayBuffer
 */
function buffer2arraybuffer(buffer: Buffer): ArrayBuffer {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

/**
 * Convert ArrayBuffer to Buffer.
 *
 * @param ab ArrayBuffer
 * @returns Buffer
 */
function arraybuffer2buffer(ab: ArrayBuffer): Buffer {
  return Buffer.from(ab);
}

/**
 * Check if input is a Base64URL encoded string.
 *
 * @param input The input to check
 * @returns Returns true if input is a Base64URL encoded string, else false.
 */
function isBase64url(input: string): boolean {
  return /^[A-Za-z0-9-_]+$/.test(input);
}

/**
 * Check if input is a Base6 encoded string.
 *
 * @param input The input to check
 * @returns Returns true if input is a Base64 encoded string, else false.
 */
function isBase64(input: string): boolean {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(input);
}

const str2ab = {
  string2arraybuffer,
  string2base64url,
  string2base64,
  string2buffer,
  arraybuffer2string,
  buffer2string,
  base64url2string,
  base64url2arraybuffer,
  base64url2base64,
  base64url2buffer,
  arraybuffer2base64url,
  buffer2base64url,
  arraybuffer2base64,
  buffer2base64,
  base642string,
  base642arraybuffer,
  base642base64url,
  base642buffer,
  buffer2arraybuffer,
  arraybuffer2buffer,
  isBase64url,
  isBase64,
};

export default str2ab;
