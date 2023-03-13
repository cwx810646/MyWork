package com.kun.server.dao.model;

import com.sun.org.apache.xpath.internal.objects.XString;
import lombok.Data;

@Data
public class User {
    private String id;
    private String account;
    private String password;
    private String createTime;
    private String updateTime;

    public User(){};
    public User(String account){this.account = account;}
}
