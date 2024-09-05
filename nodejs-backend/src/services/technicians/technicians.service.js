const { Technicians } = require('./technicians.class');
const createModel = require('../../models/technicians.model');
const hooks = require('./technicians.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/technicians', new Technicians(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('technicians');

  service.hooks(hooks);
};