<template>
    <div id="app" class="container">
        <ul>
            <li v-for="skill in skills">{{ skill }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'app',
        data(){
          return{
              skills: [],
              other: 'None'
          }
        },
        mounted() {
            axios.get('/skills').then(response => this.skills = response.data)
        }
    }
</script>
