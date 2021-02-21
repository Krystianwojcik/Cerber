<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OptymizationsAttributes extends Model
{
    protected $table = 'optymization_attributes';
    use HasFactory;
    protected $hidden = array('created_at', 'updated_at');
    protected $fillable = [
        'attribute'
    ];

}
