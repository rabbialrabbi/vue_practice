<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('vue');
});

Route::get('/skills', function (){
    return ['JS','PHP','SQL'];
});

//Route::get('/project/create', 'ProjectController@create');
//
//Route::post('/project/store', 'ProjectController@store');

