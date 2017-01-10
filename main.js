var result="";
function decrypt(num,str){
	var code = parseInt(num);
    var temp = [];
    	interpreter = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
			'H', 'I', 'J', 'K', 'L', 'M', 'N',
			'O', 'P', 'Q', 'R', 'S', 'T',
			'U', 'V', 'W', 'X', 'Y', 'Z'];

    if (!str) {
         return "Please input something";
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' '||str[i] === ','||str[i] === '.') {
            temp.push(str[i]);
            continue;
        }
        if(((str[i] >= 0) && (str[i] <= 9))||(str[i]>='a')&&(str[i]<='f')){
        	var res = parseInt(str[i],16)^num;
			temp.push(res);
        	continue;
		}
        temp.push(interpreter[(str.charCodeAt(i) - code - 65 + 26) % 26]);
    }
    var result = temp.join("");
    result = result.toLocaleLowerCase();
    return result;
}
function encrypt(num,str){
	var i = 0,en_arr = [];
			// 'a' code is 97；'A' code is 65
			for(i = 0; i < 26; i++ ){
				en_arr.push(String.fromCharCode(65 + i));
			}
			for(i = 0; i < num; i++){
				en_arr.push(en_arr.shift());
			}
			// 要加密的文本%%
	        var str = str;
	        var temp = [];
	        var match = /^[A-Za-z0-9\s,.]+$/;
	        if (str.match(match)) {
	            str = str.toLocaleUpperCase();
	            for (var i = 0; i < str.length; i++) {
	            	if(str[i] >= 0 && str[i] <= 9){
	            		var res = str[i]^num;
	         			temp.push(res.toString(16));
	                    continue;
	            	}
	                if (str[i] === ' '||str[i] === ','||str[i] === '.') {
	                    temp.push(str[i]);
	                    continue;
	                }
	                temp.push(en_arr[str.charCodeAt(i) - 65]);
	            }
	            return temp.join("");
            };
            return "Input not valid, English words or number only";
}
$(".encrypt").click(function(){
	var code = $(".num").val();
	var str = $(".str").val();
	result = encrypt(code,str);
	$(".show").text(result);
});
$(".decrypt").click(function(){
	//解密
	var code = $(".num").val();
	var str = $(".str").val();
	result = decrypt(code,str);
	$(".show").text(result);
});
setInterval(function() {
	var str = "Trans";
	var showstr = str.substring(0,parseInt(Math.random()*5,10));
    var now = (new Date()).toLocaleString();
    $('#showtime').text(now+"   "+showstr);
}, 1000);