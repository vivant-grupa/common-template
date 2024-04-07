export type AppConfig = {
  nodeEnv: string;
  name: string;
  workingDirectory: string;
  port: number;
  apiPrefix: string;
  fallbackLanguage: string;
  headerLanguage: string;
  rabbitmqUrl: string;
};

export type AllConfigType = {
  app: AppConfig;
};
