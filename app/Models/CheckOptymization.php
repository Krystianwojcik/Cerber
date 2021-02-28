<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CheckOptymization extends Model
{
    protected $table = 'check_optymization';
    use HasFactory;
    protected $fillable = [
        'optymization_id', 'correct', 'value'
    ];
    public $timestamps = false;
}
