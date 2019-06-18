import Vue from 'vue';

Vue.component('cupon',{

    template: `
    <input type="text" name="" :value ="input" @input="onType($event.target.value)">
    `,
    data(){
        return{
            invalid:['allfree','premium'],
            input: '',
        }
    },

    methods:{
        onType(value){
            if(this.invalid.includes(value) ){
                alert('Operation Successfull');
                this.input = '';
                this.$emit('input', this.input);
                return;
            }
            this.input = value ;
            this.$emit('input', this.input);

        }
    }


});


var app = new Vue({
    el:'#app',
    data:{
        input: ''
    },
    methods: {
        update(data){
            this.input = data
        }
    }
});