$(document).ready(function () {
    // Handling carousel indicator clicks (images on the left)
    $(".testimonial .tabs li").click(function () {
        // Get the index of the clicked tab
        var i = $(this).index();

        // Activate the corresponding tab
        $(".testimonial .tabs li").removeClass('active'); // Remove 'active' class from all tabs
        $(this).addClass('active'); // Add 'active' class to the clicked tab

        // Trigger the carousel to move to the respective slide
        $("#carouselExampleIndicators").carousel(i);
    });

    // Sync carousel indicators (dots at the bottom) with tabs
    $(".testimonial .indicators li").click(function () {
        // Get the index of the clicked indicator
        var i = $(this).index();

        // Activate the corresponding tab
        $(".testimonial .tabs li").removeClass('active'); // Remove 'active' class from all tabs
        $(".testimonial .tabs li").eq(i).addClass('active'); // Add 'active' class to the corresponding tab
    });

    // Add slide change event listener for the carousel
    $("#carouselExampleIndicators").on('slide.bs.carousel', function (e) {
        // Get the index of the next slide
        var nextIndex = $(e.relatedTarget).index();

        // Sync the tabs with the carousel slide
        $(".testimonial .tabs li").removeClass('active'); // Remove 'active' class from all tabs
        $(".testimonial .tabs li").eq(nextIndex).addClass('active'); // Add 'active' class to the corresponding tab
    });

    // Custom pagination numbers for Swiper (if used in another slider)
    $(".slider .swiper-pagination span").each(function (i) {
        $(this).text(i + 1).prepend("0");
    });
});
