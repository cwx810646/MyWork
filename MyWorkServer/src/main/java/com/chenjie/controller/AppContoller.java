package com.chenjie.controller;

import com.chenjie.entity.Result;
import com.chenjie.entity.param.AppParam;
import com.chenjie.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <功能描述>
 *
 * @author chenjie
 * @since 2023-03-15
 */
@RestController
@RequestMapping("app")
public class AppContoller {
    @Autowired
    private AppService appService;

    @RequestMapping("query")
    public Result query(@RequestBody AppParam param){
        return Result.ok(appService.query(param));
    }

    @RequestMapping("querySingle")
    public Result querySingle(@RequestBody AppParam param){
        return Result.ok(appService.querySingle(param));
    }
}
