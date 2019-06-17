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

    <div>
        <h1>Project Details:</h1>
        <ul>
            @foreach($project as $p)
            <li>{{$p->name}}</li>
            @endforeach
        </ul>
    </div>

    <form action="/project" method="post" @submit.prevent="onSubmit" @keydown="form.error.clear($event.target.name)">
        @csrf
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name"  name="name" v-model="form.name" >
            <span  class="text-danger" v-if="form.error.has('name')">@{{ form.error.get('name') }}</span>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description" name="description" v-model="form.description">
            <span class="text-danger " v-if="form.error.has('description')">@{{ form.error.get('description') }}</span>

        </div>

        <button type="submit" class="btn btn-primary" :disabled="form.error.any()">Submit</button>
    </form>
</div>


<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="{{asset('js/app.js')}}"> </script>

</body>
</html>

