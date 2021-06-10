import fs from 'fs';
import moment from 'moment';
// request
import Client from './client';
import GET_TASKS from './operations';

const client = new Client();

const variables = {
  username: 'Maxence Hammen',
  dateStart: moment('2021-05-16').startOf('day'),
  dateEnd: moment()
    .subtract(2, 'day')
    .endOf('day'),
};

const writeData = data => {
  return fs.promises.writeFile(
    './data/tasks.json',
    JSON.stringify(data.tasks),
    'utf-8'
  );
};

client.request(GET_TASKS, variables).then(writeData);
