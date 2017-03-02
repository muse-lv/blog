(function(){
	var input = document.getElementById('search-text'),
			btn = document.getElementById('search-btn'),
			list = document.getElementById('list'),
			items = list.getElementsByTagName('li'),
			value = "",	
			datas = ["1","12","123","1234","12345","123456","1234567","12345678","123456789","23456789",
							"3456789","456789","56789","6789","789","89","9"],
			//点击搜索结果的事件
			handle = function(event){
					if(event.target.nodeName === "LI"){
						input.value = event.target.innerHTML;
						alert(event.target.innerHTML);	
						list.style.display = "none";			
					}
					event.stopPropagation();
			};
	//input键盘输入事件
	input.onkeyup = function(){
		var html = "";
		value = input.value;
		length = value.length;
		datas.forEach(function(data,index){
			if(value === data.substr(0,length) && length > 0) {
				html += '<li>'+ datas[index]+'</li>';
				list.style.display = "block";
			}
		});		
		list.innerHTML = html;
		list.addEventListener("click",handle,false);
	};
	//搜索按钮点击事件
	btn.onclick = function(){
		alert(input.value);
	};
	//搜索结果消隐
	document.onclick = function(){
		list.style.display = "none";
	};
})();