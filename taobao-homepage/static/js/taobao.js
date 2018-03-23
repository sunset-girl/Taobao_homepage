 window.onload = function(){
            function scrolls(tar){
                var jd = document.getElementById(tar);
                var ol = jd.children[1];
                var ul = jd.children[0].children[0];
                var target = 0,leader = 0;
                var olList = ol.children;
                for(var i=0;i<olList.length;i++){
                    olList[i].index = i;
                    olList[i].onmouseover = function(){
                        for(var j=0;j<olList.length;j++){
                            olList[j].className = "";
                        }
                        this.className = "current";
                        target = -this.index *520;

                    }
                        setInterval(function(){
                        leader = leader + (target - leader)/10;
                        ul.style.left = leader + "px";
                        },100)
                }

            }
            scrolls("jd");
            function $(a){return document.getElementById(a);}
            $("boxhd").onmouseover = function(){
                $("arrhd").style.display = "block";
            }
            $("boxhd").onmouseout = function(){
                $("arrhd").style.display = "none";
            }
            var target = 0,leader = 0;
            $("lefthd").onclick = function(){
                target += 520;
            }
            $("righthd").onclick = function(){
                target -= 520;
            }
            setInterval(function(){
                if(target >= 0){
                    target = 0;
                }
                else if(target<=-2600){
                    target = -2600;
                }
                leader = leader + (target -leader)/10;
                $("imgshd").style.left = leader + "px";
            },30)
}