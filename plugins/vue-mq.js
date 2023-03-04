import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq,{
    breakpoints:{
        xs: 480,
        sm: 768,
        md: 992,
        lg: Infinity
    },
    defaultBreakpoint: "sm"
});