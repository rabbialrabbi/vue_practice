<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <title>Document</title>
</head>
<body>

<div id="app" class="container mt-5">
    <form action="" method="post" @submit.prevent="onSubmit" @keydown="error.clear($event.target.name)">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name"  name="name" v-model="name">
            <span v-if="error.has('name')">@{{ error.get('name') }}</span>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description" name="description" v-model="description">
            <span v-if="error.has('description')">@{{ error.get('description') }}</span>

        </div>

        <button type="submit" class="btn btn-primary" :disabled="error.any()">Submit</button>
    </form>
</div>


<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="js/app.js"> </script>

</body>
</html>