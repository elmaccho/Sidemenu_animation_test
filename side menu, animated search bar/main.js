
        //side menu
        $('.menu-btn').click(function(){
            $( ".menu-btn" ).css( "transform", "rotate(180deg)" );
            $('.side_menu').removeClass("hide");
            $('.side_menu').addClass("show");
            $('.side_menu').addClass("show_menu");
         });

         $('.close-btn').click(function(){
            $('.side_menu').addClass("hide");
            $( ".menu-btn" ).css( "transform", "rotate(0deg)" );
            setTimeout(function(){
                $('.side_menu').removeClass("show");
                $('.side_menu').removeClass("show_menu");
            },900);
         });

            //zamkniecie po kliknieciu poza menu

        $(document).on("click", function (event) {
        if ($(event.target).closest(".menu-btn, .side_menu" ).length === 0) {
            console.log('eee');
            $('.side_menu').addClass("hide");
            $( ".menu-btn" ).css( "transform", "rotate(0deg)" );
            setTimeout(function(){
                $('.side_menu').removeClass("show");
                $('.side_menu').removeClass("show_menu");
            },900);
        }
        });

         //search bar
         $('.search-text').click(function(){
            $('.search-text').addClass("text-fade");
            $('.search-text').removeClass("text-animation");
            setTimeout(function(){
                $('.search-text').addClass("hidee");

                $(".search-box").css("display","flex");



            },1000);
         });