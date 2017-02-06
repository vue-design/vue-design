<template>
    <label>
        <v-icon type="nocheckbox"></v-icon>
        <input type="checkbox" @change="" />
        <span></span>
    </label>
</template>
<script>
    import vIcon from "../icon/index";
    export default{
        props: {
            label: "",
            value: {},
            trueValue: true,
            falseValue: false,
            disabled: {
                type: Boolean,
                default: false
            },
            checked: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            vIcon
        }
    }
</script>
