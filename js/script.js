/*function hello(){
	alert('hyi')
}*/

/*function vasiliy(){
	var admin;
	var name = 'vasya';
	admin = name;
	alert(admin);
}*/

/*function zmina(){
	var planetName = 'земля';
	var visitorName = 'Петя';
}*/

/*var lol = prompt('what is you name?','');
alert('you name is '+lol+'!');*/

var value = prompt('Кто пришёл?', '');

  if ( value == 'Админ' ) {

    var pass = prompt('Пароль?', '');

    if ( pass == 'Чёрный Властелин' ) {
      alert('Добро пожаловать!');
    } else if ( value == null ) { 
      alert('Вход отменён');}      
    else {
      alert('Пароль неверен');
    }

  } else if ( value == null ) { 
    
    alert('Вход отменён');

  } else {

    alert('Я вас не знаю');

  }