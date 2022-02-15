import {ExifParser} from './ExifParser';
import {DOMBufferStream} from './DOMBufferStream';
import {BufferStream as NodeBufferStream} from './BufferStream';

function getGlobal() {
  return (1, eval)('this');
}


export class ExifParserFactory {
  public static create(buffer: Buffer | ArrayBuffer, global?: any) {
    global = global || getGlobal();
    if (buffer instanceof global.ArrayBuffer) {
      return new ExifParser(new DOMBufferStream(buffer, 0, buffer.byteLength, true, global, undefined));
    } else {
      return new ExifParser(new NodeBufferStream(buffer, 0, (<Buffer>buffer).length, true));
    }
  }
}
