$(document).ready(function() {
    function updateProgressBar(selector, value){
        $(selector).css("width", value + "%");
        $(selector + ' .progress_text').text(value);
    }
    
    window.addEventListener('message', function(event) {
        var data = event.data;
		if(data.type == "spawn" || data.type == "update"){
            updateProgressBar('#health .progress', data.stats.health);
            updateProgressBar('#armor .progress', data.stats.armor);
            $('#cash').text(data.stats.cash);
            $('#bank').text(data.stats.bank);
		}
    })
})