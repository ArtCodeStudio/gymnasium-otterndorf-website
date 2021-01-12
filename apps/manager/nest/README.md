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

## License

  Nest is [MIT licensed](LICENSE).
