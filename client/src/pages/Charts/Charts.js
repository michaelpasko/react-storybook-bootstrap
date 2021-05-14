import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from '../../components/Chart/Chart'

// Internationalization
import { withTranslation } from "react-i18next";
import './charts.css';


const initData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
class Charts extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
    };
  }

  static propTypes = {
    data: PropTypes.array,
  };

  static defaultProps = {
    data: initData,
  };
  
  render = () => {
    const { data  } = this.props;

    // make sure the wrapper height/width accomodates the LineChart
    return (
      <div className="wrapper">
        <Chart data={data} />
      </div>
    );
  }
};

const ChartsHOC = withTranslation()(Charts);
export {
  ChartsHOC as Charts,
}