# Node.js Bulk Download Images

This Node.js script can be used to bulk download a list of images from URLs provided in a separate file. It uses the built-in `https` module in Node.js to download each image and save it as a file.

## Usage

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/sisoalbert/Nodejs-Bulk-Download-Images.git
cd Nodejs-Bulk-Download-Images
npm install

Add URLs to urls.js file:
module.exports = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
  // add more URLs here
];

Run the script:
`node index.js`

The downloaded images will be saved in the project directory with filenames `image1.png`, `image2.png`, `image3.png`, etc.
```
