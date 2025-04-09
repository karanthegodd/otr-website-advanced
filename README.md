# OTR Website Deployment Files

This directory contains the necessary files for deploying the OTR website to Vercel.

## Contents

- `.vercel/` - Contains Vercel deployment configuration and environment variables
- `package.json` - Project dependencies and scripts
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## Deployment Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to Vercel:
   ```bash
   vercel deploy --prod
   ```

## Environment Variables

The following environment variables are required for deployment:

- `VERCEL_OIDC_TOKEN` - Vercel OIDC token for authentication
- Additional environment variables can be configured in the Vercel dashboard

## Notes

- Make sure to update the environment variables in the Vercel dashboard before deployment
- The deployment uses Next.js 14 with TypeScript and Tailwind CSS
- The project is configured for production deployment 