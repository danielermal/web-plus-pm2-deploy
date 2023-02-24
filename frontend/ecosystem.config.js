const dotenv = require('dotenv');
dotenv.config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'app',
    script: 'pm2 serve build/ 3000 --name "react-build" --spa',
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/danielermal/web-plus-pm2-deploy.git',
      path: DEPLOY_PATH,
      'post-deploy': 'cd frontend && npm i && npm run build',
    },
  },
};
