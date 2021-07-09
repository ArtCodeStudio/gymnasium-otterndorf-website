export interface AppConfig {
  root: string;
  port: number;
  environment: 'development' | 'production';
  host: string;
}
