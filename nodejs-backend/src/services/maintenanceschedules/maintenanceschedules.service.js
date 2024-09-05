const { Maintenanceschedules } = require('./maintenanceschedules.class');
const createModel = require('../../models/maintenanceschedules.model');
const hooks = require('./maintenanceschedules.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/maintenanceschedules', new Maintenanceschedules(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('maintenanceschedules');

  service.hooks(hooks);
};