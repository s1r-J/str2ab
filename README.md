# str2ab

Convert between string (including base64 and base64url) and ArrayBuffer.

## Usage

ESM

```
import str2ab from 'str2ab';

str2ab.string2arraybuffer('this is sample.');
```

CommonJS

```
const str2ab = require('str2ab');

str2ab.string2arraybuffer('this is sample.');
```


## API

| From/To     | string | ArrayBuffer | base64url | base64 | Buffer |
| :----: | :----: | :----: | :----: | :----: | :----: |
| string      | x | [1.1](#string2arraybufferstring) | [base64url](https://www.npmjs.com/package/base64url) | [base64url](https://www.npmjs.com/package/base64url) | [base64url](https://www.npmjs.com/package/base64url) |
| ArrayBuffer | [1.2](#arraybuffer2stringarrayuffer) | x | [2.2](#arraybuffer2base64urlarraybuffer) | [3.2](#arraybuffer2base64arraybuffer) | [4.2](#arraybuffer2bufferarraybuffer) |
| base64url   | [base64url](https://www.npmjs.com/package/base64url) | [2.1](#base64url2arraybufferstring) | x | [base64url](https://www.npmjs.com/package/base64url) | x |
| base64      | x | [3.3](#base642arraybufferstring) | [base64url](https://www.npmjs.com/package/base64url) | x | x |
| Buffer      | x | [4.1](#buffer2arraybufferbuffer) | x | x | x |

### String <-> ArrayBuffer

#### string2arraybuffer(string)

- Returns **ArrayBuffer**

#### arraybuffer2string(ArrayBuffer)

- Returns **string**

### base64url <-> ArrayBuffer

#### base64url2arraybuffer(string)

- Returns **ArrayBuffer**

#### arraybuffer2base64url(ArrayBuffer)

- Returns **string**

### base64 <-> ArrayBuffer

#### base642arraybuffer(string)

- Returns **ArrayBuffer**

#### arraybuffer2base64(ArrayBuffer)

- Returns **string**

### Buffer <-> ArrayBuffer

#### buffer2arraybuffer(Buffer)

- Returns **ArrayBuffer**

#### arraybuffer2buffer(ArrayBuffer)

- Returns **Buffer**

## Install

[npm](https://www.npmjs.com/package/str2ab)

```
npm install str2ab
```

## Licence

[MIT](https://opensource.org/licenses/mit-license.php)  

