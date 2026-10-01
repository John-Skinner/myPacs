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
## seeing the viewer
url:
```https://webviz.xhz/ohifViewer/```
Need to have the final / due to ohif itself (not an nginx issue)
