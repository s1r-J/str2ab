# str2ab

[![npm version](https://badge.fury.io/js/str2ab.svg)](https://badge.fury.io/js/str2ab) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Convert between string (including base64 and base64url), ArrayBuffer and Buffer.

## Usage

ESM

```javascript
import str2ab from 'str2ab';

str2ab.string2arraybuffer('this is sample.');
```

CommonJS

```javascript
const str2ab = require('str2ab');

str2ab.string2arraybuffer('this is sample.');
```

## API

|   From/To   |                  string                  |              ArrayBuffer               |                  Base64URL                  |                  Base64                  |                  Buffer                  |
| :---------: | :--------------------------------------: | :------------------------------------: | :-----------------------------------------: | :--------------------------------------: | :--------------------------------------: |
|   string    |                    x                     |  [1.1](#11-string2arraybufferstring)   |      [2.1](#21-string2base64urlstring)      |      [3.1](#31-string2base64string)      |      [4.1](#41-string2bufferstring)      |
| ArrayBuffer | [1.2](#12-arraybuffer2stringarraybuffer) |                   x                    | [5.1](#51-arraybuffer2base64urlarraybuffer) | [6.1](#61-arraybuffer2base64arraybuffer) | [7.1](#71-arraybuffer2bufferarraybuffer) |
|  Base64URL  |    [2.2](#22-base64url2stringstring)     | [5.2](#52-base64url2arraybufferstring) |                      x                      |    [8.1](#81-base64url2base64string)     |    [9.1](#91-base64url2bufferstring)     |
|   Base64    |      [3.2](#32-base642stringstring)      |  [6.2](#62-base642arraybufferstring)   |      [8.2](#82-base642base64urlstring)      |                    x                     |     [10.1](#101-base642bufferstring)     |
|   Buffer    |      [4.2](#42-buffer2stringbuffer)      |  [7.2](#72-buffer2arraybufferbuffer)   |      [9.2](#92-buffer2base64urlbuffer)      |     [10.2](#102-buffer2base64buffer)     |                    x                     |

### 1. String <-> ArrayBuffer

#### 1.1 string2arraybuffer(string)

- Returns **ArrayBuffer**

#### 1.2 arraybuffer2string(ArrayBuffer)

- Returns **string**

### 2. String <-> Base64URL

#### 2.1 string2base64url(string)

- Returns Base64URL encoded **string**

#### 2.2 base64url2string(string)

- Returns **string**

### 3. String <-> Base64

#### 3.1 string2base64(string)

- Returns Base64 encoded **string**

#### 3.2 base642string(string)

- Returns **string**

### 4. String <-> Buffer

#### 4.1 string2buffer(string)

- Returns **Buffer**

#### 4.2 buffer2string(Buffer)

- Returns **string**

### 5. ArrayBuffer <-> Base64URL

#### 5.1 arraybuffer2base64url(ArrayBuffer)

- Returns Base64 URL encoded **string**

#### 5.2 base64url2arraybuffer(string)

- Returns **ArrayBuffer**

### 6. ArrayBuffer <-> Base64

#### 6.1 arraybuffer2base64(ArrayBuffer)

- Returns Base64 encoded **string**

#### 6.2 base642arraybuffer(string)

- Returns **ArrayBuffer**

### 7. ArrayBuffer <-> Buffer

#### 7.1 arraybuffer2buffer(ArrayBuffer)

- Returns **Buffer**

#### 7.2 buffer2arraybuffer(Buffer)

- Returns **ArrayBuffer**

### 8. Base64URL <-> Base64

#### 8.1 base64url2base64(string)

- Returns Base64 encoded **string**

#### 8.2 base642base64url(string)

- Returns Base64 URL encoded **string**

#### 9. Base64URL <-> Buffer

#### 9.1 base64url2buffer(string)

- Returns **Buffer**

#### 9.2 buffer2base64url(Buffer)

- Returns Base64 URL encoded **string**

### 10. Base64 <-> Buffer

#### 10.1 base642buffer(string)

- Returns **Buffer**

#### 10.2 buffer2base64(Buffer)

- Returns Base64 encoded **string**

### isBase64url(string)

- When input parameter is Base64 URL encoded string, returns true.
- Otherwise returns false.

### isBase64(string)

- When input parameter is Base64 encoded string, returns true.
- Otherwise returns false.

## Install

[npm](https://www.npmjs.com/package/str2ab)

```
npm install str2ab
```

## License

[MIT](https://opensource.org/licenses/mit-license.php)
