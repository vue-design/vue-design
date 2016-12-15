/**
 * Created by ty on 2016/10/30.
 */
import {vCol,vRow} from "./layout";
import vIcon from "./icon";
import { vButton, vButtonGroup }from "./button";

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