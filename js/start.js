$(document).ready(function(){
//sub메뉴 열고 닫기
    
    $(".mLnb>a").click(function(){
        $(".mLnb>div").css({"right":"0"});
    });
    //슬라이드메뉴 닫기
    $(".m_close").click(function(){
        $(".mLnb>div").css({"right":"-100%"});
    });

//메뉴 스크롤 부드럽게 움직이기
    $(".goTop").css("cursor", "pointer").click(function(
        ){$('body, html').animate({scrollTop:0}, 500);

    });
//특정메뉴 부드럽게 스크롤
    $(".lnb>ul>li>a").click(function(event){ event.preventDefault(); $('html,body').animate({scrollTop:$(this.hash).offset().top-79}, 1000); });
    $(".mLnb>div>ul>li>a").click(function(event){ event.preventDefault(); $('html,body').animate({scrollTop:$(this.hash).offset().top-79}, 1000); $('.mLnb>ul').hide();});

    //날짜 자동변경
    var a = new Date();
    var todayYear = a.getFullYear();
    var todayMonth = a.getMonth();
    var todayDate = a.getDate();

    $("#today").prepend(todayYear + "-" + (todayMonth+1)+ "-"+todayDate);

    //펜션정보 클릭시 라이트박스 띄우기
    $("#cottage>.center>.cottageBox>ul>li").click(function(){

        $(".lightbox").hide();
        $(this).next(".lightbox").show();
    });
    //펜션정보 라이트박스내 닫기 클릭시 라이트박스 닫기
    $("#cottage .lightbox>p.closer").click(function(){
        $(this).parent(".lightbox").hide();
    });

 /*   $("#cottage>.center>ul>li").click(function(){
        $(".lightbox").hide();
        $(this).next(".lightbox").show();
    });
    //펜션정보 라이트박스내 닫기 클릭시 라이트박스 닫기
    $("#cottage .lightbox>p.closer").click(function(){
        $(this).parent(".lightbox").hide();
    });*/
    //주변여행지 그리드 넣기
    $(".aSection").masonry({
        itemSelector: ".aroundBox",
        rowheight: ".special", //세로로 맞출때
        percentPosition: true

        //rowheight = 가로로 맞출때
    })
});
