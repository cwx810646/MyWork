export default {
    http: {
        ok(result){
            return result.code === 200;
        },
        error(result){
            return result.code === 500;
        }
    }
};