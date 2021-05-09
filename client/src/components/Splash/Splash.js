import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from "react-i18next";

// Internationalization
import i18next from '../../util/il8n';
import './splash.css';

class SplashComponent extends React.PureComponent {
  constructor(props) {
    super(props);
  }

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

const Splash = withTranslation()(SplashComponent);

export {
  Splash,
}