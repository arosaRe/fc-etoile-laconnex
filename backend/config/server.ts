export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  cors: {
    enabled: true,
    headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    origin: [
      env('FRONTEND_URL', 'http://localhost:4321'),
      'http://localhost:4321',
      'https://www.fcetoilelaconnex.ch'
    ],
    credentials: true,
  },
});
