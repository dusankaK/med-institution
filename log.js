import format  from 'date-fns/format/index.js';
import fs from "fs";

var stream = fs.createWriteStream('log.txt', {flags: "a"})

export class Log {
  static logujAkciju(poruka){
    stream.write(`${format(new Date(), '[dd-MM-yyyy h:mm:ss]')} ${poruka} \n`)
  }
}