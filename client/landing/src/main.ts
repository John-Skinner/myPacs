import './assets/main.css'
import Keycloak from 'keycloak-js';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
const bypassKC = true;

const keycloak = new Keycloak({
  url:'auth',
  realm: 'master',
  clientId: 'ohif-viewer'
})
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


