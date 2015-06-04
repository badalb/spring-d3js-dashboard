package com.test.dashboard.domian;

import java.util.List;

public class Dashboard {

	private Long dashboardId;
	
	private String dashboardName;
	
	private List<DashboardAttribute> attributes;

	public Long getDashboardId() {
		return dashboardId;
	}

	public void setDashboardId(Long dashboardId) {
		this.dashboardId = dashboardId;
	}

	public String getDashboardName() {
		return dashboardName;
	}

	public void setDashboardName(String dashboardName) {
		this.dashboardName = dashboardName;
	}

	public List<DashboardAttribute> getAttributes() {
		return attributes;
	}

	public void setAttributes(List<DashboardAttribute> attributes) {
		this.attributes = attributes;
	}
		
}
