/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  let reversedString = "";
    for(let i = 0; i < str.length; i++) {
      reversedString += str[i];
      return reversedString;
    }
  
};

export default turnMeBaby;
