const PROJECTS_LABEL = {
  IT: 'IT',
  DITB: 'Deep in the Bowl',
  MUCKLAS: 'Mucklas',
  SENTINEL: 'Sentinel',
  TEAM: 'team.zeilt',
  ORGANISATION: 'Organisation',
  NS: 'Nächst Statioun',
  OFF: 'Congé/Férié',
  OTHERS: 'Others',
};

export const convertRowToProject = (row) => {
  console.log(row.department.name, row.date);
  if (['Férié', 'Congé'].includes(row.department.name)) {
    return 'Congé/Férié';
  }

  const { description: descriptionRaw } = row;

  if (!descriptionRaw) {
    return 'Unlabelled';
  }

  switch (row.production.name) {
    case 'MUCKLAS':
      return PROJECTS_LABEL.MUCKLAS;
    case 'Nächst Statioun Application':
      return PROJECTS_LABEL.NS;
    case 'DEEP IN THE BOWL':
      return PROJECTS_LABEL.DITB;
  }

  const description = descriptionRaw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(':', ' ')
    .toLowerCase();

  if (
    description.includes('management') ||
    description.includes('reunion') ||
    description.includes('supervision') ||
    description.includes('organisation')
  ) {
    return PROJECTS_LABEL.ORGANISATION;
  }
  if (description.includes('sentinel')) {
    return PROJECTS_LABEL.SENTINEL;
  }
  if (description.includes('team.zeilt')) {
    return PROJECTS_LABEL.TEAM;
  }
  if (
    description.includes('support') ||
    description.includes('it') ||
    description.includes('datacenter')
  ) {
    return PROJECTS_LABEL.IT;
  }

  return PROJECTS_LABEL.OTHERS;
};

// -----------

const PROJECTS_PIPE = [
  PROJECTS_LABEL.DITB,
  PROJECTS_LABEL.NS,
  PROJECTS_LABEL.MUCKLAS,
];

const LABEL_PROJECTS = Object.keys(PROJECTS_LABEL).reduce((ret, key) => {
  ret[PROJECTS_LABEL[key]] = key;
  return ret;
}, {});

export const convertRowToDepartment = (row) => {
  const project = convertRowToProject(row);

  if (PROJECTS_PIPE.includes(project)) {
    return 'Pipe';
  }
  if (LABEL_PROJECTS[project]) {
    return project;
  }
  return 'Unknown';
};
