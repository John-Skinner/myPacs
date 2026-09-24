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
