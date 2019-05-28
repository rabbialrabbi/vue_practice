
Vue.component('message',{

    props:['title', 'body'],

    template: `<article class="message bulma">
            <div class="message-header">
                <p>{{title}}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article>`,

    data(){
        return{
            tasks:[
                {task: 'Buy a Computer', completer: false},
                {task: 'Buy a Mouse', completer: true},
                {task: 'Buy a Keyboard', completer: true},
                {task: 'Buy a Table', completer: true},
                {task: 'Buy a Chair', completer: false},
            ]
        }
    }
});

Vue.component('task',{

    template: '<li><slot></slot></li>',
});


let app = new Vue({
   el:'#root'

   });

