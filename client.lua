RegisterNetEvent('mrp:spawn')
AddEventHandler('mrp:spawn', function(characterToUse, spawnIdx)
	if  characterToUse ~= nil then
		SendNUIMessage({
			type = 'spawn',
			stats = characterToUse.stats
		})
	end
end)

RegisterNetEvent('mrp:updateCharacter')
AddEventHandler('mrp:updateCharacter', function(character)
	if  character ~= nil then
		SendNUIMessage({
			type = 'update',
			stats = character.stats
		})
	end
end)