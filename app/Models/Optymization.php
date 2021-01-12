<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Optymization extends Model
{
    protected $table = 'optymizations';
    use HasFactory;

    public function OptymizationAttribute()
    {
        return $this->hasOne(OptymizationsAttributes::class);
    }
}