import fs from "fs";

function read () {
  fs.readFileSync('config.txt', 'utf8');    
}

export { read };