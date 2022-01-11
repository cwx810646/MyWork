package com.kun.server.controller;

import com.kun.server.entity.Result;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @RequestMapping("hello")
    public Result<String> hello(){
        return Result.ok("hello world!");
    }
}
