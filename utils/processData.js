function processInputData(data) {
  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];
  const special_characters = [];
  const concatArray = [];

  let sum = 0;

  data.forEach(item => {
    const str = String(item);
    if (/^\d+$/.test(str)) {
      const num = parseInt(str);
      sum += num;
      (num % 2 === 0 ? even_numbers : odd_numbers).push(str);
    } else if (/^[a-zA-Z]+$/.test(str)) {
      alphabets.push(str.toUpperCase());
      concatArray.push(str);
    } else {
      special_characters.push(str);
    }
  });

  const reversed = concatArray.join('').split('').reverse();
  const concat_string = reversed.map((ch, idx) => (
    idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
  )).join('');

  return {
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: String(sum),
    concat_string
  };
}

module.exports = { processInputData };
