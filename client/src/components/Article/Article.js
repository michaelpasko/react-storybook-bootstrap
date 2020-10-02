import React from 'react';
import PropTypes from 'prop-types';

import './article.css';

export const Article = ({ article }) => (
  <header>
    <div className="wrapper">
      <h2>{article.title}</h2>
      <div>
        {article.body}
      </div>
    </div>
  </header>
);

Article.propTypes = {
  article: PropTypes.shape({}),
};

Article.defaultProps = {
  article: {
    title: 'Testing Title',
    body: 'Details'
  },
};
