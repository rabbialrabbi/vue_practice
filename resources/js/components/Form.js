import Errors from './Error';

class Form{

    constructor(data){

        this.originalData = data;

        for(let field in data){
            this[field] = data[field];
        }

        this.error = new Errors()
    }

    data(){
        let data = {};

        for( let field in this.originalData){
            data[field]= this[field];
        }

        return data;
    }

    post(url){
        return this.onSubmit('post',url)
    }

    patch(url){
        return this.onSubmit('patch',url)
    }

    put(url){
        return this.onSubmit('put',url)
    }

    delete(url){
        return this.onSubmit('delete',url)
    }

    onSubmit(type,path){
        // console.log(this.data());

        return new Promise((resolve, reject)=>{
            axios[type](path, this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data.errors);

                    reject(error.response.data.errors)
                });
        });

        // .catch(error => console.log(error.response.data.errors));
    }

    reset(){
        for( let field in this.originalData ){
            this[field] = '';
        }
        this.error.clear();
    }

    onSuccess(response){
        alert(response.message);

        this.reset();
    }

    onFail(error){
        // console.log(error.response.data.errors);
        this.error.record(error);
    }
}

export default Form ;