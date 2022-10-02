let state = false;

const proxyConfig = {
    mode: "pac_script",
    pacScript: {
        data: "function FindProxyForURL(url, host) { return 'PROXY 127.0.0.1:3128'; }"
    }
};
const directConfig = {
    mode: "direct"
};

function setStateIcon() {
    const statePath = state ? "../images/proxy_on.png" : "../images/proxy_off.png"
    chrome.action.setIcon({ path: statePath });
    chrome.proxy.settings.set({ value: state ? proxyConfig : directConfig, scope: 'regular' }, function () { });
}

chrome.runtime.onInstalled.addListener(function () {
    setStateIcon()
    chrome.action.onClicked.addListener(() => {
        state = !state
        setStateIcon()
    });
});