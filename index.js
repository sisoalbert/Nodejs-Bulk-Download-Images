const https = require("https");
const fs = require("fs");
const urlsArray = require("./urls");

console.log("separatedUrls", urlsArray.length);

for (let i = 0; i < urlsArray.length; i++) {
  const url = urlsArray[i];
  const file = fs.createWriteStream(`image${i}.png`);
  const protocol = url.startsWith("https") ? https : http;
  const request = protocol.get(url, function (response) {
    response.pipe(file);
  });
}
