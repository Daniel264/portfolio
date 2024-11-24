import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { withSentryConfig } from "@sentry/nextjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["geist"],
    env: {
        DEPLOYMENT_ENV: process.env.DEPLOYMENT_ENV,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(js|jsx|ts|tsx)$/,
            include: [
                join(__dirname, "./src"), // Default Next.js directory
                join(__dirname, "../shared"), // External directory
            ],
            use: ["babel-loader"],
        });
        return config;
    }
};

export default withSentryConfig(
    nextConfig,
    {
        silent: true,
        org: "", // TODO: add appropriate Sentry org name here
        project: "", // TODO: add appropriate Sentry project name here
    },
    {
        widenClientFileUpload: true,
        transpileClientSDK: true,
        tunnelRoute: "/monitoring",
        hideSourceMaps: true,
        disableLogger: true,
    }
);
