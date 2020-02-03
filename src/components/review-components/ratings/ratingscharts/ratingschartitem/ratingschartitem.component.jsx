import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import './ratingschartitem-styles.scss';

const RatingsChartItem = ({
  getFilterValue, value, totalReviews, ratingVal,
}) => {
  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten('#a5a5a5', 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#a5a5a5',
    },
  })(LinearProgress);

  return (
    <div className="ratingschart-container">
      <Grid container>
        <Grid item xs={3}>
          <button
            className="chart-button"
            type="button"
            onClick={getFilterValue}
            value={ratingVal}
          >
            {ratingVal}
            {' '}
            stars
          </button>
        </Grid>
        <Grid item xs={9}>
          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={(value / totalReviews) * 100}
            valueBuffer={100}
          />
        </Grid>
      </Grid>
    </div>
  );
};


export default RatingsChartItem;

RatingsChartItem.propTypes = {
  getFilterValue: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
  totalReviews: propTypes.number.isRequired,
  ratingVal: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
};