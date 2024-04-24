export const oktaConfig = {
    clientId: '0oaganqq50GPNBwQI5d7',
    issuer: 'https://dev-70470717.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}