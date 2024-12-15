/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
  // 开启构建优化
  swcMinify: true,
  // 生产环境源码映射
  productionBrowserSourceMaps: false,
  // 优化字体加载
  optimizeFonts: true,
  // 添加构建优化配置
  experimental: {
    // 启用 React Server Components
    serverComponents: true,
    // 启用并发特性
    concurrentFeatures: true,
    // 启用服务器端操作
    serverActions: true,
  },
  // 生产环境优化
  productionBrowserSourceMaps: false, // 禁用源码映射
  swcMinify: true, // 使用 SWC 压缩
  compress: true, // 启用压缩
  // 输出优化
  output: 'standalone',
  // 缓存优化
  onDemandEntries: {
    // 页面保持活跃的时长（毫秒）
    maxInactiveAge: 25 * 1000,
    // 同时保持活跃的页面数
    pagesBufferLength: 2,
  },
};

export default nextConfig;
