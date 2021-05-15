RegisterNetEvent('mrp:spawn')
AddEventHandler('mrp:spawn', function(characterToUse, spawnIdx)
	if  characterToUse ~= nil then
		SendNUIMessage({
			type = 'spawn',
			stats = characterToUse.stats
		})
	end
end)