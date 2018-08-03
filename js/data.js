		
		//拿百度的数据
		var  oSearchContent = document.getElementById('inp');
		 var  oSearchList = document.getElementById("data_list");  
        oSearchContent.oninput = oSearchContent.onpropertychange = function () {
            var sVal = this.value;
            oSearchList.innerHTML = '';
            if(sVal !== '') {
                var oScript = document.createElement('script');
                oScript.src = 'https://suggest.taobao.com/sug?code=utf-8&q=' + sVal + '&_ksTS=1515120676355_323&callback=callback&area=c2c&bucketid=15'; 
                document.body.appendChild(oScript);
            };
        };


        // 声明回调函数
        function callback(data) {
            data.result.forEach((v) => {
                var oLi = document.createElement('li');
                oLi.style.width = "416px";
                oLi.style.lineHeight = "30px";
                oLi.style.paddingLeft = "10px";
                oLi.style.fontSize = "12px";
                oLi.style.color = "#434A4B";
                oLi.style.cursor = "pointer";
                oLi.innerHTML = v[0];
                oSearchList.appendChild(oLi);
            });
        }