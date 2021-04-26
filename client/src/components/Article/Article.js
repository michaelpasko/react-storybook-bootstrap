import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonGroup: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Article = ({ article, ...props }) => {
  const classes = useStyles();
  const {title = 'No Title' , body = 'No Data'} = article;
  return (
    <div className="buttonGroup">
    <>
      <Typography variant="h5" className={classes.title}>{title}</Typography><br />
      <Typography className={classes.title}>{body}</Typography>
    </>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.shape({}),
};

Article.defaultProps = {
  article: {
    title: 'Testing Title',
    body: 'Details'
  },
};
