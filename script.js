// function funcOne(value, cb) {
//   cb(false, value + 1);
// }
// function funcTwo(value, cb) {
//   cb(false, value + 2);
// }
// function funcThree(value, cb) {
//   cb(false, value + 3);
// }
// function funcFour(value, cb) {
//   cb(false, value + 4);
// }
// function funcFive(value, cb) {
//   cb(false, value + 7);
// }
// function recoverFromError() {
//   console.log("error");
// }
// funcOne(2, (err, resOne) => {
//   if (err) recoverFromError(err);

//   funcTwo(resOne, (err, resTwo) => {
//     if (err) recoverFromError(err);
//     else
//       funcThree(resTwo, (err, resThree) => {
//         if (err) recoverFromError(err);
//         else
//           funcFour(resThree, (err, resFour) => {
//             if (err) recoverFromError(err);
//             funcFive(resFour, (err, five) => {
//               if (err) recoverFromError(err);
//               else console.log(five);
//             });
//           });
//       });
//   });
// });

////////////////////////promis

// const funcOne = (value) => {
//   return new Promise((resolve, reject) => {
//     // reject();
//     resolve(value + 1);
//   });
// };
// function funcTwo(value) {
//   return value + 2;
// }
// function funcThree(value) {
//   return value + 3;
// }
// function funcFour(value) {
//   return value + 4;
// }
// function funcFive(value) {
//   return value + 7;
// }
// function recoverFromError() {
//   console.log("error");
// }
// funcOne(2)
//   .then(funcTwo)
//   .then(funcThree)
//   .then(funcFour)
//   .then(funcFive)
//   .then(console.log)
//   .catch((err) => recoverFromError(err));

// const pationPromise = new Promise((resolve, reject) => {
//   reject();
// });
// pationPromise.then(takeDrugs);
// pationPromise.catch(didntDrink);
// function takeDrugs() {
//   console.log("you will be cured");
// }
// function didntDrink() {
//   console.log("you will not be cured");
// }

// const passingPromise = new Promise((resolve, reject) => {
//   let mark = 30;
//   if (mark >= 60) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// passingPromise.then(() => console.log("you will get a car"));
// passingPromise.catch(() => console.log("you will get nothing"));

// function getData() {
//   return new Promise((resolve, reject) => {
//     resolve({ name: "lina", city: "Gaza", mark: 80 });
//     // reject("some thing wrong");
//   });
// }
// getData()
//   .then(function (data) {
//     console.log(data.mark);
//     if (data.mark >= 60) {
//       console.log("you will success");
//     } else {
//       console.log("fail");
//     }

//     console.log("process data ...");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

///////////////////////////////////

// function getImages() {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       let response = JSON.parse(xhr.responseText);

//       console.log(response.data[0].images.fixed_height.url);
//       let image = response.data[0].images.fixed_height.url;
//       const images = document.querySelector("#images");
//       let img = document.createElement("img");
//       img.src = image;
//       images.appendChild(img);
//     }
//   };
//   xhr.open(
//     "GET",
//     "http://api.giphy.com/v1/gifs/search?q=" +
//       "cat" +
//       "&limit=10" +
//       "&api_key=dc6zaTOxFJmzC"
//   );
//   xhr.send();
// }
// getImages();

//////////////////////////////////////
// function getGifs() {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open(
//       "GET",
//       "http://api.giphy.com/v1/gifs/search?q=" +
//         "cat" +
//         "&limit=10" +
//         "&api_key=dc6zaTOxFJmzC"
//     );
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           let response = resolve(xhr.responseText);
//           console.log(response);
//         } else {
//           reject(xhr.statusText);
//         }
//       }
//     };

//     xhr.send();
//   });
// }
// getGifs()
//   .then(function (response) {
//     return JSON.parse(response).data[0].images.fixed_height.url;
//   })
//   .then(function (image) {
//     const images = document.querySelector("#images");
//     let img = document.createElement("img");
//     img.src = image;
//     images.appendChild(img);
//   });
// const fs = require("fs");

// const readAFile = (callback) => {
//   fs.readFile("./sample.txt", "utf8", (err, data) => {
//     if (err) callback(err);
//     else callback(null, data);
//   });
// };

// readAFile((err, res) => {
//   if (err) console.log(err);
//   else console.log(res);
// });
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// const readAFilePromise = () => {
//   return new Promise((resolve, reject) => {
//     fs.readFile("./sample.txt", "utf8", (err, data) => {
//       if (err) reject(err);
//       else resolve(data);
//     });
//   });
// };

// readAFilePromise()
//   .then((e) => console.log(e))
//   .catch((err) => console.log(err));

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) => {
//   console.log(response);
// });
