import base64url from 'base64url';
import {
  test,
} from 'tap';
import str2ab from '../dist/str2ab'

test('string <--> ArrayBuffer', function (t) {
  const str = 'Being second is to be the first of the ones who lose.';
  const ab = str2ab.string2arraybuffer(str);
  t.type(ab, 'ArrayBuffer');
  const str2 = str2ab.arraybuffer2string(ab);
  t.equal(str2, str);
  t.end();
});

test('string <--> Buffer', function (t) {
  const str = 'Being second is to be the first of the ones who lose.';
  const buf = str2ab.string2buffer(str);
  t.type(buf, 'Buffer');
  const str2 = str2ab.buffer2string(buf);
  t.equal(str2, str);
  t.end();
});

test('Uint8 <--> ArrayBuffer', function (t) {
  const str = '*';
  const ab = Uint8Array.from(Buffer.from(str));
  const str2 = str2ab.arraybuffer2string(ab);
  t.equal(str2, str);
  t.end();
});

test('Uint8 <--> Buffer', function (t) {
  const str = '*';
  const buf = Buffer.from(str);
  const str2 = str2ab.buffer2string(buf);
  t.equal(str2, str);
  t.end();
});

test('multi byte string <--> ArrayBuffer', function (t) {
  const str = '大島の野増村にはシツナ神といふ女體の神があつて、近い頃までも稀には男を呪ふ女が祈願をかけたといふ話を聽いたが、本當のことであらうか。';
  const ab = str2ab.string2arraybuffer(str);
  t.type(ab, 'ArrayBuffer');
  const str2 = str2ab.arraybuffer2string(ab);
  t.equal(str2, str);
  t.end();
});

test('multi byte string <--> Buffer', function (t) {
  const str = '大島の野増村にはシツナ神といふ女體の神があつて、近い頃までも稀には男を呪ふ女が祈願をかけたといふ話を聽いたが、本當のことであらうか。';
  const buf = str2ab.string2buffer(str);
  t.type(buf, 'Buffer');
  const str2 = str2ab.buffer2string(buf);
  t.equal(str2, str);
  t.end();
});

test('base64url <--> ArrayBuffer', function (t) {
  const b64u = 'eyJjaGFsbGVuZ2UiOiJ1Vlg4OElnUmEwU1NyTUlSVF9xN2NSY2RmZ2ZSQnhDZ25fcGtwVUFuWEpLMnpPYjMwN3dkMU9MWFEwQXVOYU10QlIzYW1rNkhZenAtX1Z4SlRQcHdHdyIsIm9yaWdpbiI6Imh0dHBzOi8vd2ViYXV0aG4ub3JnIiwidG9rZW5CaW5kaW5nIjp7InN0YXR1cyI6Im5vdC1zdXBwb3J0ZWQifSwidHlwZSI6IndlYmF1dGhuLmNyZWF0ZSJ9';
  const ab = str2ab.base64url2arraybuffer(b64u);
  t.type(ab, 'ArrayBuffer');
  const b64u2 = str2ab.arraybuffer2base64url(ab);
  t.equal(b64u2, b64u);
  t.end();
});

test('base64url <--> Buffer', function (t) {
  const b64u = 'eyJjaGFsbGVuZ2UiOiJ1Vlg4OElnUmEwU1NyTUlSVF9xN2NSY2RmZ2ZSQnhDZ25fcGtwVUFuWEpLMnpPYjMwN3dkMU9MWFEwQXVOYU10QlIzYW1rNkhZenAtX1Z4SlRQcHdHdyIsIm9yaWdpbiI6Imh0dHBzOi8vd2ViYXV0aG4ub3JnIiwidG9rZW5CaW5kaW5nIjp7InN0YXR1cyI6Im5vdC1zdXBwb3J0ZWQifSwidHlwZSI6IndlYmF1dGhuLmNyZWF0ZSJ9';
  const ab = str2ab.base64url2buffer(b64u);
  t.type(ab, 'Buffer');
  const b64u2 = str2ab.buffer2base64url(ab);
  t.equal(b64u2, b64u);
  t.end();
});

test('string <--> ArrayBuffer <--> base64url', function (t) {
  const str = '{"challenge":"uVX88IgRa0SSrMIRT_q7cRcdfgfRBxCgn_pkpUAnXJK2zOb307wd1OLXQ0AuNaMtBR3amk6HYzp-_VxJTPpwGw","origin":"https://webauthn.org","tokenBinding":{"status":"not-supported"},"type":"webauthn.create"}';
  const ab = str2ab.string2arraybuffer(str);
  t.type(ab, 'ArrayBuffer');
  const b64u = str2ab.arraybuffer2base64url(ab);
  t.type(b64u, 'string');
  const ab2 = str2ab.base64url2arraybuffer(b64u);
  t.type(ab2, 'ArrayBuffer');
  t.equal(ab2.byteLength, ab.byteLength);
  const str2 = str2ab.arraybuffer2string(ab2);
  t.type(str2, 'string');
  t.same(str2, str);
  t.end();
});

test('string <--> Buffer <--> base64url', function (t) {
  const str = '{"challenge":"uVX88IgRa0SSrMIRT_q7cRcdfgfRBxCgn_pkpUAnXJK2zOb307wd1OLXQ0AuNaMtBR3amk6HYzp-_VxJTPpwGw","origin":"https://webauthn.org","tokenBinding":{"status":"not-supported"},"type":"webauthn.create"}';
  const buf = str2ab.string2buffer(str);
  t.type(buf, 'Buffer');
  const b64u = str2ab.buffer2base64url(buf);
  t.type(b64u, 'string');
  const buf2 = str2ab.base64url2buffer(b64u);
  t.type(buf2, 'Buffer');
  t.equal(buf2.byteLength, buf.byteLength);
  const str2 = str2ab.buffer2string(buf2);
  t.type(str2, 'string');
  t.same(str2, str);
  t.end();
});

test('base64 <--> ArrayBuffer', function (t) {
  const b64 = 'QmVpbmcgc2Vjb25kIGlzIHRvIGJlIHRoZSBmaXJzdCBvZiB0aGUgb25lcyB3aG8gbG9zZQ==';
  const ab = str2ab.base642arraybuffer(b64);
  t.type(ab, 'ArrayBuffer');
  const b642 = str2ab.arraybuffer2base64(ab);
  t.equal(b642, b64);
  t.end();
});

test('base64 <--> Buffer', function (t) {
  const b64 = 'QmVpbmcgc2Vjb25kIGlzIHRvIGJlIHRoZSBmaXJzdCBvZiB0aGUgb25lcyB3aG8gbG9zZQ==';
  const buf = str2ab.base642buffer(b64);
  t.type(buf, 'Buffer');
  const b642 = str2ab.buffer2base64(buf);
  t.equal(b642, b64);
  t.end();
});

test('Buffer <--> ArrayBuffer', function (t) {
  const buf = base64url.toBuffer('Being second is to be the first of the ones who lose.');
  const ab = str2ab.buffer2arraybuffer(buf);
  t.type(ab, 'ArrayBuffer');
  const buf2 = str2ab.arraybuffer2buffer(ab);
  t.same(buf2, buf);
  t.end();
});
