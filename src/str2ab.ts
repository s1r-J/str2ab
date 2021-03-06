import base64url from 'base64url';

function string2arraybuffer(str: string): ArrayBuffer {
  const buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  const bufView = new Uint16Array(buf);
  for (let i = 0; i < str.length; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  
  return buf;
}

function string2buffer(str: string): Buffer {
  return Buffer.from(str);
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

function buffer2string(buffer: Buffer): string {
  return buffer.toString('utf8');
}

function base64url2arraybuffer(b64u: string): ArrayBuffer {
  const buf = base64url.toBuffer(b64u);
  return buffer2arraybuffer(buf);
}

function base64url2buffer(b64u: string): Buffer {
  return base64url.toBuffer(b64u);
}

function arraybuffer2base64url(ab: ArrayBuffer): string {
  return base64url.encode(Buffer.from(ab), 'utf8');
}

function buffer2base64url(buffer: Buffer): string {
  return base64url.encode(buffer, 'utf8');
}

function arraybuffer2base64(ab: ArrayBuffer): string {
  return Buffer.from(ab).toString('base64');
}

function buffer2base64(buffer: Buffer): string {
  return buffer.toString('base64');
}

function base642arraybuffer(base64: string): ArrayBuffer {
  const buf = base64url.toBuffer(base64);
  return buffer2arraybuffer(buf);
}

function base642buffer(base64: string): Buffer {
  return base64url.toBuffer(base64);
}

function buffer2arraybuffer(buffer: Buffer): ArrayBuffer {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

function arraybuffer2buffer(ab: ArrayBuffer): Buffer {
  return Buffer.from(ab);
}

const str2ab = {
  string2arraybuffer,
  string2buffer,
  arraybuffer2string,
  buffer2string,
  base64url2arraybuffer,
  base64url2buffer,
  arraybuffer2base64url,
  buffer2base64url,
  arraybuffer2base64,
  buffer2base64,
  base642arraybuffer,
  base642buffer,
  buffer2arraybuffer,
  arraybuffer2buffer,
};

export default str2ab;
