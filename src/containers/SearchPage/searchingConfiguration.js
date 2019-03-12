export default {
  s: {
    type: 'text',
    field: 'title',
    parameter: 's',
    required: true,
    tip: '*required',
  },
  type: {
    type: 'text',
    field: 'type',
    parameter: 'type',
    required: false,
    tip: '*only: movie, series, episode',
  },
  y: {
    type: 'number',
    field: 'year',
    parameter: 'y',
    required: false,
    tip: '*max 2019',
  },
};
