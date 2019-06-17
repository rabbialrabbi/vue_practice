import Vue from 'vue';
import axios from 'axios';
import Form from './components/Form';

window.Form = Form;
window.axios = axios;




new Vue({
    el:'#app',

    data:{
        form : new Form({
            name : '',
            description : ''
        })
    },

    methods: {

        onSubmit() {
            this.form.onSubmit('post','/project')
                .then(resorse=>console.log(resorse.message))
                .catch(error =>console.log(error));
        }
    }
});
