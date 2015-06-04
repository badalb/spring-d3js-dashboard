package com.test.dashboard.domian;

import java.util.List;

public class View {

	private Long viewId;

	private String viewName;
	
	private String uniqueReportCode;

	private CHART_TYPE viewType;

	private Integer renderOrder;

	private List<ViewStyle> styles;
	
	
	
	public Long getViewId() {
		return viewId;
	}

	public void setViewId(Long viewId) {
		this.viewId = viewId;
	}

	public String getViewName() {
		return viewName;
	}

	public void setViewName(String viewName) {
		this.viewName = viewName;
	}

	public CHART_TYPE getViewType() {
		return viewType;
	}

	public void setViewType(CHART_TYPE viewType) {
		this.viewType = viewType;
	}

	public Integer getRenderOrder() {
		return renderOrder;
	}

	public void setRenderOrder(Integer renderOrder) {
		this.renderOrder = renderOrder;
	}

	public List<ViewStyle> getStyles() {
		return styles;
	}

	public void setStyles(List<ViewStyle> styles) {
		this.styles = styles;
	}

	public String getUniqueReportCode() {
		return uniqueReportCode;
	}

	public void setUniqueReportCode(String uniqueReportCode) {
		this.uniqueReportCode = uniqueReportCode;
	}
	
	
}
