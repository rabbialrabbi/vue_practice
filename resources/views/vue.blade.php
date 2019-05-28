<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="">
    <title>Document</title>
</head>
<body>

<div id="root">
    <input type="text" id='input' v-model= "message">

    <p>This is the Message: {{ message }}</p>
</div>


<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>

<script>

    new Vue ({
        el: '#root',
        data:{
            message: "Hello World"
        }

    })
</script>

</body>
</html>