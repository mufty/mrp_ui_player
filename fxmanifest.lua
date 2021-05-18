fx_version 'cerulean'
game 'gta5'

author 'mufty'
description 'MRP UI Player HUD'
version '0.0.1'

ui_page 'ui/index.html'

dependencies {
    "mrp_core"
}

files {
    'ui/fonts/gobold-regular.otf',
    'ui/config.js',
    'ui/scripts/main.js',
    'ui/styles/style.css',
    'ui/index.html',
    'client.lua',
}

client_scripts {
    'client.lua',
}

server_scripts {
    'server.js',
}
