// EXAMPLE 1 - Convert seconds to HH:MM:SS in JavaScript

const seconds = 600;

// ✅ get hh:mm:ss string
const result = new Date(seconds * 1000)
  .toISOString()
  .slice(11, 19);
console.log(result); // 👉️ "00:10:00" (hh:mm:ss)

// ✅ if seconds are less than 1 hour and you only need mm:ss
const result2 = new Date(seconds * 1000)
  .toISOString()
  .slice(14, 19);
console.log(result2); // 👉️ "10:00" (mm:ss)

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert HH:MM:SS to Seconds using JavaScript

// const str = '09:30:16';

// const [hours, minutes, seconds] = str.split(':');

// function convertToSeconds(hours, minutes, seconds) {
//   return (
//     Number(hours) * 60 * 60 +
//     Number(minutes) * 60 +
//     Number(seconds)
//   );
// }

// console.log(convertToSeconds(hours, minutes, seconds)); // 👉️ 34216
