const express = require('express')
const app = express()
const port = 3000

app
    .get('/', (req, res) => {
        // cara untuk menampilkan index.html root adalah lokasi dimana tempat file index.html berada
        res.sendFile("./index.html", { root: __dirname });
    })

    .get('/about', (req, res) => {
        res.send('Hello World! About');
    })

    // methode .use digunakan seperti default get, maka jika tidak ada get yg diminta, otomatis akan dimasukkan ke .use
    .use("/", (req, res) => {
        res.send(404);
    })

    .listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    })



// // Membuat secara lebih ringkas dibanding appcopy.js
// const http = require("http");
// const fs = require("fs");
// const port = 3000;

// // buat fungsi render untuk membuka halaman
// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write("Error: File not found");
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// };

// http
//     .createServer((req, res) => {
//         const url = req.url;

//         res.writeHead(200, {
//             "Content-Type": "text/html",
//         });
//         if (url === "/about") {
//             renderHTML("./about.html", res)
//         } else if (url === "/contact") {
//             renderHTML("./contact.html", res);
//         } else {
//             renderHTML("./index.html", res);
//         }
//     })

//     .listen(port, () => {
//         console.log(`Server is listening on port ${port}`);
//     })
