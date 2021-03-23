export interface ConfigInterface {
  mode: 'PRODUCTION' | 'DEVELOPMENT'
}

const config: ConfigInterface = {
  mode: 'PRODUCTION',
}

export default config;