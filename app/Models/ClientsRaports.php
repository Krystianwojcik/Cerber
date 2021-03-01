<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientsRaports extends Model
{
    protected $table = 'clients_check';
    use HasFactory;
    protected $fillable = [
        'client_id', 'check_id'
    ];
    public $timestamps = false;

    public function raportInfo()
    {
        return $this->hasOne(CheckOptymization::class, 'id', 'check_id');
    }

    public function raport()
    {
        return $this->hasManyThrough(
            Optymization::class,
            CheckOptymization::class,
            'id',
            'id',
            'check_id',
            'optymization_id',
        );
    }
}
