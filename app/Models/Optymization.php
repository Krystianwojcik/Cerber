<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Optymization extends Model
{
    protected $table = 'optymizations';
    use HasFactory;
    protected $hidden = array('created_at', 'updated_at');
    protected $fillable = [
        'quarte_id', 'short_url', 'attribute_id', 'value'
    ];
    public function OptymizationAttribute()
    {
        return $this->hasOne(OptymizationsAttributes::class, 'id', 'attribute_id');
    }
}
