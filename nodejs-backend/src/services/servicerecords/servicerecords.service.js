const { Servicerecords } = require('./servicerecords.class');
const createModel = require('../../models/servicerecords.model');
const hooks = require('./servicerecords.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/servicerecords', new Servicerecords(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('servicerecords');

  service.hooks(hooks);
};