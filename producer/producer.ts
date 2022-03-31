import axios from 'axios';
import os from 'os';
import configuration from './ConfigurationManager';

const { brokerUrl } = configuration;

setInterval(() => {
  axios.post(`${brokerUrl}/messages`, { Message: `${os.hostname()} : ${new Date().toTimeString()}` })
    .catch((e) => { throw e; });
}, 5000);
