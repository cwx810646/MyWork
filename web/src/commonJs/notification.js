import { ElNotification } from 'element-plus';
const notification = {
    success(message, title){
        ElNotification({
            title: title ? title : '成功',
            message,
            type: 'success',
        })
    },
    warning(message, title){
        ElNotification({
            title: title ? title : '警告',
            message,
            type: 'warning',
        })
    },
    info(message, title){
        ElNotification({
            title: title ? title : '通知',
            message,
            type: 'info',
        })
    },
    error(message, title){
        ElNotification({
            title: title ? title : '错误',
            message,
            type: 'error',
        })
    }
};
export default notification;