$(document).ready(function() {
    window.addEventListener('message', function(event) {
        var data = event.data;
		if(data.type == "spawn"){
			$('#health').text(data.stats.health);
			$('#armor').text(data.stats.armor);
			$('#cash').text(data.stats.cash);
			$('#bank').text(data.stats.bank);
		}
    })
})