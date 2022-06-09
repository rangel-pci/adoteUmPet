<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdoptionRequest;
use App\Http\Resources\AdoptionCollection;
use App\Models\Adopotion;
use App\Rules\AdoptionPetUnique;
use Error;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class AdoptionController extends Controller
{
    public function index()
    {
        $adoptions = new AdoptionCollection(Adopotion::with('pet')->get());
        return response()->json($adoptions);
    }

    public function store(AdoptionRequest $request)
    {
        $data = $request->all();

        $bool = Adopotion::where('email', $data['email'])
                ->where('pet_id', $request['pet_id'])
                ->first();

        if($bool){
            return response()->json(['message' => 'Você já adotou este pet.', 'errors' => ['email' => 'Você já adotou este pet.']], 422);    
        }
        
        $adoption = Adopotion::create($data);
        return $adoption ? response()->json($adoption,201) : response()->json(null, 500);
    }
}
