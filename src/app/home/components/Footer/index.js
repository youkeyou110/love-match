'use client';

import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  product: {
    title: '产品',
    links: [
      { name: '功能介绍', href: '#features' },
      { name: '使用指南', href: '/guide' },
      { name: '定价方案', href: '/pricing' },
      { name: '常见问题', href: '/faq' },
    ]
  },
  company: {
    title: '公司',
    links: [
      { name: '关于我们', href: '/about' },
      { name: '加入我们', href: '/careers' },
      { name: '联系我们', href: '/contact' },
      { name: '新闻动态', href: '/news' },
    ]
  },
  support: {
    title: '支持',
    links: [
      { name: '帮助中心', href: '/help' },
      { name: '用户反馈', href: '/feedback' },
      { name: '隐私保护', href: '/privacy' },
      { name: '服务条款', href: '/terms' },
    ]
  }
};

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo和描述 */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={32}
                className="dark:invert"
              />
            </Link>
            <p className="text-foreground/70 mb-6">
              基于AI技术的智能匹配系统，帮助您找到真正的灵魂伴侣。
              科学的测评体系，让爱情更有方向。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-default">
                <Image src="/icons/weixin.svg" alt="微信" width={24} height={24} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-default">
                <Image src="/icons/weibo.svg" alt="微博" width={24} height={24} />
              </a>
            </div>
          </div>

          {/* 链接区域 */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-default"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部信息 */}
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} AI Love Match. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-foreground/60">
                <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-default">
                  京ICP备XXXXXXXX号-1
                </a>
              </p>
              <button 
                onClick={handleScrollTop}
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-default"
                aria-label="回到顶部"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
