import fs from 'fs';
import moment from 'moment';
import { convertDescriptionToType } from './group';

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

const convertRowToProject = row => {
  const { description } = row;
  if (!description) {
    return 'Unlabelled';
  }

  return convertDescriptionToType(description);
};

const fields = [
  'date',
  { label: 'day', value: convertRowToDay },
  {
    label: 'duration (in hours)',
    value: convertRowToDurationHours,
    default: 0,
  },
  'description',
  { label: 'project', value: convertRowToProject },
];

const inputPath = 'data/tasks.json';
const outputPath = 'data/tasks.csv';

const input = fs.createReadStream(inputPath, { encoding: 'utf8' });
const output = fs.createWriteStream(outputPath, { encoding: 'utf8' });
const parser = new AsyncParser({ fields });

parser.fromInput(input).toOutput(output);
