import React from "react";

import {
  oneSmall,
  twoSmall,
  threeSmall,
  fourSmall,
  fiveSmall,
  sixSmall,
} from "../../utilities";

const Scoring = () => {
  return (
    <div className="instructions-wrapper">
      <h2>Scoring</h2>
      <div className="grid">
        <div className="col-l">{oneSmall}</div>
        <div className="col-r">100 points</div>
        <div className="col-l">{fiveSmall}</div>
        <div className="col-r">50 points</div>
        <div className="col-l">
          {oneSmall}
          {oneSmall}
          {oneSmall}
        </div>
        <div className="col-r">300 points</div>
        <div className="col-l">
          {twoSmall}
          {twoSmall}
          {twoSmall}
        </div>
        <div className="col-r">200 points</div>
        <div className="col-l">
          {threeSmall}
          {threeSmall}
          {threeSmall}
        </div>
        <div className="col-r">300 points</div>
        <div className="col-l">
          {fourSmall}
          {fourSmall}
          {fourSmall}
        </div>
        <div className="col-r">400 points</div>
        <div className="col-l">
          {fiveSmall}
          {fiveSmall}
          {fiveSmall}
        </div>
        <div className="col-r">500 points</div>
        <div className="col-l">
          {sixSmall}
          {sixSmall}
          {sixSmall}
        </div>
        <div className="col-r">600 points</div>
        <div className="col-l">4-of-a-kind</div>
        <div className="col-r">1000 points</div>
        <div className="col-l">
          {oneSmall}
          {twoSmall}
          {threeSmall}
          {fourSmall}
          {fiveSmall}
          {sixSmall}
        </div>
        <div className="col-r">1500 points</div>
        <div className="col-l">Three pairs</div>
        <div className="col-r">1500 points</div>
        <div className="col-l">5-of-a-kind</div>
        <div className="col-r">2000 points</div>
        <div className="col-l">Two triplets</div>
        <div className="col-r">2500 points</div>
        <div className="col-l">6-of-a-kind</div>
        <div className="col-r">3000 points</div>
      </div>
    </div>
  );
};

export default Scoring;
