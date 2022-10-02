#!/bin/bash
set -e

echo "Starting OpenVPN..."
$(which openvpn) --config /root/vpnfile.ovpn --auth-user-pass /root/credentials.txt --daemon

echo "Waiting for OpenVPN for 15 seconds"
sleep 15

echo "Starting Squid..."
$(which squid) -f /root/squid.conf

echo "Waiting for shutdown"
sleep infinity