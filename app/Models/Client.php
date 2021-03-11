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

    public function raport()
    {
        return $this->hasManyThrough(
            CheckOptymization::class,
            ClientsRaports::class,
            'client_id',
            'id',
            'id',
            'check_id',
        );
    }
    public function clientHasRaport()
    {
        return $this->hasMany(ClientsRaports::class, 'client_id', 'id');
    }
    public function optymalizations()
    {
        return $this->hasMany(Optymization::class);
    }
    public function staff()
    {
        return $this->hasMany(UserClient::class, 'client_id', 'id');
    }
}
