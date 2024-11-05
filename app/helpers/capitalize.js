import { helper } from '@ember/component/helper';

export default helper(function capitalize(str) {
  if (typeof str === 'object' && str !== null) {
    str = str[0]; // Use the name property if it exists
  } else {
    return ''; // Return an empty string if no valid string found
  }

  // Proceed with capitalizing if str is a valid string
  if (typeof str === 'string') {
    return str
      .split(' ') // Split the string into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join the words back into a single string
  }

  return str; // Return the original value if not a string
});

// export default helper(function capitalize([str]) {
//   // Check if the input is an object and handle accordingly
//   if (typeof str === 'object' && str !== null) {
//     // For example, if str is an object with a `name` property
//     if (str.name && typeof str.name === 'string') {
//       str = str.name; // Use the name property
//     } else {
//       return ''; // Return an empty string if no valid string found
//     }
//   }

//   // Proceed with capitalizing if str is a valid string
//   if (typeof str === 'string') {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }

//   return str; // Return the original value if not a string
// });
