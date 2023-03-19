package com.chenjie.dao.mapper;

import com.chenjie.dao.model.AppModel;
import com.chenjie.entity.param.AppParam;

import java.util.List;

/**
 * <功能描述>
 *
 * @author chenjie
 * @since 2023-03-19
 */
public interface AppMapper {
    List<AppModel> query(AppParam param);
}
