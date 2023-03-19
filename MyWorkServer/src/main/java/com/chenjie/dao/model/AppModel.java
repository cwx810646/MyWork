package com.chenjie.dao.model;

import lombok.Data;

/**
 * <功能描述>
 *
 * @author chenjie
 * @since 2023-03-19
 */
@Data
public class AppModel {
    private Integer id;

    private String name;

    private String title;

    private String url;

    private String createName;

    private String createTime;

    private Integer enable;
}
