$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    } else {
       return results[1] || 0;
    }
}

$(document).ready(function() {
    var location = decodeURIComponent($.urlParam('location'))
    var dateFrom = decodeURIComponent($.urlParam('date-from'))
    var dateTo = decodeURIComponent($.urlParam('date-to'))

    $('#location-from').text(location);  
    $('#location-to').text(location);  
    $('#date-from').text(dateFrom);  
    $('#date-to').text(dateTo); 
});
