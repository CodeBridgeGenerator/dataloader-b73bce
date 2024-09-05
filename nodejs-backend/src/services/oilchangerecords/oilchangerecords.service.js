const { Oilchangerecords } = require('./oilchangerecords.class');
const createModel = require('../../models/oilchangerecords.model');
const hooks = require('./oilchangerecords.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/oilchangerecords', new Oilchangerecords(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('oilchangerecords');

  service.hooks(hooks);
};