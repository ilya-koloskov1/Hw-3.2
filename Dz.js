var a = prompt('Как тебя зовут?','Илья'); 
var b = prompt('Какого ты года рождения?');
b=2019-b
var c ="";
  if (b%10==1 && b%100!=11){
      c="год";
  }else if (b%10>1 && b%10<5 && b%100!=12 && b%100!=13 && b%100!=14){
      c=" года";
  }else
    c="лет";

alert(a+","+b+c);
