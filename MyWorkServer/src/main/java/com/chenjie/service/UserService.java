package com.chenjie.service;

import com.chenjie.dao.model.User;

public interface UserService {
    public boolean login(User user);
    public boolean registry(User user);
    public boolean accountCheck(String user);
}
