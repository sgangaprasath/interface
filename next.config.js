/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  // webpack: (config) => {
  //   let modularizeImports = null;
  //   config.module.rules.some((rule) =>
  //     rule.oneOf?.some((oneOf) => {
  //       modularizeImports =
  //         oneOf?.use?.options?.nextConfig?.modularizeImports;
  //       return modularizeImports;
  //     }),
  //   );
  //   if (modularizeImports?.["@headlessui/react"])
  //     delete modularizeImports["@headlessui/react"];
  //   return config;
  // },
};
module.exports = nextConfig;