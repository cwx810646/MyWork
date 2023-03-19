export default {
    contentType: {
        json: {
            name: 'application/json',
            format(data) {
                return JSON.stringify(data);
            }
        },
        urlEncode: {
            name: 'application/x-www-form-urlencoded',
            format(data) {
                return data;
            }
        },
        formData: {
            name: 'multipart/form-data',
            format(data) {
                return data;
            }
        }
    }
};