import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
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
});
class Article extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    article: PropTypes.shape({}),
  };

  static defaultProps = {
    article: {
      title: 'Testing Title',
      body: 'Details'
    },
  };

  render = () => {
    const { classes } = this.props;
    const {title = 'No Title' , body = 'No Data'} = this.props.article;
    return (
      <div className="buttonGroup">
      <>
        <Typography variant="h5" className={classes.title}>{title}</Typography><br />
        <Typography className={classes.title}>{body}</Typography>
      </>
      </div>
    );
  };
};

const ArticleHOC = withStyles(styles)(Article);

export {
  ArticleHOC as Article
}
