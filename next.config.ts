import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	eslint: {
		// Uwaga: To ignoruje błędy lintera podczas budowania (builda)
		ignoreDuringBuilds: true,
	},
	typescript: {
		// Jeśli masz błędy TypeScripta, to również je zignoruje
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
