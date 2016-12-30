<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = "v-btn-group";

    export default{
        props: {
            size: {
                type: String,
                validator (value) {
                    return ["small","large"].indexOf(value) != -1;
                }
            },
            radius: {
                type: String,
                validator (value) {
                    return ["none","half"].indexOf(value) != -1;
                }
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-radius-${this.radius}`]: !!this.radius
                    }
                ]
            }
        }
    }
</script>
