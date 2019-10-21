module.exports = {
    uiPort: process.env.PORT || 1881,
    uiHost: "0.0.0.0",
    httpAdminRoot: "admin",

    credentialSecret: false,
    flowFilePretty: true,

    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,

    debugMaxLength: 1000,

    adminAuth: {
        type: "credentials",
        users: [
            {
                username: "admin",
                password: "$2a$08$vkzCLFtBwPcw/YDlKAJACO2LuAqqZH0gHZmfXRbKrFmP1Kg9uhyQy",
                permissions: "*"
            }
        ]
    },

    functionGlobalContext:
    {
        FS:require('fs'),
        WS: require('ws'),
        PRETTY_BYTES: require('pretty-bytes'),
        REQUEST: require('request'),
        PATH: require('path'),
        MOVE_FILE: require('move-file'),
        INPUT_LOGIC: require(process.env.INPUT_LOGIC_NAME),
        CACHE_ACTIVE_JOBS: {}
    },

    editorTheme: {
        projects: {
            enabled: false
        }
    },

    logging:
    {
        console:
        {
            level: "info",
            metrics: false,
            audit: false
        }
    }
}