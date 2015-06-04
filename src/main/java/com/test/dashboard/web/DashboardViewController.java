package com.test.dashboard.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.test.dashboard.domian.CHART_TYPE;
import com.test.dashboard.domian.View;
import com.test.dashboard.domian.ViewStyle;

@RestController
public class DashboardViewController {

	@RequestMapping(value = "/myviews", method = RequestMethod.GET)
	public List<View> findDashboardViews() {
		List<View> views = prepareViews();
		return views;

	}

	private List<View> prepareViews() {

		List<View> views = new ArrayList<View>();

		View view = new View();
		view.setViewId(1L);
		view.setViewName("Sample Pie Chart");
		view.setUniqueReportCode("TPC01");
		view.setRenderOrder(1);
		view.setViewType(CHART_TYPE.PIE);
		view.setStyles(preparePiechartStyles());
		

		View view1 = new View();
		view1.setViewId(2L);
		view1.setViewName("Sample Bar Chart");
		view1.setUniqueReportCode("TBC01");
		view1.setRenderOrder(1);
		view1.setViewType(CHART_TYPE.BAR);
		view1.setStyles(prepareBarchartStyles());
		
		
		views.add(view);
		views.add(view1);

		return views;
	}
	
	
private List<ViewStyle> preparePiechartStyles() {
		
		List<ViewStyle>  styles = new ArrayList<ViewStyle>();
		ViewStyle style = new ViewStyle();
		style.setStyleId(1L);
		style.setAttrName("style");
		style.setAttrValue("display:inline;padding-left:25px");
		styles.add(style);
		return styles;
	}
	
private List<ViewStyle> prepareBarchartStyles() {
		
		List<ViewStyle>  styles = new ArrayList<ViewStyle>();
		ViewStyle style = new ViewStyle();
		style.setStyleId(1L);
		style.setAttrName("style");
		style.setAttrValue("display:inline;padding-left:100px");
		styles.add(style);
		return styles;
	}
	

}
