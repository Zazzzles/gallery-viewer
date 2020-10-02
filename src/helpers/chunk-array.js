export default (arr = [], chunkSize) => {
  function chunkArr(e, i) {
    return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
  }
  return arr.map(chunkArr).filter((e) => e);
};
