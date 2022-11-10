const request = require('request-promise-native');
const config = require('../../config');

module.exports = async (params, http2 /** Http2 not use in this agent */, method, logger) => {
  const options = {
    ...config.defaults,
    ...params,
    method,
  };
  delete options.agent;

  const response = await request(options);
  // TODO add logger and customize options
  return response;
};
