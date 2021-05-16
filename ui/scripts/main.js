$(document).ready(function() {
    function updateProgressBar(selector, value) {
        $(selector).css("width", value + "%");
        $(selector + ' .progress_text').text(value);
    }

    if (!config.healthText)
        $('#health .progress_text').hide();
    if (!config.armorText)
        $('#armor .progress_text').hide();
    if (!config.thirstText)
        $('#thirst .progress_text').hide();
    if (!config.hungerText)
        $('#hunger .progress_text').hide();
    if (!config.stressText)
        $('#stress .progress_text').hide();

    window.addEventListener('message', function(event) {
        var data = event.data;
        if (data.type == "spawn" || data.type == "update") {
            updateProgressBar('#health .progress', data.stats.health);
            updateProgressBar('#armor .progress', data.stats.armor);
            updateProgressBar('#hunger .progress', data.stats.hunger);
            updateProgressBar('#thirst .progress', data.stats.thirst);
            updateProgressBar('#stress .progress', data.stats.stress);
            $('#cash').text(data.stats.cash);
            $('#bank').text(data.stats.bank);
        }
    })
})