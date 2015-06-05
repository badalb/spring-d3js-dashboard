package com.test.view.rest.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.test.dashboard.domian.ChartData;
import com.test.dashboard.domian.Data;

@RestController
public class ChartDataController {

	@RequestMapping(value = "/chartdata/{chartCode}", method = RequestMethod.GET)
	public ChartData getChartData(@PathVariable String chartCode) {
		// String chartCode = "TPC01";
		ChartData data = null;

		if (chartCode.equalsIgnoreCase("TPC01")) {
			data = prepareChartDataForPieChart();
		} else {

			data = prepareChartDataForBarChart();
		}

		data.setReportCode(chartCode);
		
		return data;
	}

	private ChartData prepareChartDataForPieChart() {

		List<Data> dataList = new ArrayList<Data>();

		ChartData cdata = new ChartData();

		Data data = new Data();
		data.setItemLabel("Social Media");
		data.setItemValue(90L);

		Data data1 = new Data();
		data1.setItemLabel("Blogs");
		data1.setItemValue(30L);

		Data data2 = new Data();
		data2.setItemLabel("Text Messaging");
		data2.setItemValue(50L);

		Data data3 = new Data();
		data3.setItemLabel("Email");
		data3.setItemValue(50L);
		
		Data data4 = new Data();
		data4.setItemLabel("Reference");
		data4.setItemValue(10L);

		dataList.add(data);
		dataList.add(data1);
		dataList.add(data2);
		dataList.add(data3);
		dataList.add(data4);
		
		cdata.setChartData(dataList);

		return cdata;
	}

	private ChartData prepareChartDataForBarChart() {

		List<Data> dataList = new ArrayList<Data>();

		ChartData cdata = new ChartData();

		Data data = new Data();
		data.setItemLabel("Social Media");
		data.setItemValue(90L);

		Data data1 = new Data();
		data1.setItemLabel("Blogs");
		data1.setItemValue(30L);

		Data data2 = new Data();
		data2.setItemLabel("Text Messaging");
		data2.setItemValue(50L);

		Data data3 = new Data();
		data3.setItemLabel("Email");
		data3.setItemValue(50L);
		Data data4 = new Data();
		data4.setItemLabel("Reference");
		data4.setItemValue(10L);
		
		Data data5 = new Data();
		data5.setItemLabel("ABC");
		data5.setItemValue(100L);

		dataList.add(data);
		dataList.add(data1);
		dataList.add(data2);
		dataList.add(data3);
		dataList.add(data4);
		dataList.add(data5);
		
		cdata.setChartData(dataList);

		return cdata;
	}

}
