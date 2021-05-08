import React from 'react';
import PropTypes from 'prop-types';

// Internationalization
import i18next from '../../util/il8n';
import './splash.css';

class Splash extends React.PureComponent {
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
            <h2>{i18next.t("main_header")}</h2>
            <p>
              {i18next.t("main_introduction")}
            </p>
            <p> {i18next.t("main_title", { title: this.props.title })}</p>
            <p>
              {i18next.t("main_render_with_mock")}
            </p>
            <ul>
              <li>
                {i18next.t("main_render_higher_level")}
              </li>
              <li>
                {i18next.t("main_render_assemble_data")}
              </li>
            </ul>
        </div>
    );
  }
};

export {
  Splash,
}