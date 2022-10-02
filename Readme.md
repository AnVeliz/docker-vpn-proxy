# Dockerizzzed OpenVPN connector with Squid proxy

The connector is implemented as a docker-compose configuration. You may need to alter default DNS settings.

Configuration options of the proxy server (change dir to `./proxy-srv` folder):

|File|Parameter|Description|
|----|---------|-----------|
|`./docker-compose.yml`|`dns`|An array of DNS servers. You may need to set the custom one first to be used as the main DNS server.|
|`./squid.conf`||The whole configuration file is mounted to squid daemon in the container so if you need to modify the default configuration, you can do it here and then restart docker-compose.|
`./credentials.txt`||The file should contain two lines only. The first line is the user name and the second one is the password. The configuration is taken by the OpenVPN client.|
`./vpnfile.ovpn`||The file is a normal OpenVPN connection configuration file.|

Note that `credentials.txt`, `vpnfile.ovpn` are missing in the repository. You need to put your own files there.

To build the container run `"docker build -t ovpn-connector . "`. You may need to set env variable `DOCKER_BUILDKIT=0` before building the image if you nave some issues with `BUILLDKIT`.

To run it with your configuration just make the adjacent you need in the configuration files and then run `docker-compose up`.

Please make note that the container should run in a privileged mode.

# Chrome extension to user the local proxy

You need to enable `developer` mode on Chrome extensions tab to install extensions from a local folder. Than select `Load unpacked` and select `chrome-proxy` folder. The extension should appear in Chrome toolbar.