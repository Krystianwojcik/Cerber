<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OptymizationsQuarters extends Model
{
    protected $table = 'optymizations_quarters';
    use HasFactory;

    public function optymizations()
    {
        return $this->hasMany(Optymization::class);
    }
}
