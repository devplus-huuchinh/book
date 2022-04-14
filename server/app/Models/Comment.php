<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'content',
        'bookId',
        'userId'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'userId', 'id');
    }
    public function book()
    {
        return $this->belongsTo(User::class, 'bookId', 'id');
    }
}
