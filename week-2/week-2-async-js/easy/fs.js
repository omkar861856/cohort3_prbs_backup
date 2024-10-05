import fs from "fs";

fs.readFile("2-counter.md", "utf-8", (err, data) => {
  if (err) throw new Error(err);

  console.log(data);
});

// completed
