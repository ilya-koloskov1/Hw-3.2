var a = prompt('Как тебя зовут?','Илья'); 
var b = prompt('Какого ты года рождения?');
b=2019-b
var c ="";
  if (b % 10 >= 5 && b % 10 <= 20|| b % 10 == 0){
  	c=" лет";
  }else if (b <=4 && b >=2 ){
  	c=" года";
  }else if ( b % 10 <= 1){
  	c='год';
  }else
    c=" года";

alert(a+","+b+c)
