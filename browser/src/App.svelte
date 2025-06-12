<script lang="ts">
    let url = 'https://overlay.ultraslayyy.xyz';

    const loadURL = () => {
        const webview = document.querySelector('webview');
        if (webview) (webview as any).loadURL(url);
    }
</script>

<input bind:value={url} on:keydown={(e) => e.key === 'Enter' && loadURL()} />
<button on:click={loadURL}>Go</button>

<webview src='https://overlay.ultraslayyy.xyz' style="width: 100%; height: 90vh;"></webview>