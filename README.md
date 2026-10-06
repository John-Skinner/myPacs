# myPacs
## building OHIF Viewer
```
pnpm install
pnpm run build
```

For development
```plantuml
pnpm run dev
```
For deployment/production
do this once for the server
```plantuml
net.ipv4.ip_unprivileged_port_start = 80
```
Then you can use http-server like:
```plantuml
cd client/OHIFViewers/platform/app/dist
npx http-server $PWD -p 80
```
## setting up keycloak
url: 
``` https://webviz.xyz/auth```
 switch to users-realm or create it with realm id 'users-realm'.

 create client (new client) with the following settings
- clientId: 'ohif-viewer',
- rootUrl: https://webviz.xyz
- adminUrl: (same)
- baseUrl: (same)
- enabled: true
- redirectUris: https://webviz.xyz/ohifViewer/*, https://webviz.xyz/,http://webviz.xyz/ohifViewer/*
- webOrigins: https://webviz.xyz, http---
- publicClient: true,
- requirePKCE : true,
- PKCE Methods: S256

create user 


## seeing the viewer
url:
```https://webviz.xhz/ohifViewer/```
Need to have the final / due to ohif itself (not an nginx issue)

## Integrating keycloak with google
1) Login into the keycloak (webviz.xyz/auth/)
2) Go to the realms for users
3) Go to Identity providers
4) Add the google provider
5) keep the Redirecturi to insert into google's OIDC
6) go to google and get the client ID and add it here as well as client secret.  More on the steps from google later
7) save
### Google steps for OpenID Connect
1) Go to the google cloud console https://console.cloud.google.com.  You will be at a project (KCiodc)
2) Click on the pancakes icon in upper-left, then pick API's & Services
3) Click on Oath consent screen
4) Pick external user
5) Create
6) fill out the App Information (app name, user support email, developer contact info) save
7) click on Credentials in pancakes icon.
8) choose create credentials
9) select OAUTH client ID
10) choose app type (web apps)
11) enter Authorized javascript origins (https://webviz.xyz)
12) Enter Authorized redirect URI's from the step above during keycloak setup.
13) Create
14) Grab the client id and secret to insert into the keycloak ID provider.
