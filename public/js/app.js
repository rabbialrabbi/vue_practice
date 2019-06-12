
class Errors{
    constructor(){
        this.errors= {};
    }

    get(field){
        if(this.errors[field]){
        return this.errors[field][0];
    }}

    record(error){
        this.errors = error;
    }
    has(field){
       return this.errors.hasOwnProperty(field);
    }
    any(){
        return Object.keys(this.errors).length > 0
    }

    clear(field){
        delete this.errors[field];
    }
}
new Vue({
   el:'#app',

    data:{
        name: '',
        description: '',
        error: new Errors(),
    },

    methods:{

      onSubmit(){
          axios.post('/project', {
              name: this.name,
              description: this.description,
          })
              .then(response => console.log(response))
              .catch(error => this.error.record(error.response.data.errors));
              // .catch(error => console.log(error.response.data.errors));
      }
    },

});