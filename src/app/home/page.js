'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

// 懒加载非首屏组件
const Features = dynamic(() => import('./components/Features'), {
  loading: () => <div className="animate-pulse">Loading...</div>
});

const Footer = dynamic(() => import('./components/Footer'));

const AuthModal = dynamic(() => import('./components/AuthModal'), {
  ssr: false, // 禁用服务端渲染，因为这是一个客户端组件
});

export default function HomePage() {
  // 状态管理
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  // 处理登录/注册弹窗
  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  // 处理弹窗关闭
  const handleCloseAuth = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 导航栏 */}
      <NavBar onAuth={handleOpenAuth} />

      {/* 主要内容 */}
      <main className="flex-grow">
        {/* Hero区域 */}
        <Hero onStartTest={() => handleOpenAuth('register')} />
        
        {/* 特性展示 */}
        <Features />
      </main>

      {/* 页脚 */}
      <Footer />

      {/* 登录/注册弹窗 */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={handleCloseAuth}
        initialMode={authMode}
      />
    </div>
  );
}
