export default {
  nodeEnv: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || 'app',
  workingDirectory: process.env.PWD || process.cwd(),
  port: process.env.PORT
    ? parseInt(process.env.PORT, 10)
    : 3000,
  apiPrefix: process.env.API_PREFIX || 'api',
  fallbackLanguage: process.env.APP_FALLBACK_LANGUAGE || 'en',
  headerLanguage: process.env.APP_HEADER_LANGUAGE || 'x-custom-lang',
  rabbitmqUrl: process.env.RABBITMQ_URL || '',
};
