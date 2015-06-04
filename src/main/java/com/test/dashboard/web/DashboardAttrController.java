package com.test.dashboard.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.test.dashboard.domian.Dashboard;
import com.test.dashboard.domian.DashboardAttribute;

@RestController
public class DashboardAttrController {
	
	@RequestMapping(value="/dashboardattr", method=RequestMethod.GET)
	public Dashboard getDashBoard(){
		Dashboard dashBoard = new Dashboard();
		dashBoard.setDashboardId(1L);
		dashBoard.setDashboardName("My Dashboard");
		dashBoard.setAttributes(prepareDashboardAttributes());
		
		return dashBoard;
	}
	
	private List<DashboardAttribute> prepareDashboardAttributes(){
		
		List<DashboardAttribute> attributes = new ArrayList<DashboardAttribute>();
	
		DashboardAttribute attribute = new DashboardAttribute();
		attribute.setAttributeId(1L);
		attribute.setAttributeName("cssStyle");
		attribute.setAttributeValue("");
		
		attributes.add(attribute);
		
		return attributes;
		
	}
	
	

}
