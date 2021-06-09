$(document).ready(function() {
    if (!config.startVisible)
        $('.main_container').hide();

    function updateProgressBar(selector, value) {
        $(selector).css("width", value + "%");
        $(selector + ' .progress_text').text(value);
    }

    function numberWithSpaces(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
    }

    let lastcash = 0;

    function flashCash() {
        $('div.cash').show();
        setTimeout(() => {
            $('div.cash').hide();
        }, config.flashCashTime);
    }

    $('div.cash').hide();

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
        switch (data.type) {
            case "spawn":
            case "update":
                updateProgressBar('#health .progress', data.stats.health);
                updateProgressBar('#armor .progress', data.stats.armor);
                updateProgressBar('#hunger .progress', data.stats.hunger);
                updateProgressBar('#thirst .progress', data.stats.thirst);
                updateProgressBar('#stress .progress', data.stats.stress);
                if (lastcash != data.stats.cash) {
                    flashCash();
                }
                lastcash = data.stats.cash;
                $('#cash').text(numberWithSpaces(data.stats.cash));
                break;
            case "show":
                flashCash();
                $('.main_container').show();
                break
            case "cash":
                flashCash();
                break
            default:
                break;
        }
    })
})