<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientsOptymization extends Model
{
    protected $table = 'clients_optymizations';
    use HasFactory;
    protected $fillable = [
        'client_id', 'optymization_id'
    ];
}
