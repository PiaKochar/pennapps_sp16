var api_key = 'f417bd1dfda811597b5c71a5b08536943d927648';
$.getJSON('https://api.everyblock.com/content/philly/locations/bella-vista/timeline/.json?schema=crime&token=' + api_key, function (events) {
    $.each(events.results, function (j, event_val) {
        var $event = $('<li>');
        $event.text(event_val.location_name);
        $('.event_list').append($event);
    });
});

$('#events').click(function () {
    $("ul").toggle();
});