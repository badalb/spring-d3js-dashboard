package com.test.dashboard.domian;

import java.util.List;

public class ChartData {

	public String reportCode;

	private List<Data> chartData;

	public String getReportCode() {
		return reportCode;
	}

	public void setReportCode(String reportCode) {
		this.reportCode = reportCode;
	}

	public List<Data> getChartData() {
		return chartData;
	}

	public void setChartData(List<Data> chartData) {
		this.chartData = chartData;
	}

}
