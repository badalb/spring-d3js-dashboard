package com.test.dashboard.util;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;

public class UserDetailsUtil {

	public static String getLogedInUserName() {
		User user = (User) SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();
		return user.getUsername();
	}

}
