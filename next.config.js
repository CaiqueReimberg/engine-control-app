/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXTAUTH_SECRET: 'controlengineapp',
    
    GOOGLE_CLIENT_ID: "98915459734-na1ghlkl8635364dntl4fifuctud05bb.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  }
}

module.exports = nextConfig
