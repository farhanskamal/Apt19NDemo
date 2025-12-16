$(function () {
    var name;

    // Start button click
    $("#startBtn").click(function () {
        name = String(prompt("What is your name Player?"));
        $("#startContainer").fadeOut();
        $("#warning").fadeIn();
        $("#warningI").text(`Hey ${name} this game involves themes of loneliness`);
    });

    // Continue button click
    $("#cS1").click(function () {
        $("#warning").fadeOut(function () {
            $("#cutscene").fadeIn();
            setTimeout(function () {
                $("#cutscene").fadeOut(function () {
                    $("#livingRoom").fadeIn();
                });
            }, 14000); // 4 seconds for cutscene
        });
    });

    // Title click
    $("#title").click(function () {
        $(this).hide();
    });

    /* --- New Sequence Logic --- */

    // Left button in Living Room -> Go to Outside Bedroom
    $("#leftNavBtn").click(function () {
        $("#livingRoom").fadeOut(function () {
            $("#outsideBedroom").fadeIn();
        });
    });

    // Click Door Hotspot -> Enter Bedroom Cutscene -> Bedroom
    $("#doorHotspot").click(function () {
        $("#outsideBedroom").fadeOut(function () {
            $("#cutsceneBedroom").fadeIn();
            setTimeout(function () {
                $("#cutsceneBedroom").fadeOut(function () {
                    $("#bedroom").fadeIn();
                });
            }, 2000); // Adjust duration for GoingintoBedroom.gif
        });
    });

    // Click Bed Hotspot -> Get In Bed Cutscene -> Ceiling sequence
    $("#bedHotspot").click(function () {
        $("#bedroom").fadeOut(function () {
            $("#cutsceneBed").fadeIn();
            setTimeout(function () {
                $("#cutsceneBed").fadeOut(function () {
                    $("#ceiling").fadeIn(function () {
                        // Ceiling sequence
                        setTimeout(function () {
                            $("#finaleText").fadeIn();
                            setTimeout(function () {
                                // Fade out ceiling (revealing black background) and show 'To be Continued'
                                $("#ceiling").fadeOut(2000, function () {
                                    $("#toBeContinued").fadeIn();
                                });
                            }, 3000); // Read text for 3 seconds
                        }, 1000); // Wait 1 second before showing text
                    });
                });
            }, 1000); // Adjust duration for GetInBedAnimation.gif
        });
    });
});