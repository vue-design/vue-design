<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            span: [Number, String],
            offset: [Number, String],
            className: String
        },
        computed: {
            classes: [

            ]
        }
    }
</script>