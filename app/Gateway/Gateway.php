<?php

namespace App\Gateway;

use App\Repository\Repository;

class Gateway {

    public function __construct(Repository $R )
    {
        $this->R = $R;
    }

    /**
     * @return Repository
     */
    public function test()
    {
        echo $this->R->test();
        return "Gateway dziala";
    }
}

