# Sentinel personal timelog analyzer
> Group your Sentinel timelogs for further exploitation

You want to finely track your time spent on project ? Then this mini app 
will help you sort it out!

## Installing / Getting started

It is a 3 steps process :
1) Download your tasks in a json file
2) Process the tasks into a table (csv style)
3) Analyze the data the software you want (Excel template is available)

You can setup the variables in the file `download/main.js`

```shell
mkdir -p data
yarn
yarn download
yarn generate
```

## Developing

### Built With

* [graphql-request](https://github.com/prisma-labs/graphql-request): Minimal 
GraphQL client supporting Node and browsers for scripts or simple apps
* [json2csv](https://github.com/zemirco/json2csv): Converts json into csv with
column titles and proper line endings.

### Prerequisites

To get started, have [node](https://nodejs.org/en/) and
[yarn](https://yarnpkg.com/fr/) installed.

### Customization

To group differently, you can write your own function in `generate/group.js`.
Don't forget to change the function in the `generate.main.js` file!

## Configuration

The configuration is in the `.env` file. For now the available options are :

- `BACKEND_URL`: Endpoint for the requests to the backend.
- `AUTH_TOKEN`: Token used to authenticate with the backend.

## Licensing

If you have access to this code without the permission of ZEILT studio,
please inform the company about it.
