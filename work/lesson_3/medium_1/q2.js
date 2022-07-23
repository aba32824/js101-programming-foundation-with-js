/**
 * Starting with the string:
 * 
 *   let munstersDescription = "The Munsters are creepy and spooky.";
 * Return a new string that swaps the case of all of the letters:
 *
 *  `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
 */

 let munstersDescription = "The Munsters are creepy and spooky.";
 const firstSmallCharCode = 97; // NOTE: it's limited to the ASCII code table
 let newString = String();
 console.log(munstersDescription);

 munstersDescription.split('').forEach(element => {
  let charCode = element.charCodeAt();
  if (charCode >= firstSmallCharCode) {
    newString = newString + element.toUpperCase();
  } else {
    newString = newString + element.toLowerCase();
  }
 });

 console.log(newString);