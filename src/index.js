/**
 * Created by ty on 2016/10/30.
 */
import {vCol,vRow} from "./components/layout";
import vIcon from "./components/icon";
import { vButton, vButtonGroup }from "./components/button";

const vueComponents = {
    vCol,
    vRow,
    vIcon,
    vButton,
    vButtonGroup
};

module.exports = {
    install (Vue,opts = {}) {
        Object.keys(vueComponents).forEach((name) => {
            Vue.component(name,vueComponents[name]);
        })
    }
};