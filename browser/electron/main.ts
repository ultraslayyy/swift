import { app, BrowserWindow } from 'electron';
import path from 'path';

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true
        }
    });
    if (process.env.NODE_ENV === 'development') {
        window.loadURL('http://localhost:5173');
    } else {
        window.loadFile(path.join(__dirname, '../dist/index.html'))
    }
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() });