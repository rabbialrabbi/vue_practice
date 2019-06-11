<template>
    <div>
        <h1>The counter is : {{count}}</h1>
        <p><button @click="count+=5">Click</button></p>
    </div>
</template>

<script>
    export default {
        name: "cube",
        data(){
            return{count:0}
        }
    }
</script>

<style scoped>

</style>