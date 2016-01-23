var api_key = 'f417bd1dfda811597b5c71a5b08536943d927648';
var crimes = [];
var found = false;
console.log(window.neighborhood);
$.getJSON('https://api.everyblock.com/content/philly/locations/bella-vista/timeline/.json?schema=crime&token=' + api_key, function (events) {
    $.each(events.results, function (j, event_val) {
        found = false;
        for (var i = 0; i < crimes.length; i++) {
            if (crimes[i].title === event_val.title) {
                crimes[i].number++;
                found = true;
                break;
            }
        }
        if (found === false) {
            crimes.push({title: event_val.title, number: 1});
        }
    });

    crimes.sort(function (a, b) {
        if (a.number < b.number) {
            return 1;
        }
        if (a.number > b.number) {
            return -1;
        }
        return 0;
    });
    
    crimes.forEach(function (entry) {
        var $event = $('<li>');
        $event.text(entry.title);
        $('.event_list').append($event);
    });
});

$('#events').click(function () {
    $("ul").toggle();
});