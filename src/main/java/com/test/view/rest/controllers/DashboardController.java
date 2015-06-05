package com.test.view.rest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.test.dashboard.domian.Dashboard;
import com.test.dashboard.util.UserDetailsUtil;
import com.test.service.DashboardService;

@Controller
public class DashboardController {

	@Autowired
	private DashboardService dashboardService;

	@RequestMapping(value = "/mydashboard", method = RequestMethod.GET)
	public Dashboard getDashBoard() {

		return dashboardService
				.findByUserId(UserDetailsUtil.getLogedInUserName());
	}

}