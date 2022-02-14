export const farkelCheck = async (sorted) => {
  const { points, _remove } = await getScore(sorted);

  return points > 0 ? false : true;
};

// Sort dice rolls for scoring
export const sortDice = async (roll) => {
  const sorted = [[], [], [], [], [], []];
  roll.forEach((dice) => {
    dice == 1
      ? sorted[0].push(dice)
      : dice == 2
      ? sorted[1].push(dice)
      : dice == 3
      ? sorted[2].push(dice)
      : dice == 4
      ? sorted[3].push(dice)
      : dice == 5
      ? sorted[4].push(dice)
      : sorted[5].push(dice);
  });

  return sorted;
};

export const getScore = (sorted) => {
  const threeOfAKind = sorted.filter((arr) => arr.length === 3);
  const fourOfAKind = sorted.filter((arr) => arr.length === 4);
  const fiveOfAKind = sorted.filter((arr) => arr.length === 5);
  const sixOfAKind = sorted.filter((arr) => arr.length === 6);
  const pairs = sorted.filter((arr) => arr.length === 2);
  const ones = sorted[0];
  const fives = sorted[4];
  let points = 0;
  let remove = 0;

  if (sixOfAKind.length === 1) {
    points = points + 3000;
    remove = remove + 0;
    return { points, remove };
  }
  if (threeOfAKind.length === 2) {
    points = points + 2500;
    remove = remove + 0;
    return { points, remove };
  }
  if (
    ones.length === 1 &&
    sorted[1].length === 1 &&
    sorted[2].length === 1 &&
    sorted[3].length === 1 &&
    fives.length === 1 &&
    sorted[5].length === 1
  ) {
    points = points + 1500;
    remove = remove + 0;
    return { points, remove };
  }
  if (pairs.length === 3) {
    points = points + 1500;
    remove = remove + 0;
    return { points, remove };
  }

  const check1s5s = (length) => {
    if (ones.length === length) {
      if (fives.length > 0) {
        points = points + fives.length * 50;
        remove = remove + fives.length;
      }
    } else if (fives.length === length) {
      if (ones.length > 0) {
        points = points + ones.length * 100;
        remove = remove + ones.length;
      }
    } else {
      if (fives.length > 0) {
        points = points + fives.length * 50;
        remove = remove + fives.length;
      }
      if (ones.length > 0) {
        points = points + ones.length * 100;
        remove = remove + ones.length;
      }
    }
  };

  if (fiveOfAKind.length === 1) {
    points = points + 2000;
    remove = remove + 5;
    check1s5s(5);
    return { points, remove };
  }
  if (fourOfAKind.length === 1) {
    if (pairs.length === 1) {
      points = points + 1500;
      remove = remove + 0;
      return { points, remove };
    }
    points = points + 1000;
    remove = remove + 4;
    check1s5s(4);
    return { points, remove };
  }
  if (sorted[5].length === 3) {
    points = points + 600;
    remove = remove + 3;
    check1s5s(3);
    return { points, remove };
  }
  if (fives.length === 3) {
    points = points + 500;
    remove = remove + 3;
    check1s5s(3);
    return { points, remove };
  }
  if (sorted[3].length === 3) {
    points = points + 400;
    remove = remove + 3;
    check1s5s(3);
    return { points, remove };
  }
  if (sorted[2].length === 3) {
    points = points + 300;
    remove = remove + 3;
    check1s5s(3);
    return { points, remove };
  }
  if (sorted[1].length === 3) {
    points = points + 200;
    remove = remove + 3;
    check1s5s(3);
    return { points, remove };
  }
  if (ones.length === 3) {
    points = points + 300;
    remove = remove + 3;
    check1s5s(3);
    return { points, remove };
  }
  if (ones.length > 0 && fives.length > 0) {
    points = points + ones.length * 100 + fives.length * 50;
    remove = remove + ones.length + fives.length;
    return { points, remove };
  }
  if (ones.length > 0) {
    points = points + ones.length * 100;
    remove = remove + ones.length;
    return { points, remove };
  }
  if (fives.length > 0) {
    points = points + fives.length * 50;
    remove = remove + fives.length;
    return { points, remove };
  }
  return { points, remove };
};
