/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'staybook.in/',
    //         port: '',
    //         pathname: '/*',
    //       },
    //     ],
    //   },

    images:{
        domains:['staybook.in',"th.bing.com","images.staybook.in","images.freekaamaal.com"]
    }
};

export default nextConfig;
