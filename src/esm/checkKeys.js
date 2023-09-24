const checkKeys = (one, two) => {
  return JSON.stringify(Object.keys(one)) == JSON.stringify(Object.keys(two));
};

export default checkKeys;
