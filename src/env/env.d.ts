declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      DBHOST: string;
      DBPORT: string;
      DBDIALECT: string;
      DBUSER: string;
      DBPASSWORD: string;
      DBNAME: string;
      JWT_SECRET_0: string;
    }
  }
}

export {}
