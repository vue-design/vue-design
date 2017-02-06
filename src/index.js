/**
 * Created by ty on 2016/10/30.
 */
import Vue from "vue";
import { Col as vCol, Row as vRow } from "./components/layout";
import vIcon from "./components/icon";
import { Button as vButton, ButtonGroup as vButtonGroup } from "./components/button";
import { Checkbox as vCheckbox, CheckboxGroup as vCheckboxGroup } from "./components/checkbox";

const vueDesign = {
    vCol,
    vRow,
    vIcon,
    vButton,
    vButtonGroup,
    vCheckbox,
    vCheckboxGroup
};

const install = function (Vue, opts = {}) {
    Object.keys(vueDesign).forEach((name) => {
        Vue.component(name,vueDesign[name]);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(vueDesign, { install });