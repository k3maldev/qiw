const findKey = (obj, valueToFind) => {
  const keys = [];
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === valueToFind) {
      keys.push(key);
    }
  }
  
  return keys;
}

export default findKey