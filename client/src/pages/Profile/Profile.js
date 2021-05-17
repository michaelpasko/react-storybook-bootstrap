import React from 'react';
import PropTypes from 'prop-types';

// Internationalization
import { withTranslation } from "react-i18next";
import './profile.css';
import { Table } from '../../components/Table/Table';

class Profile extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'User Profile:',
  };
  
  render = () => {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>{this.props.t("profile_intro")}</div>
        <Table />
      </div>
    );
  }
};

const ProfileHOC = withTranslation()(Profile);
export {
  ProfileHOC as Profile,
}