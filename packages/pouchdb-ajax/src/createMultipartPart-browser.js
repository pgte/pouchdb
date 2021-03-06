import { binaryStringToArrayBuffer } from 'pouchdb-binary-utils';

// create a "part" suitable for multipart. in the browser
// this is an ArrayBuffer; in Node it's a binary string
function createMultipartPart(data) {
  return binaryStringToArrayBuffer(data);
}

export default createMultipartPart;