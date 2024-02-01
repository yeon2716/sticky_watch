let scrollBody=document.querySelector('.fix_motion'),
    scrollHeight,//스크롤의 높이
    sectionOffsetTop,
    sectionSrollTop,
    scrollRealHeight,//실제로 스크롤해야할 높이
    winScrollTop, //스크롤바의 높이를 담을 변수
    scrollPercent,//스크롤 백분률
    percent;

    let isMobile;

    function scrollFuc(){
        setProperty();
        if(isMobile){
            contentInMobile()
        }else{
            contentIn();
        }
        
    }

    function setProperty(){
        isMobile=window.innerWidth<=1024?true:false;
        scrollHeight=scrollBody.offsetHeight;//.fix-motion의 높이값
        sectionOffsetTop=scrollBody.offsetTop;//.fix-motion의 문서전체로 부터의 top값
        scrollRealHeight=scrollHeight - window.innerHeight;
        winScrollTop=pageYOffset;
        sectionSrollTop=winScrollTop - sectionOffsetTop;
        //console.log(sectionSrollTop)
        scrollPercent=sectionSrollTop/scrollRealHeight;
        percent=scrollPercent * 100
        console.log(percent)


    }
    function contentIn(){
      let deviceImg=document.querySelectorAll('.slide figure');
      let imgWidth=deviceImg[0].offsetWidth;//이미지 하나의 넓이값

      if(percent>=12 && percent<37){
        document.querySelector('.text_box .text01').classList.add('active');
        imageChange(imgWidth*0)
      }
      if(percent>=37 && percent<62){
        document.querySelector('.text_box .text02').classList.add('active');
        imageChange(imgWidth*1)
      }
      if(percent>=62 && percent<88){
        document.querySelector('.text_box .text03').classList.add('active');
        imageChange(imgWidth*2)
      }
      if(percent>=88){
        document.querySelector('.text_box .text04').classList.add('active');
        imageChange(imgWidth*3)
      }
      if(percent<12){
        document.querySelector('.text_box .text01').classList.remove('active');
        document.querySelector('.text_box .text02').classList.remove('active');
        document.querySelector('.text_box .text03').classList.remove('active');
        document.querySelector('.text_box .text04').classList.remove('active');
      }

    }

    function contentInMobile(){
        let deviceImg=document.querySelectorAll('.slide figure');
        let imgWidth=deviceImg[0].offsetWidth;//이미지 하나의 넓이값
       

        if(percent>=12 && percent < 37){
            document.querySelector('.text_box p.text01').classList.add('active')
            document.querySelector('.text_box p.text02').classList.remove('active')
            document.querySelector('.text_box p.text03').classList.remove('active')
            document.querySelector('.text_box p.text04').classList.remove('active')
            imageChange(imgWidth*0)
        }
        if(percent>=37 && percent < 62){
            document.querySelector('.text_box p.text02').classList.add('active')
            document.querySelector('.text_box p.text01').classList.remove('active')
            document.querySelector('.text_box p.text03').classList.remove('active')
            document.querySelector('.text_box p.text04').classList.remove('active')
            imageChange(imgWidth*1)
        }

        if(percent>=62 && percent < 88){
            document.querySelector('.text_box p.text03').classList.add('active')
            document.querySelector('.text_box p.text01').classList.remove('active')
            document.querySelector('.text_box p.text02').classList.remove('active')
            document.querySelector('.text_box p.text04').classList.remove('active')

            imageChange(imgWidth*2)
        }
        if(percent>=88){
            document.querySelector('.text_box p.text04').classList.add('active')
            document.querySelector('.text_box p.text01').classList.remove('active')
            document.querySelector('.text_box p.text02').classList.remove('active')
            document.querySelector('.text_box p.text03').classList.remove('active')

            imageChange(imgWidth*3)
        }

        if(percent<12){
            document.querySelector('.text_box p.text01').classList.remove('active')
            document.querySelector('.text_box p.text02').classList.remove('active')
            document.querySelector('.text_box p.text03').classList.remove('active')
            document.querySelector('.text_box p.text04').classList.remove('active')
        }

    }


  function imageChange(moveX){
    let img=document.querySelector('.slide_wrap .slide');
    img.style.transform=`translateX(${-moveX}px)`;
  }













    window.addEventListener("scroll",function(){
        scrollFuc()
    })
    scrollFuc()
