'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar({ onAuth }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-lg' 
        : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={32}
              priority
            />
          </Link>

          {/* 汉堡菜单按钮 - 移动端 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`block w-full h-0.5 bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-0.5 bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* 主菜单 - 桌面端 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-foreground hover:text-primary transition-default">
              产品特性
            </Link>
            <Link href="#process" className="text-foreground hover:text-primary transition-default">
              使用流程
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-default">
              关于我们
            </Link>
          </div>

          {/* 用户操作 - 桌面端 */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => onAuth?.('login')}
              className="px-4 py-2 text-foreground hover:text-primary transition-default"
            >
              登录
            </button>
            <button 
              onClick={() => onAuth?.('register')}
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-hover active:bg-primary-active transition-default"
            >
              注册
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4">
            <Link
              href="#features"
              className="block px-4 py-2 text-foreground hover:text-primary transition-default"
              onClick={() => setIsMenuOpen(false)}
            >
              产品特性
            </Link>
            <Link
              href="#process"
              className="block px-4 py-2 text-foreground hover:text-primary transition-default"
              onClick={() => setIsMenuOpen(false)}
            >
              使用流程
            </Link>
            <Link
              href="#about"
              className="block px-4 py-2 text-foreground hover:text-primary transition-default"
              onClick={() => setIsMenuOpen(false)}
            >
              关于我们
            </Link>
            <div className="pt-4 border-t border-foreground/10">
              <button 
                onClick={() => {
                  onAuth?.('login');
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-foreground hover:text-primary transition-default"
              >
                登录
              </button>
              <button 
                onClick={() => {
                  onAuth?.('register');
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-hover active:bg-primary-active transition-default"
              >
                注册
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
