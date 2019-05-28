
Vue.component('task-list',{

    template: `<div>
                <task v-for="task in tasks">{{task.task}}</task>
                </div>`,

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

