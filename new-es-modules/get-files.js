// get-files.js
import path from "path";
import fs from "fs/promises";
const isDir = async (d) => (await fs.lstat(d)).isDirectory();
async function getFiles(dir) {
  const list = await fs.readdir(dir);
  const filePromises = list.map(async (filename) => {
    const filepath = path.join(dir, filename);
    if (await isDir(filepath)) {
      return { type: "dir", filepath };
    } else {
      const content = String(await fs.readFile(filepath));
      return { type: "file", filepath, content };
    }
  });
  return Promise.all(filePromises);
}
export { getFiles };
