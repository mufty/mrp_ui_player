Citizen.CreateThread(function()
    local minimap = RequestScaleformMovie("minimap")
    SetRadarBigmapEnabled(true, false)
    Wait(0)
    SetRadarBigmapEnabled(false, false)
    while true do
        Wait(0)
        BeginScaleformMovieMethod(minimap, "SETUP_HEALTH_ARMOUR")
        ScaleformMovieMethodAddParamInt(3)
        EndScaleformMovieMethod()
    end
end)

RegisterNetEvent('mrp:spawn')
AddEventHandler('mrp:spawn', function(characterToUse, spawnIdx)
    if characterToUse ~= nil then
    SendNUIMessage({
        type = 'spawn',
        stats = characterToUse.stats
    })
end
end)

RegisterNetEvent('mrp:updateCharacter')
AddEventHandler('mrp:updateCharacter', function(character)
    if character ~= nil then
        SendNUIMessage({
            type = 'update',
            stats = character.stats
        })
    end
end)

AddEventHandler('playerSpawned', function(spawnPoint)
    SendNUIMessage({
        type = 'show'
    })
end)