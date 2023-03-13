package com.kun.server.entity;

import lombok.Data;

@Data
public class Result<T> {
    public static Integer ERROR_CODE = 500;

    public static Integer SUCCESS_CODE = 200;

    private Integer code;

    private String message;

    private T data;

    private Result(){};

    public static<T> Result<T> ok(){
        return ok(null);
    }

    public static<T> Result<T> ok(T data){
        Result<T> result = new Result<T>();
        result.data = data;
        result.code = Result.SUCCESS_CODE;
        return result;
    }

    public static<T> Result<T> error(String message){
        Result<T> result = new Result<T>();
        result.message = message;
        result.code = Result.ERROR_CODE;
        return result;
    }
}
