package com.test.dashboard.helper;

import java.util.ArrayList;
import java.util.List;

import com.test.dashboard.domian.Dashboard;
import com.test.dashboard.domian.DashboardAttribute;
import com.test.dashboard.util.UserDetailsUtil;

public class DashboardData {

	public static Dashboard prepareDashBoard() {

		Dashboard dashBoard = new Dashboard();
		dashBoard.setDashboardId(1L);
		dashBoard.setDashboardName(UserDetailsUtil.getLogedInUserName() + " "
				+ "Dashboard");
		dashBoard.setAttributes(prepareDashboardAttributes());

		return dashBoard;
	}

	private static List<DashboardAttribute> prepareDashboardAttributes() {

		List<DashboardAttribute> attributes = new ArrayList<DashboardAttribute>();

		DashboardAttribute attribute = new DashboardAttribute();
		attribute.setAttributeId(1L);
		attribute.setAttributeName("cssStyle");
		attribute.setAttributeValue("");

		attributes.add(attribute);

		return attributes;

	}
}
