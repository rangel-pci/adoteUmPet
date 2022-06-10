<?php

namespace App\Http\Controllers;

use App\Http\Requests\PetRequest;
use App\Http\Resources\PetCollection;
use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Exception\NotReadableException;
use Intervention\Image\Facades\Image;

class PetController extends Controller
{
    public function index()
    {
        $pets = new PetCollection(Pet::orderBy('id', 'desc')->get());
        return response()->json($pets);
    }

    public function store(PetRequest $request)
    {
        /**
         * Se a imagem tiver até 685KB de tamanho deixa passar, já que base64 aumenta o tamanho da imagem em cerca de 33%, 
         * após a conversão para jpg o tamanho diminui um pouco
         */
        $data = $request->all();
        $fSize = strlen(base64_decode($data['image']))/1000;
        
        if($fSize > 685){
            return response()->json(['message' => 'Insira uma imagem com tamanho máximo de 512KB.', 'errors' => ['image' => 'Insira uma imagem com tamanho máximo de 512KB.']], 409);
        }

        $img = Image::make($data['image']);
        $imgName = md5(uniqid()).rand(1, 99).'.jpg';
        $path = storage_path('app/public/').$imgName;
        $img->save($path, 90);

        $data['image'] = $imgName;

        $pet = Pet::create($data);
        if($pet){$pet->image = asset('storage/'.$pet->image);}
        return $pet ? response()->json($pet,201) : response()->json(null, 500);
    }
}
