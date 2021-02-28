<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $table = 'clients';
    use HasFactory;
    protected $hidden = array('created_at', 'updated_at');
    protected $fillable = [
        'domain', 'ssl', 'www', 'active'
    ];
    public function optymizationsQuarters()
    {
        return $this->hasMany(OptymizationsQuarters::class);
    }
    public function optymalizations()
    {
        return $this->hasMany(Optymization::class);
    }
}
