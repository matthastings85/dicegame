export const farkelCheck = (sorted) => {
  // Check dice for scores:
  const threeOfAKind = sorted.filter((arr) => arr.length == 3);
  const fourOfAKind = sorted.filter((arr) => arr.length == 4);
  const fiveOfAKind = sorted.filter((arr) => arr.length == 5);
  const sixOfAKind = sorted.filter((arr) => arr.length == 6);
  const pairs = sorted.filter((arr) => arr.length == 2);

  // Scoring filter
  return sixOfAKind.length == 1
    ? false
    : threeOfAKind.length == 2
    ? false
    : fiveOfAKind.length == 1
    ? false
    : sorted[0].length == 1 &&
      sorted[1].length == 1 &&
      sorted[2].length == 1 &&
      sorted[3].length == 1 &&
      sorted[4].length == 1 &&
      sorted[5].length == 1
    ? false
    : pairs.length == 3
    ? false
    : fourOfAKind.length == 1
    ? false
    : sorted[5].length == 3
    ? false
    : sorted[4].length == 3
    ? false
    : sorted[3].length == 3
    ? false
    : sorted[2].length == 3
    ? false
    : sorted[1].length == 3
    ? false
    : sorted[0].length == 3
    ? false
    : sorted[0].length > 0 && sorted[4] > 0
    ? false
    : sorted[0].length > 0
    ? false
    : sorted[4].length > 0
    ? false
    : true;
};

// sixOfAKind.length == 1
//     ? setRollScore(3000, 0)
//     : threeOfAKind.length == 2
//     ? setRollScore(2500, 0)
//     : fiveOfAKind.length == 1
//     ? setRollScore(2000, 5)
//     : sorted[0].length == 1 &&
//       sorted[1].length == 1 &&
//       sorted[2].length == 1 &&
//       sorted[3].length == 1 &&
//       sorted[4].length == 1 &&
//       sorted[5].length == 1
//     ? setRollScore(1500, 0)
//     : pairs.length == 3
//     ? setRollScore(1500, 0)
//     : fourOfAKind.length == 1
//     ? setRollScore(1000, 4)
//     : sorted[5].length == 3
//     ? setRollScore(600, 3)
//     : sorted[4].length == 3
//     ? setRollScore(500, 3)
//     : sorted[3].length == 3
//     ? setRollScore(400, 3)
//     : sorted[2].length == 3
//     ? setRollScore(300, 3)
//     : sorted[1].length == 3
//     ? setRollScore(200, 3)
//     : sorted[0].length == 3
//     ? setRollScore(300, 3)
//     : sorted[0].length > 0 && sorted[4] > 0
//     ? setRollScore(
//         sorted[0].length * 100 + sorted[4].length * 50,
//         sorted[0].length + sorted[4].length
//       )
//     : sorted[0].length > 0
//     ? setRollScore(sorted[0].length * 100, sorted[0].length)
//     : sorted[4].length > 0
//     ? setRollScore(sorted[4].length * 50, sorted[4].length)
//     : setRollScore(0, 0);
