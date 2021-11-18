import base64url from 'base64url';

function string2arraybuffer(str: string): ArrayBuffer {
  const buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  const bufView = new Uint16Array(buf);
  for (let i = 0; i < str.length; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  
  return buf;
}

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

function base64url2arraybuffer(b64u: string): ArrayBuffer {
  const buf = base64url.toBuffer(b64u);
  return buffer2arraybuffer(buf);
}

function arraybuffer2base64url(ab: ArrayBuffer): string {
  return base64url.encode(Buffer.from(ab), 'utf8');
}

function arraybuffer2base64(ab: ArrayBuffer): string {
  return Buffer.from(ab).toString('base64');
}

function base642arraybuffer(base64: string): ArrayBuffer {
  const buf = base64url.toBuffer(base64);
  return buffer2arraybuffer(buf);
}

function buffer2arraybuffer(buffer: Buffer): ArrayBuffer {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

function arraybuffer2buffer(ab: ArrayBuffer): Buffer {
  return Buffer.from(ab);
}

const str2ab = {
  string2arraybuffer,
  arraybuffer2string,
  base64url2arraybuffer,
  arraybuffer2base64url,
  arraybuffer2base64,
  base642arraybuffer,
  buffer2arraybuffer,
  arraybuffer2buffer,
};

export default str2ab;
