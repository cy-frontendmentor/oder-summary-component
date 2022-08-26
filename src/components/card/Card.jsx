import classes from './Card.module.scss';
import { ReactComponent as HeroImage } from '../../assets/illustration-hero.svg';
import { ReactComponent as MusicIcon } from '../../assets/icon-music.svg';

import React from 'react';
import Button from '../button/Button';

const Card = () => {
  return (
    <div className={classes.card}>
      {/* <HeroImage className={classes['card__heroImage']}></HeroImage> */}
      <div className={classes['card__heroImage']}></div>
      <div className={classes['card__info']}>
        <div>
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className={classes['card__info-plan']}>
            <div className={classes['card__info-plan-details']}>
              <MusicIcon
                className={classes['card__info-plan-details-icon']}
              ></MusicIcon>
              <div className={classes['card__info-plan-details-titles']}>
                <h2>Annual Plan</h2>
                <span>$59.99/year</span>
              </div>
            </div>
            <button className={classes['card__info-plan-btn']}>Change</button>
          </div>
        </div>
        <Button>Proceed to Payment</Button>
        <button className={classes['card__cancel']}>Cancel Order</button>
      </div>
    </div>
  );
};

export default Card;
