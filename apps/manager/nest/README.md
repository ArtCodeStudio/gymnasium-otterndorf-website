# Node App Manager

## Installation

```bash
yarn install
```

## Running the app

```bash
# development
yarn run start:dev

# On your local machine
yarn run start:local

# production mode
yarn run start:prod

# watch mode
yarn run watch:dev

```

## Port 80 and 443

To allow node to run on port 80 and 443 run

```bash
sudo /sbin/sysctl -w net.ipv4.ip_unprivileged_port_start=0
```

To keep this setting even after a reboot edit the file `/etc/sysctl.conf` and add `net.ipv4.ip_unprivileged_port_start=0` to the end of the file:;

```sh
sudo vim /etc/sysctl.conf
```

## Firewall

If the manager should be accessible directly without a classical webserver like nginx or apache, it is important to configure the firewall accordingly to increase the security.
We recommend to follow the [following article](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-20-04-de) with a few customizations:

## License

  Nest is [MIT licensed](LICENSE).
