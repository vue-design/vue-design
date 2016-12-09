/**
 * Created by denghm on 2016/9/14.
 */
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import vueComponents from "./components/common";
import vuePrototype from "./prototype/vuePrototype";
import jzy from "./views/index.vue";
import Routers from "./router";
import Env from "./config/env";
import style from "./style/index.css"

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(vuePrototype);
Vue.use(vueComponents);

// 开启debug模式
Vue.config.debug = true;

//开发和生产环境接口配置
if(Env == "production"){
    window.BaseUrl = "";
}else if(Env == "development"){
    window.BaseUrl = "http://rmis.ideasoft.net.cn:7073";
}

// 路由配置
let router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
    history: Env != "production",
    Routers
});

const app = new Vue({
    render: (h) => h(jzy),
    router
}).$mount("#stage");


router.beforeEach(() => {
    //window.scrollTo(0, 0);
});

router.afterEach(() => {

});