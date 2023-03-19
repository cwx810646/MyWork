package com.chenjie.service.impl;

import com.chenjie.dao.mapper.AppMapper;
import com.chenjie.dao.model.AppModel;
import com.chenjie.entity.param.AppParam;
import com.chenjie.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;

/**
 * <功能描述>
 *
 * @author chenjie
 * @since 2023-03-19
 */
@Service
public class AppServiceImpl implements AppService {
    @Autowired
    private AppMapper appMapper;


    @Override
    public List<AppModel> query(AppParam param) {
        return appMapper.query(param);
    }

    @Override
    public AppModel querySingle(AppParam param) {
        List<AppModel> apps = query(param);
        AppModel app = null;
        if (!CollectionUtils.isEmpty(apps)){
            app = apps.get(0);
        }
        return app;
    }
}
