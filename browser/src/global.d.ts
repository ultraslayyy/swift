export {}

declare global {
    interface Window {
        electronAPI: {
            sendMessage: (msg: string) => void;
        }
    }
}