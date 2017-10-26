const liveServer = require('live-server');

const parameters = {
    mount: [
        ["/components", "./node_modules"],
    ],
};

liveServer.start(parameters);

