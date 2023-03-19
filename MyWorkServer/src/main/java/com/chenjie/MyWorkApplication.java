package com.chenjie;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan(basePackages = {"com.chenjie.dao.mapper"})
@SpringBootApplication
public class MyWorkApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyWorkApplication.class, args);
    }
}
