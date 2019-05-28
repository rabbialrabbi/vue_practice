


let app = new Vue({
   el:'#root',
    data:{
        tasks:[
            {task:'Buy a Table', Completed:true},
            {task:'Buy a PC', Completed:false},
            {task:'Buy a Keyboard', Completed:true},
            {task:'Buy a SSD', Completed:false},
            {task:'Buy a Mobile', Completed:false},
        ]
    },
    methods:{
       action(){
           this.classChange = true
       }
    },
    computed:{
       completeList(){
          return this.tasks.filter(task =>  task.Completed);
          // return this.tasks.filter(function (task) {
          //     return ! task.Completed;
          // })

       },
        incompleteList(){
            return this.tasks.filter(task => ! task.Completed);
        }
    }

   });

