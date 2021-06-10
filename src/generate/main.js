import fs from 'fs';
import moment from 'moment';
import { convertRowToProject, convertRowToDepartment } from './group';

const { AsyncParser } = require('json2csv');

// Converters
const convertRowToDay = (row, field) => {
  const { date } = row;
  if (!date) {
    return field.default;
  }
  return moment(date).format(moment.HTML5_FMT.DATE);
};

const convertRowToDurationHours = (row, field) => {
  const { duration } = row;
  if (!duration) {
    return field.default;
  }
  return moment.duration(duration).asHours();
};

const convertRowDescription = (row) => {
  return row?.description?.replace(/\n/g, ' ');
};

const fields = [
  'date',
  { label: 'day', value: convertRowToDay },
  {
    label: 'duration (in hours)',
    value: convertRowToDurationHours,
    default: 0,
  },
  { label: 'description', value: convertRowDescription },
  { label: 'project', value: convertRowToProject },
  { label: 'category', value: convertRowToDepartment },
  { label: 'production', value: (row) => row.production.name },
  { label: 'department', value: (row) => row.department.name },
];

const inputPath = 'data/tasks.json';
const outputPath = 'data/tasks.csv';

const input = fs.createReadStream(inputPath, { encoding: 'utf8' });
const output = fs.createWriteStream(outputPath, { encoding: 'utf8' });
const parser = new AsyncParser({ fields });

parser.fromInput(input).toOutput(output);
