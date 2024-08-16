export const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1520,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 965,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 670,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
}