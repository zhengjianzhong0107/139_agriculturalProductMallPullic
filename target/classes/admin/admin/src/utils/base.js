const base = {
    get() {
        return {
            url : "http://localhost:8080/agriculturalproductmall/",
            name: "agriculturalproductmall",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/agriculturalproductmall/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "农产品销售系统"
        } 
    }
}
export default base
