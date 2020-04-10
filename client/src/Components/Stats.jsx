/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable quote-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import $ from 'jquery';

const Stats = ({ neighborhood, house }) => {
  let incDecWordPast;
  let incDecArrowPast;
  let incDecPast = 'incDec';

  if (house.value_past === 0) {
    incDecWordPast = 'changed';
  } else if (house.value_past > 0) {
    incDecWordPast = 'risen';
    incDecArrowPast = '↑';
    incDecPast = 'inc';
  } else {
    incDecWordPast = 'fallen';
    incDecArrowPast = '↓';
    incDecPast = 'dec';
  }

  let incDecWordFuture;
  let incDecArrowFuture;
  let incDecFuture = 'incDec';
  const mathAbs = Math.abs(house.value_future);

  if (house.value_future === 0) {
    incDecWordFuture = 'remain the same';
  } else if (house.value_future > 0) {
    incDecWordFuture = 'increase';
    incDecArrowFuture = '↑';
    incDecFuture = 'inc';
  } else {
    incDecWordFuture = 'decrease';
    incDecArrowFuture = '↓';
    incDecFuture = 'dec';
  }

  let percentDiff;
  let incDecMedian = 'incDec';
  let incDecArrowMedian;
  let higherLower;

  if (house.home_cost > house.median_value) {
    const diff = house.home_cost - house.median_value;
    percentDiff = ((diff / house.median_value) * 100).toFixed(1);
    incDecMedian = 'inc';
    incDecArrowMedian = '↑';
    higherLower = 'higher';
  } else {
    const diff = house.median_value - house.home_cost;
    percentDiff = Math.abs(((diff / house.home_cost) * 100).toFixed(1));
    incDecMedian = 'dec';
    incDecArrowMedian = '↓';
    higherLower = 'lower';
  }

  const onClickModal = () => {
    $('.medianToolTip').css({
      'display': 'block',
    });
    $('.walkToolTip').css({
      'display': 'none',
    });
    $('.transitToolTip').css({
      'display': 'none',
    });
  };

  const onClickX = () => {
    $('.medianToolTip').css({
      'display': 'none',
    });
  };

  return (
    <div>
      <h3>Neighborhood Stats</h3>
      <ul className="statsList">
        <div className="statslistItem">
          <li>
            <span className="homeValues">Home values</span>
            <span> in {house.hood_name} have </span>
            <span className={incDecPast}>{incDecWordPast}</span>
            <span className={incDecPast}> {Math.abs(house.value_past)}%</span>
            <span className={house.value_past ? incDecPast : 'hidden'}> ({incDecArrowPast})</span>
            <span> over the past 12 months.</span>
          </li>
        </div>
        <div className="statslistItem">
          <li>
            <span>Abode predicts the home values in</span>
            <span> {house.hood_name} will</span>
            <span className={incDecFuture}> {incDecWordFuture}</span>
            <span className={house.value_future ? incDecFuture : 'hidden'}> {mathAbs}%</span>
            <span className={house.value_future ? incDecFuture : 'hidden'}> ({incDecArrowFuture})</span>
            <span> in the next year.</span>
          </li>
        </div>
        <div className="statslistItem">
          <li>
            <span>This home is valued </span>
            <span className={incDecMedian}> {percentDiff}%</span>
            <span className={incDecMedian}> {higherLower} ({incDecArrowMedian})</span>
            <span> than the median home in</span>
            <span> {house.hood_name}.</span>
          </li>
        </div>
        <div className="statslistItem">
          <div className="medianToolTip">
            <div className="xButton" onClick={onClickX}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg></div>
            <div className="medianToolTipArrow"><svg width="22" height="22" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path id="shape 21" d="M12 .001l12 12-12 12-12-12 12-12z" /></svg></div>
            <div className="innerTextBox"><span className="toolTipText">The median Abodestimate<sup>®</sup> valuation for a given geographic area on a given day is the <span className="toolTipText bold">Abode Home Value Index.</span></span><span className="learnMore"> Learn more</span></div>
          </div>
          <li>
            <span>The </span>
            <span className="abodestimate" onClick={onClickModal}>median Abodestimate</span>
            <span><sup>®</sup></span>
            <span> for this neighborhood is</span>
            <span> ${Number(house.median_value).toLocaleString()}.</span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Stats;
