package com.test.service;

import java.util.List;

import com.test.dashboard.domian.View;

public interface ViewService {

	public List<View> findViewsByRole(String roleName);
	
	public List<View> findViewsByUserId(String userId);
	
}
