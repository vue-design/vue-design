<template>
    <button :class="classes" :type="nativeType" :disabled="disabled">
        <v-icon v-if="loading" type="loading" class="v-rotateLeft"></v-icon>
        <v-icon v-if="icon" :type="icon"></v-icon>
        <slot></slot>
    </button>
</template>

<script>
    import vIcon from "../icon";
    const prefixCls = "v-btn";

    export default{
        props: {
            type: {
                type: String,
                default: "default",
                validator (value) {
                    return ["default","primary"].indexOf(value) != -1;
                }
            },
            sign: {
                type: String,
                validator (value) {
                    return ["success","warning","error","info"].indexOf(value) != -1;
                }
            },
            radius: {
                type: String,
                validator (value) {
                    return ["none","half","all"].indexOf(value) != -1;
                }
            },
            nativeType: {
                type: String,
                default: "button",
                validator (value) {
                    return ["button","submit","reset"].indexOf(value) != -1;
                }
            },
            block: Boolean,
            className: String,
            size: String,
            disabled: Boolean,
            icon: String,
            loading: Boolean
        },
        components: {
            vIcon
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-block`]: this.block,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.type}`]: !this.sign,
                        [`${prefixCls}-radius-${this.radius}`]: !!this.radius,
                        [`${prefixCls}-${this.type}-${this.sign}`]: !!this.sign,
                        [`${prefixCls}-loading`]: this.loading
                    }
                ]
            }
        }
    }
</script>
