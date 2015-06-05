package com.test.service;

import org.springframework.stereotype.Service;

import com.test.dashboard.domian.Dashboard;
import com.test.dashboard.helper.DashboardData;

@Service
public class DashboardServiceImpl implements DashboardService {

	@Override
	public Dashboard findByUserId(String userId) {

		return DashboardData.prepareDashBoard();
	}

	@Override
	public Dashboard findByRole(String roleName) {

		return DashboardData.prepareDashBoard();
	}

}
