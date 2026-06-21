import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Public Crossmint CLIENT key (ck_), STAGING = Stellar testnet (matches the
  // deployed p2p contract). Client keys are exposed in the browser by design —
  // their security is the allowed-origins allowlist in the Crossmint console
  // (keep it limited to localhost + the deployed domain), NOT secrecy. Never put
  // a server key (sk_) here. Other NEXT_PUBLIC_* values default to testnet in code.
  env: {
    NEXT_PUBLIC_CROSSMINT_API_KEY:
      "ck_staging_5MwoQSikyguRgnHXQGNm2khXk73gYR7YiHRZHA5apxWCyxcBJmi71Dc7iDZLtHJFW8EsYFgAseszxffGeX9f7dQXoBFds1VCoZyEf5EdTGextNPGdJekqc4ThtPMP6dPotRjY7BrSwgVNirhbA3oX1eKEg388mpmgWhvkEpiqMYsYjV39z2XovHwryEyMjwy3ddVjksWq1Q3d3Ty4axsgM6A",
  },
};

export default nextConfig;
