<?php

 class sum{
    public $num1=10;
    public $num2=20;

    public function sums(){
        return $this->num1 + $this->num2;
    }
 }
 
 $try = new sum();

 echo $try->sums() ;


?>