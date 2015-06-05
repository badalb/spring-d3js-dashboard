package com.test.service;

import com.test.dashboard.domian.Dashboard;

public interface DashboardService {

	public Dashboard findByUserId(String userId);

	public Dashboard findByRole(String roleName);

}
