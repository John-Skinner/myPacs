#!/bin/bash
if [[ $EUID -ne 0 ]]; then
  echo"Run with sudo"
  exit 1
fi
FQDN=webviz.xyz
CERT_DIR='/home/admin/myPacs/server/certs'
certfile="fullchain.pem"
keyfile="privkey.pem"
if [[ -d $CERT_DIR ]]; then
  rm -rf -- ${CERT_DIR}
fi
mkdir -p ${CERT_DIR}
apt install --no-install-recommends -y snapd
snap install --classic certbot
certbot certonly --standalone --cert-name "${FQDN}"

cp "/etc/letsencrypt/live/${FQDN}/${certfile}" ${CERT_DIR}
cp "/etc/letsencrypt/live/${FQDN}/${keyfile}" ${CERT_DIR}
openssl pkcs12 ${OPENSSL_FLAGS} -export -in ${CERT_DIR}/fullchain.pem -inkey ${CERT_DIR}/privkey.pem -out ${CERT_DIR}/key.p12 -name wildfly -passout pass:secret
