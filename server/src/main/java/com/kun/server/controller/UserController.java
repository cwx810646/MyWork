package com.kun.server.controller;

import com.kun.server.dao.model.User;
import com.kun.server.entity.Result;
import com.kun.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("login")
    public Result<Object> login(@RequestBody  User user){
        boolean result = userService.login(user);
        return Result.ok(result);
    }

    @RequestMapping("registry")
    public Result<Object> registry(@RequestBody User user){
        userService.registry(user);
        return Result.ok();
    }

    @RequestMapping("accountCheck/{account}")
    public Result<Object> accountCheck(@PathVariable("account") String account){
        boolean result = userService.accountCheck(account);
        return Result.ok(result);
    }
}
