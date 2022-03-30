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
| string      | x | [1.1](#11-string2arraybufferstring) | [base64url](https://www.npmjs.com/package/base64url) | [base64url](https://www.npmjs.com/package/base64url) | [5.1](#51-string2bufferstring) |
| ArrayBuffer | [1.2](#12-arraybuffer2stringarrayuffer) | x | [2.2](#22-arraybuffer2base64urlarraybuffer) | [3.2](#32-arraybuffer2base64arraybuffer) | [4.2](#42-arraybuffer2bufferarraybuffer) |
| base64url   | [base64url](https://www.npmjs.com/package/base64url) | [2.1](#21-base64url2arraybufferstring) | x | [base64url](https://www.npmjs.com/package/base64url) | [6.1](#61-base64url2bufferstring) |
| base64      | x | [3.1](#31-base642arraybufferstring) | [base64url](https://www.npmjs.com/package/base64url) | x | [7.1](#71-base642bufferstring) |
| Buffer      | [5.2](#52-buffer2stringbuffer) | [4.1](#41-buffer2arraybufferbuffer) | [6.2](#62-buffer2base64buffer) | [7.2](#72-buffer2base64buffer) | x |

### 1. String <-> ArrayBuffer

#### 1.1 string2arraybuffer(string)

- Returns **ArrayBuffer**

#### 1.2 arraybuffer2string(ArrayBuffer)

- Returns **string**

### 2. base64url <-> ArrayBuffer

#### 2.1 base64url2arraybuffer(string)

- Returns **ArrayBuffer**

#### 2.2 arraybuffer2base64url(ArrayBuffer)

- Returns **string**

### 3. base64 <-> ArrayBuffer

#### 3.1 base642arraybuffer(string)

- Returns **ArrayBuffer**

#### 3.2 arraybuffer2base64(ArrayBuffer)

- Returns **string**

### 4. Buffer <-> ArrayBuffer

#### 4.1 buffer2arraybuffer(Buffer)

- Returns **ArrayBuffer**

#### 4.2 arraybuffer2buffer(ArrayBuffer)

- Returns **Buffer**

### 5. String <-> Buffer

#### 5.1 string2buffer(string)

- Returns **Buffer**

#### 5.2 buffer2string(Buffer)

- Returns **string**

#### 6. base64url <-> Buffer

#### 6.1 base64url2buffer(string)

- Returns **Buffer**

#### 6.2 buffer2base64url(Buffer)

- Returns **string**

### 7. base64 <-> Buffer

#### 7.1 base642buffer(string)

- Returns **Buffer**

#### 7.2 buffer2base64(Buffer)

- Returns **string**

## Install

[npm](https://www.npmjs.com/package/str2ab)

```
npm install str2ab
```

## Licence

[MIT](https://opensource.org/licenses/mit-license.php)  

