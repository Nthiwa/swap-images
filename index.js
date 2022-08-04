var picPaths = ['https://www.karibuloo.co.ke/wp-content/uploads/2022/02/20191113-FB_IMG_15736396152431401-1-200x300.jpg',
                            'https://www.karibuloo.co.ke/wp-content/uploads/2017/03/Supporitng-Kids-300x200.jpg',
                            'pic3.jpg'];
            var curPic = -1;
            //preload the images for smooth animation
            var imgO = new Array();
            for(i=0; i < picPaths.length; i++) {
                imgO[i] = new Image();
                imgO[i].src = picPaths[i];
            }

            function swapImage() {
                curPic = (++curPic > picPaths.length-1)? 0 : curPic;
                imgCont.src = imgO[curPic].src;
                setTimeout(swapImage,5000);
            }

            window.onload=function() {
                imgCont = document.getElementById('imgBanner');
                swapImage();
            }