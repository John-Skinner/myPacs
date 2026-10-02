import './assets/main.css'
import Keycloak from 'keycloak-js';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
const bypassKC = false;
const kcOptions = {
  url:'https://webviz.xyz/auth',
  "auth-server-url":'https://webviz.xyz/auth/',
  realm: 'users-realm',
  clientId: 'ohif-viewer',
  "ssl-required": "external",
  resource: "ohif-viewer",
  "public-client": true,
  "confidential-port": 0

};
console.log(`kcOptions: ${JSON.stringify(kcOptions, null, 2)}`);
console.log(`neurl: ${kcOptions.url} `);
const keycloak = new Keycloak(kcOptions);

if (!bypassKC) {
  try {
    console.log(`engage keycloak login`)
    const authenticated = await keycloak.init({
      onLoad: 'login-required'
    });
    console.log(`authenticated? ${authenticated}`);

    const app = createApp(App)

    app.use(createPinia())

    app.mount('#app')
  }
  catch(error) {
    console.log(error)
  }
}
else {
  console.log(`bypass init of keycloak`)
  const app = createApp(App)

  app.use(createPinia())

  app.mount('#app')
}


