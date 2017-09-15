var inp = document.getElementById('inp');
var pwd = document.getElementById('pwd');
var qpwd = document.getElementById('qpwd');
var phone = document.getElementById('phone');
var inpYzm = document.getElementById('inpYzm');
var yzm = document.getElementById('yzm');
var phoneYzm = document.getElementById('phoneYzm');
var btn = document.getElementById('btn');
//------------------------------------------------------------------>
//onfocus
inp.onfocus = function(){
	inp.placeholder = '';
	inp.style.color = 'black';
}
pwd.onfocus = function(){
	pwd.placeholder = '';
	pwd.style.color = 'black';
}
qpwd.onfocus = function(){
	qpwd.placeholder = '';
	qpwd.style.color = 'black';
}
phone.onfocus = function(){
	phone.placeholder = '';
	phone.style.color = 'black';
}
inpYzm.onfocus = function(){
	inpYzm.placeholder = '';
	inpYzm.style.color = 'black';
}
phoneYzm.onfocus = function(){
	phoneYzm.placeholder = '';
	phoneYzm.style.color = 'black';
}
//------------------------------------------------------------>
//verify(校验)
var pat = /^[a-zA-Z]\w{6,15}/;
var pat1 = /^1\d{10}/;
btn.onclick = function(){
	if (inp.value == '') {
		alert('用户名不能为空！')
		return
	}

	if (pat.test(pwd.value) || pwd.value != '') {
		if (pwd.value != qpwd.value) {
			alert('密码必须一致')
			return
		}
	} else{
		alert('密码输入错误或不能为空')
		return
	}
	if (phone.value != '') {
		if (!pat1.test(phone.value)) {
			alert('号码输入错误！')
			return
		}
	} else{
		alert('手机号不能为空！')
		return
	}
	if (inpYzm.value != '') {
		if (inpYzm.value != yzm.innerHTML) {
			alert('验证码错误！')
			return
		}
	} else{
		alert('验证码不能为空！')
		return
	}
	self.location = 'login.html'
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
//yzm
var yzm = document.getElementById('yzm');
var res = '';
var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
for(var i = 1; i <= 4; i++){
	var a = parseInt(Math.random()*arr.length-1);
	res += arr[a];
}
yzm.innerHTML = res;
yzm.onclick = function(){
	var res = '';
	var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
	for(var i = 1; i <= 4; i++){
		var a = parseInt(Math.random()*arr.length-1);
		res += arr[a];
	}
	yzm.innerHTML = res;
}