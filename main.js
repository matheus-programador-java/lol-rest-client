const { app, BrowserWindow, Menu, Tray } = require('electron');

app.setAppUserModelId('com.matheusprogramadorjava.lol-rest-client');

function createWindow() {

    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadFile(__dirname + '/src/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    //    mainWindow.setMenu()
    // CRIAR MENU PERSONALIZADO POSTERIORMENTE

    const contextMenu = Menu.buildFromTemplate([
        {
            label: "Mostrar aplicativo", click: function () {
                mainWindow.show();
            },
        },
        {
            label: "Fechar", click: function () {
                app.isQuitting = true;
                app.quit();
            }
        }
    ]);

    const tray = new Tray(__dirname + '/tray.png');
    tray.setContextMenu(contextMenu);

    mainWindow.on('close', function (e) {
        if (!app.isQuitting) {
//            e.preventDefault();
            mainWindow.hide();
        }
    });
}

app.on('ready', createWindow);
// app.on('ready', function () {

//    let response = summonerv4.findSummoner('zCriptonitAz');
//    console.log(response);
// });
