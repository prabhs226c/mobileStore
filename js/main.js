        var count = $('.carousel-container > img').length;
        var time = parseInt(count)*6;
        var css=".carousel-container > img{      animation:slide "+ time+"s infinite ;   }";
       var j=1;
        var i;
        for( i = 0; j < count;i=Math.round(i+(100/parseInt(count))))
        {
            if(i==0)
            {
                css+="@keyframes slide{ 0%{left:0%;} ";
            }else{
                css  += i+"%{ left: -"+(parseInt(j-1)*100+"%;}");
            }
            j++;
        
        }
        css +="100%{left:0%;}}";
     
       $('style').html(css);