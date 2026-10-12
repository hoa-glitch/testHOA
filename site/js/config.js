// Edit these values after you deploy the backend (see README.md).
window.HOA_CONFIG = {
  hoaName: 'Hidden Spring Homeowners Association',
  apiBaseUrl: 'https://ijmqq3ojbgibsi7c4dc3kmbdgy0bfyxt.lambda-url.us-east-2.on.aws',

  // Cognito user pool app client used for board/admin sign-in
  cognito: {
    domain: 'https://YOUR_PREFIX.auth.us-east-1.amazoncognito.com',
    clientId: 'YOUR_APP_CLIENT_ID',
    redirectUri: window.location.origin + '/admin.html',
    logoutUri: window.location.origin + '/',
    scopes: 'openid email',
  },
};
