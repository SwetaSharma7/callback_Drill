const fs = require("fs");
const path = require("path");
const problem1 = (absolutePathOfRandomDirectory, randomNumberOfFiles) => {
  return new Promise((resolve, reject) => {
    const createFile = (dirPath) => {
      for (let i = 0; i < randomNumberOfFiles; i++) {
        const fileName = `file_${i}.json`;
        const data = { name: "Sweta", age: "25", Company: "MountBlue"};
        fs.writeFile(path.join(dirPath, fileName), JSON.stringify(data), (err) => {
          if (err) reject(err);
          else deleteFile(path.join(dirPath, fileName));
        });
      }
    };

    const deleteFile = (filePath) => {
      fs.unlink(filePath, (err) => {
        if (err) reject(err);
        resolve("resolved");
      });
    };

    const createDir = (dirPath) => {
      fs.mkdir(dirPath, (err) => {
        if (err) reject(err);
        else createFile(dirPath);
      });
    };

    const DirExist = (dirPath) => {
      fs.access(dirPath, (err) => {
        if (err) createDir(dirPath);
        else createFile(dirPath);
      });
    };

    DirExist(absolutePathOfRandomDirectory);
  });
};
module.exports.problem1 = problem1;
