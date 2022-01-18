package com.kun.server.service.impl;

import com.kun.server.dao.mapper.UserMapper;
import com.kun.server.dao.model.User;
import com.kun.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public boolean login(User user) {
        User userQuery = userMapper.queryUser(user);
        if(userQuery != null) return true;
        return false;
    }

    @Override
    public boolean registry(User user) {
        userMapper.createUser(user);
        return false;
    }

    @Override
    public boolean accountCheck(String account) {
        User userQuery = userMapper.queryUser(new User(account));
        if(userQuery != null) return false;
        return true;
    }
}
