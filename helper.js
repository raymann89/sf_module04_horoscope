prophecies_url = "http://sf-pyw.mosyag.in/m04/api/forecasts"
advice_url = "https://api.adviceslip.com/advice"

//$("#main-paragraph").click(function() {
//
//    $.getJSON(advice_url, function(data) {
//        advice = data["slip"]["advice"]
//        set_secret_message(advice)
//    });
//});
//
//function set_secret_message(msg) {
//    p=$("#first-paragraph");
//    p.html(msg)
//    p.css("color", "red")
//}

$("#main-paragraph").click(function() {

    $.getJSON(prophecies_url, function(data) {
        paragraphs = data["prophecies"]
        set_content_in_divs(paragraphs)
    })
});

function set_content_in_divs(paragraphs) {
    $.each(paragraphs, function(i, d) {
        p = $("#p-" + i)
        p.html("<p>" + d + "</p>")
    })
};