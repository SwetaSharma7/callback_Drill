const fs = require("fs");
const path = require("path");

const problem2 = (filePath) => {
  return new Promise((resolve, reject) => {
    const deleteAllFiles = (data) => {
      allFiles = data.split("\n");
      allFiles.forEach((ele) => {
        fs.unlink(ele, (err) => {
          if (err) reject(err);
        });
      });
    };
    const readFileHavingAllNames = () => {
      fs.readFile("filenames.txt", "utf-8", (err, data) => {
        if (err) reject(err);
        resolve("resolved");
      });
    };

    const appendSortedContentFile = (fileName) => {
      fs.appendFile("filenames.txt", fileName, (err) => {
        if (err) reject(err);
        readFileHavingAllNames();
      });
    };

    const sortDataAndStore = (data) => {
      const fileName = "sortedSentenceFile.txt";
      data = data.split("\n").join(" ").split(" ").sort().join(" ");
      fs.writeFile(fileName, data, (err) => {
        if (err) reject(err);
        appendSortedContentFile(fileName);
      });
    };

    const readLowercaseSentenceFile = (fileName) => {
      fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) reject(err);
        sortDataAndStore(data);
      });
    };

    const appendLowercaseSentenceFile = (fileName) => {
      fs.appendFile("./filenames.txt", fileName + "\n", (err) => {
        if (err) reject(err);
        readLowercaseSentenceFile(fileName);
      });
    };

    const convertToSentenceAndWrite = (data) => {
      const fileName = "lowercaseSentences.txt";
      data = data
        .toLowerCase()
        .split(".")
        .filter((ele) => ele !== "")
        .join("\n");
      fs.writeFile(fileName, data, (err) => {
        if (err) reject(err);
        appendLowercaseSentenceFile(fileName);
      });
    };

    const readUppercaseFile = (fileName) => {
      fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) reject(err);
        convertToSentenceAndWrite(data);
      });
    };

    const appendUppercaseFile = (fileName) => {
      fs.appendFile("./filenames.txt", fileName + "\n", (err) => {
        if (err) reject(err);
        readUppercaseFile(fileName);
      });
    };

    const writeFileOfUppercase = (data) => {
      const filename = "uppercaseData.txt";
      data = data.toUpperCase();
      fs.writeFile(filename, data, (err) => {
        if (err) reject(err);
        appendUppercaseFile(filename);
      });
    };

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      writeFileOfUppercase(data);
    });
  });
};
module.exports.problem2 = problem2;
