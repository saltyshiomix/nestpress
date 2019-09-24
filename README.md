<p align="center">😎 NESTPRESS 😎</p>
<p align="center">Better NestJS Utilities and Examples</p>

## Packages

| package | version |
| --- | --- |
| [@nestpress/next](https://github.com/saltyshiomix/nestpress/blob/master/packages/next/README.md) | ![@nestpress/next](https://img.shields.io/npm/v/@nestpress/next.svg) ![downloads](https://img.shields.io/npm/dt/@nestpress/next.svg) |
| [@nestpress/postgres-express-session](https://github.com/saltyshiomix/nestpress/blob/master/packages/postgres-express-session/README.md) | ![@nestpress/postgres-express-session](https://img.shields.io/npm/v/@nestpress/postgres-express-session.svg) ![downloads](https://img.shields.io/npm/dt/@nestpress/postgres-express-session.svg) |

## Examples

- [basic](https://github.com/saltyshiomix/nestpress/tree/master/examples/basic)
- [basic-auth](https://github.com/saltyshiomix/nestpress/tree/master/examples/basic-auth)
- [use-favicon](https://github.com/saltyshiomix/nestpress/tree/master/examples/use-favicon)
- [with-express](https://github.com/saltyshiomix/nestpress/tree/master/examples/with-express)
- [with-express-material-ui](https://github.com/saltyshiomix/nestpress/tree/master/examples/with-express-material-ui)
- [with-nodemon](https://github.com/saltyshiomix/nestpress/tree/master/examples/with-nodemon)

## Usage

### Database Setup

#### For Mac Users

```bash
# install postgresql
$ brew install postgresql

# if you want to start postgresql in startup, try do this
$ brew services start postgresql

# create user "nestpressuser" with password "nestpresspass"
$ createuser -P nestpressuser

# create database "nestpressdb" owened by "nestpressuser"
$ createdb nestpressdb -O nestpressuser
```

#### For Windows Users

##### Python

Because it uses [node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js), we need a Python:

- Download an installer at <https://www.python.org/downloads/windows>
- Install with "Add Python 3.X to PATH" checked

##### [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)

- Run `npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe **as Administrator**

##### PostgreSQL

- Download an installer at <https://www.postgresql.org/download/windows>
- Run the installer with a flag `--install_runtimes 0` like this:

```cmd
> postgresql-11.2-1-windows-x64.exe --install_runtimes 0
```

##### pgAdmin

- Download a latest installer at <https://www.pgadmin.org/download>
- Run the pgAdmin and login with a root user
- Right click `Login/Group Roles` and `Create > Login/Group Role`
    - `General` Panel:
        - `Name`: `nestpressuser`
    - `Definition` Panel:
        - `Password`: `nestpresspass`
    - `Priviledges` Panel:
        - Check all `Yes`
- Right click `Databases` and `Create > Database`
    - `General` Tab:
        - `Database`: `nestpressdb`
        - `Owner`: `nestpressuser`

### Application Setup

```bash
# install
$ git clone https://github.com/saltyshiomix/nestpress.git
$ cd nestpress
$ yarn

# prepare `.env` and edit it for your own environments
$ cp .env.example .env
```

The `.env` file is like this:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=nestpressuser
DB_PASSWORD=nestpresspass
DB_DATABASE=nestpressdb
DB_SYNCHRONIZE=true

APP_HOST=http://localhost
APP_PORT=4000
APP_SESSION_SECRET=nestpress
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
