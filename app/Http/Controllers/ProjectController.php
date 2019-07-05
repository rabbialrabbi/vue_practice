<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\project;

class ProjectController extends Controller
{
    public function create(){

        $project = project::All();
        return view('vue', ['project'=>$project]);
    }

    public function store(){
        $this->validate(request(),[
            'name'=> 'required',
            'description'=> 'required'
        ]);

       project::create([
           'name' => request('name'),
           'description' =>request('description')
       ]);

       return ['message'=> 'Submit successful'];
    }
}
