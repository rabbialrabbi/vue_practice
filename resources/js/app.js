import Vue from 'vue';
Vue.component('coupon', {
    props: ['value'],

    template: `
        <input type="text"
               :value="value"
               @input="updateCode($event.target.value)"
               ref="input">
    `,

    methods: {
        updateCode(code) {
            if(code === 'google'){
                alert('Find the number');

                this.$refs.input = code= ' ' ; //Only code='' also possible
            }

            this.$emit('input', code);
        }
    }
});


new Vue({
    el: '#app',

    data: {
        coupon: 'FREEBIE' // Maybe from DB or querystring.
    }
});