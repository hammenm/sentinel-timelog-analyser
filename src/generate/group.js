export const convertDescriptionToProject = (descriptionRaw) => {
  const description = descriptionRaw.toLowerCase();

  if (description.includes('luxinnovation')) {
    return 'Luxinnovation';
  }
  if (description.includes('sentinel')) {
    return 'Sentinel';
  }
  if (description.includes('hypno')) {
    return 'Hypno';
  }
  if (description.includes('bocal') || description.includes('fdb')) {
    return 'LFDB';
  }
  if (description.includes('squeeze') || description.includes('cracké')) {
    return 'Cracké';
  }
  if (description.includes('nächst statioun')) {
    return 'Nächst Statioun';
  }
  if (description.includes('recrutement')) {
    return 'Recrutement';
  }
  if (description.includes('innovation')) {
    return 'Innovation';
  }
  if (
    description.includes('machine') ||
    description.includes('matériel') ||
    description.includes('réseau') ||
    description.includes('support')
  ) {
    return 'IT';
  }
  return 'Others';
};

export const convertDescriptionToType = (descriptionRaw) => {
  const description = descriptionRaw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(':', ' ')
    .toLowerCase();

  if (description.includes('covid')) {
    return 'COVID';
  }
  if (
    description.includes('td') ||
    description.includes('hypno') ||
    description.includes('bocal') ||
    description.includes('fdb') ||
    description.includes('squeeze') ||
    description.includes('cracké') ||
    description.includes('nächst statioun') ||
    description.includes('kinépolis') ||
    description.includes('pipeline') ||
    description.includes('coalition')
  ) {
    return 'TD';
  }
  if (description.includes('luxinnovation')) {
    return 'Luxinnovation';
  }
  if (
    description.includes('sentinel') &&
    description.includes('commercialisation')
  ) {
    if (description.includes('commercialisation')) {
      return 'Sentinel Commercialisation';
    }
    return 'Sentinel';
  }
  if (description.includes('innovation')) {
    return 'Innovation';
  }
  if (
    description.includes('it') ||
    description.includes('machine') ||
    description.includes('matériel') ||
    description.includes('réseau') ||
    description.includes('support')
  ) {
    return 'IT';
  }
  if (
    description.includes('reunion') ||
    description.includes('management') ||
    description.includes('1:1')
  ) {
    return 'Réunion/Management';
  }
  return 'Others';
};
