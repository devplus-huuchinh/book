<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'author',
        'type',
        'content',
        'shareByUserId'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'shareByUserId', 'id');
    }
    public function rate()
    {
        return $this->hasMany(Rate::class);
    }
    public function comment()
    {
        return $this->hasMany(Comment::class);
    }
}
