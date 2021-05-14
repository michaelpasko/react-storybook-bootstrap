import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Internationalization
import { withTranslation } from "react-i18next";
import './chart.css';

// https://github.com/recharts/recharts
// https://recharts.org/en-US/examples
/**
 * Charting utilizes Recharts, MIT license
 */
class Chart extends React.PureComponent {

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
    data: [],
  };
  
  render = () => {
    const { data  } = this.props;

    // make sure the wrapper height/width accomodates the LineChart
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
};

const ChartHOC = withTranslation()(Chart);
export {
  ChartHOC as Chart,
}