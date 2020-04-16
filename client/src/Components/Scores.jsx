/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable quote-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import $ from 'jquery';

const Scores = ({ neighborhood }) => {
  let walkScore;
  let transitScore;

  if (neighborhood.walk_score >= 70 && neighborhood.walk_score <= 89) {
    walkScore = '(Very Walkable)';
  } else {
    walkScore = '(Walker\'s Paradise)';
  }

  if (neighborhood.transit_score >= 70 && neighborhood.transit_score <= 89) {
    transitScore = '(Excellent Transit)';
  } else {
    transitScore = '(Rider\'s Paradise)';
  }

  const onClickTransitModal = () => {
    $('.transitToolTip').css({
      'display': 'block',
    });
    $('.walkToolTip').css({
      'display': 'none',
    });
    $('.medianToolTip').css({
      'display': 'none',
    });
  };

  const onClickTransitX = () => {
    $('.transitToolTip').css({
      'display': 'none',
    });
  };

  const onClickWalkModal = () => {
    $('.walkToolTip').css({
      'display': 'block',
    });
    $('.transitToolTip').css({
      'display': 'none',
    });
    $('.medianToolTip').css({
      'display': 'none',
    });
  };

  const onClickWalkX = () => {
    $('.walkToolTip').css({
      'display': 'none',
    });
  };

  return (
    <div id="scoresContainer">
      <div className="scoreItem">
        <div className="scoreImageContainer"><img src="https://sdcneighborhood.s3-us-west-1.amazonaws.com/person.png" alt="person" className="personImage" /></div>
        <span className="scoreText" onClick={onClickWalkModal}>Walk Score</span>
        <span><sup>®</sup>: </span>
        <span className="score"> {neighborhood.walk_score}</span>
        <span className="scoreGrade"> {walkScore}</span>
      </div>
      <div className="scoreItem">
        <div className="scoreImageContainer"><img src="https://sdcneighborhood.s3-us-west-1.amazonaws.com/car.png" alt="car" className="carImage" /></div>
        <span className="scoreText" onClick={onClickTransitModal}>Transit Score</span>
        <span><sup>™</sup>: </span>
        <span className="score"> {neighborhood.transit_score}</span>
        <span className="scoreGrade"> {transitScore}</span>
      </div>
      <div className="transitToolTip">
        <div className="xButton" onClick={onClickTransitX}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg></div>
        <div className="transitToolTipArrow"><svg width="22" height="22" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path id="shape 21" d="M12 .001l12 12-12 12-12-12 12-12z" /></svg></div>
        <div className="innerTextBox"><span className="toolTipText">WHAT IS A TRANSIT SCORE?</span>
          <div className="transitScoreTip"><span className="toolTipText">Transit Score measures how well a location is served by public transportation.</span></div>
          <div className="transitScoreTip">
            <span className="learnMore">Learn how it works</span><br />
            <span className="learnMore">See detailed Transit Score rating</span>
          </div>
        </div>
      </div>
      <div className="walkToolTip">
        <div className="xButton" onClick={onClickWalkX}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg></div>
        <div className="transitToolTipArrow"><svg width="22" height="22" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path id="shape 21" d="M12 .001l12 12-12 12-12-12 12-12z" /></svg></div>
        <div className="innerTextBox"><span className="toolTipText">WHAT IS A WALK SCORE?</span>
          <div className="transitScoreTip"><span className="toolTipText">Walk Score measures how walkable an address is based on the distance to nearby amenities.</span></div>
          <div className="transitScoreTip">
            <span className="learnMore">Learn how it works</span><br />
            <span className="learnMore">See detailed Walk Score rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scores;
