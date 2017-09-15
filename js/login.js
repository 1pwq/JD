var inp = document.getElementById('inp');
var pwd = document.getElementById('pwd');
inp.onfocus = function(){
	inp.placeholder = '';
	inp.value = '';
	inp.style.color = 'black';
}
pwd.onfocus = function(){
	pwd.placeholder = '';
	pwd.value = '';
	pwd.style.color = 'black';
}
//---------------------------------------------------------->
//校验
var btn = document.getElementById('btn');
var pat = /^[a-zA-Z_]\w{5,18}$ || ^1\d{10}$ || ^\d{5,15}@qq.com$ || ^[A-Za-z]@qq.com$/;
var pat1 = /^[a-zA-Z]\w{6,18}$/;
btn.onclick = function(){
	if (inp.value != '') {
		if (!pat.test(inp.value)) {
			alert('用户名输入错误！')
			return
		}
	} else{
		alert('用户名不能为空！')
		return
	}
	if (pwd.value != '') {
		if (!pat1.test(pwd.value)) {
			alert('密码输入错误！')
			return
		}
	} else{
		alert('密码不能为空！')
		return
	}
	self.location = 'index.html';
}