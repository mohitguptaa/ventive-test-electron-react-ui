export default {
    exitDialog: {
        defaultMessage: "Sorry! We've hit a problem \n \nWe recommend restarting the app. Let us know if you experience this problem again so we can make sure it doesn't happen again.",
        dialogType: 'question',
        dialogButtons: ['Restart', 'Quit'],
    },
    browserWindow: {
        minWidth: 800,
        minHeight: 600,
        title: 'Ventive Test App',
        icon: `${__dirname}/../assets/logo.png`,
        nodeIntegration: false,
        webviewTag: true,
        enableDevTools: true,
    },
};
