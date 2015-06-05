package com.test.dashboard.helper;

import java.util.ArrayList;
import java.util.List;

import com.test.dashboard.domian.ChartData;
import com.test.dashboard.domian.Data;

public class BarChartData {

	public static ChartData prepareBarData() {

		List<Data> dataList = new ArrayList<Data>();

		ChartData cdata = new ChartData();

		Data data = new Data();
		data.setItemLabel("Social Media");
		data.setItemValue(90L);

		Data data1 = new Data();
		data1.setItemLabel("Blogs");
		data1.setItemValue(30L);

		Data data2 = new Data();
		data2.setItemLabel("SMS");
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

}
