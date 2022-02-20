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

export const getScore = async (sorted) => {
  const ones = sorted[0];
  const twos = sorted[1];
  const threes = sorted[2];
  const fours = sorted[3];
  const fives = sorted[4];
  const sixes = sorted[5];
  const pairs = sorted.filter((arr) => arr.length === 2);
  const threeOfAKind = sorted.filter((arr) => arr.length === 3);
  const fourOfAKind = sorted.filter((arr) => arr.length === 4);
  const fiveOfAKind = sorted.filter((arr) => arr.length === 5);
  const sixOfAKind = sorted.filter((arr) => arr.length === 6);
  const straight =
    ones.length === 1 &&
    twos.length === 1 &&
    threes.length === 1 &&
    fours.length === 1 &&
    fives.length === 1 &&
    sixes.length === 1
      ? true
      : false;

  //Points
  const sixOfAKindPoints = 3000;
  const twoTripletsPoints = 2500;
  const fiveOfAKindPoints = 2000;
  const straightPoints = 1500;
  const threePairsPoints = 1500;
  const fourOfAKindPoints = 1000;
  const threeSixesPoints = 600;
  const threeFivesPoints = 500;
  const threeFoursPoints = 400;
  const threeThreesPoints = 300;
  const threeTwosPoints = 200;
  const threeOnesPoints = 300;
  const onesPoints = 100;
  const fivesPoints = 50;

  // Initilization of return variables
  let points = 0;
  let remove = 0;

  // Helper functions for three of a kind checks
  const threeOfAKindCheck = () => {
    remove = remove + 3;
    sixes.length === 3
      ? (points = threeSixesPoints)
      : fives.length === 3
      ? (points = threeFivesPoints)
      : fours.length === 3
      ? (points = threeFoursPoints)
      : threes.length === 3
      ? (points = threeThreesPoints)
      : twos.length === 3
      ? (points = threeTwosPoints)
      : (points = threeOnesPoints);

    checkReamining(3);
  };

  // helper function to check for additional 1s
  const check1s = () => {
    if (ones.length > 0) {
      points = points + ones.length * onesPoints;
      remove = remove + ones.length;
    }
  };

  // helper function to check for additional 5s
  const check5s = () => {
    if (fives.length > 0) {
      points = points + fives.length * fivesPoints;
      remove = remove + fives.length;
    }
  };

  // helper function to check for additional 1s and 5s
  const check1s5s = (length) => {
    if (fives.length > 0) {
      points = points + fives.length * fivesPoints;
      remove = remove + fives.length;
    }
    if (ones.length > 0) {
      points = points + ones.length * onesPoints;
      remove = remove + ones.length;
    }
  };
  // helper function to coordinate check of 1s and 5s
  const checkReamining = (length) => {
    ones.length === length
      ? check5s()
      : fives.length === length
      ? check1s()
      : check1s5s();
  };

  // This is the actual scoring logic that makes use of all the above.
  if (sixOfAKind.length === 1) {
    points = sixOfAKindPoints;
    return { points, remove };
  } else if (threeOfAKind.length === 2) {
    points = twoTripletsPoints;
    return { points, remove };
  } else if (straight) {
    points = straightPoints;
    return { points, remove };
  } else if (pairs.length === 3) {
    points = threePairsPoints;
    return { points, remove };
  } else if (fiveOfAKind.length === 1) {
    points = fiveOfAKindPoints;
    remove = remove + 5;
    checkReamining(5);
    return { points, remove };
  } else if (fourOfAKind.length === 1) {
    if (pairs.length === 1) {
      points = threePairsPoints;
      return { points, remove };
    }
    points = fourOfAKindPoints;
    remove = remove + 4;
    checkReamining(4);
    return { points, remove };
  } else if (threeOfAKind.length === 1) {
    threeOfAKindCheck();
    return { points, remove };
  } else {
    check1s5s();
    return { points, remove };
  }
};
