import React, { Component } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class HighChart extends Component {
	render() {
		return (
			<div>
				<HighchartsReact highcharts={Highcharts} options={this.props.options} />
			</div>
		);
	}
}

export default HighChart;
