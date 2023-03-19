import { ElNotification } from 'element-plus';
const notification = {
    success(message, title){
        ElNotification({
            title: title ? title : '温馨提示',
            message,
            type: 'success'
        });
    },
    warning(message, title){
        ElNotification({
            title: title ? title : '温馨提示',
            message,
            type: 'warning'
        });
    },
    info(message, title){
        ElNotification({
            title: title ? title : '温馨提示',
            message,
            type: 'info'
        });
    },
    error(message, title){
        ElNotification({
            title: title ? title : '温馨提示',
            messsage: message ? message : '请求失败，请联系管理员',
            type: 'error'
        });
    }
};
export default notification;