import React from 'react';
import PropTypes from 'prop-types';

// Internationalization
import { withTranslation } from "react-i18next";

import './splash.css';

class Splash extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Test - DEFAULT!',
  };
  
  render = () => {
    return (
      <div>
            <h2>{this.props.t("main_header")}</h2>
            <p>
              {this.props.t("main_introduction")}
            </p>
            <p> {this.props.t("main_title", { title: this.props.title })}</p>
            <p>
              {this.props.t("main_render_with_mock")}
            </p>
            <ul>
              <li>
                {this.props.t("main_render_higher_level")}
              </li>
              <li>
                {this.props.t("main_render_assemble_data")}
              </li>
            </ul>
        </div>
    );
  }
};

const SplashHOC = withTranslation()(Splash);

export {
  SplashHOC as Splash,
}