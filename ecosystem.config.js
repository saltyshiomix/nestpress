module.exports = {
  apps : [{
    name: 'NESTPRESS',
    script: '.next/production-server/main.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '3G',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
