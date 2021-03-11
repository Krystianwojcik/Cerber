<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserClient extends Model
{
    protected $table = 'users_project';
    use HasFactory;
    protected $fillable = [
        'user_id', 'client_id'
    ];
}
