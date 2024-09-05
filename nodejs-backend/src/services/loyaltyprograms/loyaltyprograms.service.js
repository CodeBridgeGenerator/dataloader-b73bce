const { Loyaltyprograms } = require('./loyaltyprograms.class');
const createModel = require('../../models/loyaltyprograms.model');
const hooks = require('./loyaltyprograms.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/loyaltyprograms', new Loyaltyprograms(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('loyaltyprograms');

  service.hooks(hooks);
};