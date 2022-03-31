class Configuration {
  connectionString?: string;

  port?: number;
}

const base = {
  connectionString: 'file:file.db',
  port: 3000,
};

const configurations = new Map<string, Configuration>();
configurations.set('base', base);

const environmentSpecific = configurations.get(process.env.NODE_ENV);
const configuration = { ...base, ...environmentSpecific };

export default configuration;
