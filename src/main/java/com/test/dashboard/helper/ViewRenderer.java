package com.test.dashboard.helper;

import java.util.ArrayList;
import java.util.List;

import com.test.dashboard.domian.Role;
import com.test.dashboard.domian.RoleViews;

public class ViewRenderer {

	public static List<Role> prepareRole() {

		List<Role> roleList = new ArrayList<Role>();
		Role admin = new Role();
		admin.setRoleId(1L);
		admin.setRoleName("ADMIN");

		Role user = new Role();
		admin.setRoleId(2L);
		admin.setRoleName("USER");

		roleList.add(admin);
		roleList.add(user);

		return roleList;
	}
	
	
//	public static RoleViews prepareRoleViews(){
//		
//		
//	}

}
