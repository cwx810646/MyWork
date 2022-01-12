package com.kun.server.controller;

import com.kun.server.entity.Result;
import com.kun.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("login")
    public Result<Object> login(){
        boolean result = userService.login();
        return Result.ok(result);
    }

    @RequestMapping("registry")
    public Result<Object> registry(){
        return Result.ok();
    }
}
