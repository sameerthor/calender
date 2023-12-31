<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Draft extends Model
{
    
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $connection="webapp";
    
    protected $casts = [
        'file' => 'array'
    ];
    protected $guarded=['id'];
    
    public function DraftData()
    {
        return $this->hasMany(DraftData::class);
    }
}
