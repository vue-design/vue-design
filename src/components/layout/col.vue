<template>
    <div :class="classes" :id="id">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = "v";
    export default{
        props: {
            span: Number,
            offset: Number,
            id: String,
            className: String
        },
        computed: {
            classes (){
                return {
                    [`${prefixCls}-col-${this.span}`]: !!this.span,
                    [`${prefixCls}-offset-${this.offset}`]: !!this.offset,
                    [`${this.className}`]: !!this.className
                }
            }
        }
    }
</script>
