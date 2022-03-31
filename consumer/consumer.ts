import axios from 'axios';
import os from 'os';
import configuration from './ConfigurationManager';

const { brokerUrl } = configuration;

setInterval(() => {
  axios.get(`${brokerUrl}/messages`)
    .then((response) => {
      const data: string = response.data as string;
      if (response.status === 200) {
      // eslint-disable-next-line no-console
        console.log(`${data} was processed by ${os.hostname()}`);
      }
    })
    .catch((e) => { throw e; });
}, 1000);
