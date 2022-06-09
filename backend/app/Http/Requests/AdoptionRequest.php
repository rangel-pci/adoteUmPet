<?php

namespace App\Http\Requests;

use App\Rules\AdoptionPetUnique;
use Illuminate\Foundation\Http\FormRequest;

class AdoptionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => ['required', 'email'],
            'value' => ['required', 'numeric', 'between:10,100'],
            'pet_id' => ['required', 'int', 'exists:pet,id'],
        ];
    }
}
