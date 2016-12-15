<template>
    <i :class="classes" :style="style"></i>
</template>

<script>
    const prefixCls = "v-icon";
    export default{
        props: {
            type: String,
            size: [String, Number]
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `icon-${this.type}`
                ]
            },
            style () {
                if(!!this.size){
                    return {
                        fontSize: `${this.size}px`
                    }
                }else {
                    return {};
                }
            }
        }
    }
</script>