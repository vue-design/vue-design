<template>
    <div :class="classes" :id="idName">
        <slot></slot>
    </div>
</template>

<script>

    const prefixCls = "v-row";
    export default{
        props: {
            idName: String,
            className: String
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${this.className}`]: !!this.className
                    }
                ]
            }
        }
    }
</script>
