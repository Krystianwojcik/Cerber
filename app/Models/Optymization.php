<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Client;
use App\Models\ClientsOptymization;

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
    public function client()
    {

        return $this->hasOneThrough(
            Client::class,
            ClientsOptymization::class,
            'optymization_id',
            'id',
            'id',
            'client_id',
        );
    }
}
