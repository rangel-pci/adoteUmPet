<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adopotion extends Model
{
    use HasFactory;
    
    protected $table = 'adoption';

    protected $fillable = ['email', 'value', 'pet_id'];

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}