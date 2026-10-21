// Keycloak behind a quick tunnel: the URL changes on every tunnel restart.
// Override without redeploying: demo/?kc=https://<host>
window.DEMO_CONFIG = {
  keycloak: "https://exclusion-truck-laws-combinations.trycloudflare.com",
  realm: "wallet-demo",
  clientId: "wallet-demo-app",
  idpHint: "oid4vp",
};
