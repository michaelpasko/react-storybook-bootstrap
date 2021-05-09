import React from 'react';
import PropTypes from 'prop-types';

// Internationalization
import i18next from '../../util/il8n';
import './profile.css';

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: PropTypes.string,
    t: PropTypes.func,
  };

  static defaultProps = {
    title: 'Test - DEFAULT!',
    t: i18next.t,
  };
  
  render = () => {
    return (
      <div>
        <h2>{this.props.t("profile_intro")}</h2>
        <div></div>
      </div>
    );
  }
};

export {
  Profile,
}