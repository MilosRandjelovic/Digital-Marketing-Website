import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname); // Now __dirname works in .mjs
    return config;
  },
};
