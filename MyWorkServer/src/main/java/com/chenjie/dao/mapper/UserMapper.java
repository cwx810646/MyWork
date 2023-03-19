package com.chenjie.dao.mapper;

import com.chenjie.dao.model.User;

public interface UserMapper {
    public User queryUser(User user);
    public void createUser(User user);
}
