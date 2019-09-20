# basic-auth

## Database Setup

### For Mac Users

```bash
# install postgresql
$ brew install postgresql

# if you want to start postgresql in startup, try do this
$ brew services start postgresql

# create user "basicauthuser" with password "basicauthpass"
$ createuser -P basicauthuser

# create database "basicauthdb" owened by "basicauthuser"
$ createdb basicauthdb -O basicauthuser
```

### For Windows Users

#### Python

Because it uses [node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js), we need a Python:

- Download an installer at <https://www.python.org/downloads/windows>
- Install with "Add Python 3.X to PATH" checked

#### [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)

- Run `npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe **as Administrator**

#### PostgreSQL

- Download an installer at <https://www.postgresql.org/download/windows>
- Run the installer with a flag `--install_runtimes 0` like this:

```cmd
> postgresql-11.2-1-windows-x64.exe --install_runtimes 0
```

#### pgAdmin

- Download a latest installer at <https://www.pgadmin.org/download>
- Run the pgAdmin and login with a root user
- Right click `Login/Group Roles` and `Create > Login/Group Role`
    - `General` Panel:
        - `Name`: `basicauthuser`
    - `Definition` Panel:
        - `Password`: `basicauthpass`
    - `Priviledges` Panel:
        - Check all `Yes`
- Right click `Databases` and `Create > Database`
    - `General` Tab:
        - `Database`: `basicauthdb`
        - `Owner`: `basicauthuser`

## Application Setup

```bash
# prepare `.env` and edit it for your own environments
$ cp .env.example .env
```

The `.env` file is like this:

```
# DB
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=basicauthuser
DB_PASSWORD=basicauthpass
DB_DATABASE=basicauthdb
DB_SYNCHRONIZE=true

# App
HOST=http://localhost
PORT=4000
SESSION_SECRET=basicauth
```

## Usage

### Installation

```bash
$ yarn (or `npm install`)
```

### Development Mode

```bash
$ yarn dev (or `npm run dev`)
```

### Production Mode

```bash
$ yarn build (or `npm run build`)
$ yarn start (or `npm start`)
```
