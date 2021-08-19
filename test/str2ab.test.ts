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
  t.equal(str, str2);
  t.end();
});

test('multi byte string <--> ArrayBuffer', function (t) {
  const str = '大島の野増村にはシツナ神といふ女體の神があつて、近い頃までも稀には男を呪ふ女が祈願をかけたといふ話を聽いたが、本當のことであらうか。';
  const ab = str2ab.string2arraybuffer(str);
  t.type(ab, 'ArrayBuffer');
  const str2 = str2ab.arraybuffer2string(ab);
  t.equal(str, str2);
  t.end();
});

test('base64url <--> ArrayBuffer', function (t) {
  const b64u = 'eyJjaGFsbGVuZ2UiOiJ1Vlg4OElnUmEwU1NyTUlSVF9xN2NSY2RmZ2ZSQnhDZ25fcGtwVUFuWEpLMnpPYjMwN3dkMU9MWFEwQXVOYU10QlIzYW1rNkhZenAtX1Z4SlRQcHdHdyIsIm9yaWdpbiI6Imh0dHBzOi8vd2ViYXV0aG4ub3JnIiwidG9rZW5CaW5kaW5nIjp7InN0YXR1cyI6Im5vdC1zdXBwb3J0ZWQifSwidHlwZSI6IndlYmF1dGhuLmNyZWF0ZSJ9';
  const ab = str2ab.base64url2arraybuffer(b64u);
  t.type(ab, 'ArrayBuffer');
  const b64u2 = str2ab.arraybuffer2base64url(ab);
  t.equal(b64u, b64u2);
  t.end();
});

test('base64 <--> ArrayBuffer', function (t) {
  const b64 = 'QmVpbmcgc2Vjb25kIGlzIHRvIGJlIHRoZSBmaXJzdCBvZiB0aGUgb25lcyB3aG8gbG9zZQ==';
  const ab = str2ab.base642arraybuffer(b64);
  t.type(ab, 'ArrayBuffer');
  const b642 = str2ab.arraybuffer2base64(ab);
  t.equal(b64, b642);
  t.end();
});

test('buffer <--> ArrayBuffer', function (t) {
  const buf = base64url.toBuffer('Being second is to be the first of the ones who lose.');
  const ab = str2ab.buffer2arraybuffer(buf);
  t.type(ab, 'ArrayBuffer');
  const buf2 = str2ab.arraybuffer2buffer(ab);
  t.same(buf, buf2);
  t.end();
});
