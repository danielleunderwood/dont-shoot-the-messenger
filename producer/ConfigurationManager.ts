class Configuration {
  brokerUrl?: string;
}

const base = {
};

const local = {
  brokerUrl: 'http://localhost:3000',
};

const docker = {
  brokerUrl: 'http://broker:3000',
};

const configurations = new Map<string, Configuration>();
configurations.set('base', base);
configurations.set('local', local);
configurations.set('docker', docker);

const environmentSpecific = configurations.get(process.env.NODE_ENV);
const configuration = { ...base, ...environmentSpecific };

export default configuration;
