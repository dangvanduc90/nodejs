module.exports = {
  apps : [{
    name: 'API',
    script: 'babel-node src/index.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    env_staging: {
      NODE_ENV: 'staging'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'git@github.com:dangvanduc90/nodejs.git',
      path : '/home/admin1/projects/nodejs',
      'post-deploy' : 'npm install && pm2 start npm -- run startServer ecosystem.config.js --env production'
    },
    staging : {
      user : 'node',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'git@github.com:dangvanduc90/nodejs.git',
      path : '/home/admin1/projects/nodejs',
      'post-deploy' : 'npm install && pm2 start npm -- run startServer ecosystem.config.js --env staging'
    }
  }
};
