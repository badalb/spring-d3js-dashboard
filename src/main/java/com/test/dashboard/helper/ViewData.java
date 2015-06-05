package com.test.dashboard.helper;

import java.util.ArrayList;
import java.util.List;

import com.test.dashboard.domian.CHART_TYPE;
import com.test.dashboard.domian.View;
import com.test.dashboard.domian.ViewStyle;

public class ViewData {

	public static View preparePieChartView() {
		View view = new View();
		view.setViewId(1L);
		view.setViewName("Sample Pie Chart");
		view.setUniqueReportCode("TPC01");
		view.setRenderOrder(1);
		view.setViewType(CHART_TYPE.PIE);
		view.setStyles(preparePiechartStyles());
		return view;

	}

	public static View prepareBarChartView() {
		View view = new View();
		view.setViewId(2L);
		view.setViewName("Sample Bar Chart");
		view.setUniqueReportCode("TBC01");
		view.setRenderOrder(1);
		view.setViewType(CHART_TYPE.BAR);
		view.setStyles(prepareBarchartStyles());
		return view;
	}

	private static List<ViewStyle> preparePiechartStyles() {

		List<ViewStyle> styles = new ArrayList<ViewStyle>();
		ViewStyle style = new ViewStyle();
		style.setStyleId(1L);
		style.setAttrName("style");
		style.setAttrValue("display:inline;padding-left:25px");
		styles.add(style);
		return styles;
	}

	private static List<ViewStyle> prepareBarchartStyles() {

		List<ViewStyle> styles = new ArrayList<ViewStyle>();
		ViewStyle style = new ViewStyle();
		style.setStyleId(1L);
		style.setAttrName("style");
		style.setAttrValue("display:inline;padding-left:100px");
		styles.add(style);
		return styles;
	}

}
