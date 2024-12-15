'use client';

import Image from 'next/image';

export default function Hero({ onStartTest }) {
  const handleLearnMore = () => {
    const featuresSection = document.querySelector('#features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* 主背景渐变 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        {/* 装饰圆形 */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] bg-secondary/5 rounded-full blur-xl animate-float-delay" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* 主标语 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
            AI智能匹配，助你找到真爱
          </h1>

          {/* 副标语 */}
          <p className="text-lg md:text-xl text-foreground/80 mb-12 animate-fade-in animation-delay-200">
            基于科学的测评体系，让爱情更有方向
          </p>

          {/* CTA按钮 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-400">
            <button 
              onClick={onStartTest}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary-hover active:bg-primary-active transition-default hover-scale"
            >
              开始测评
            </button>
            <button 
              onClick={handleLearnMore}
              className="w-full sm:w-auto px-8 py-4 border border-foreground/20 rounded-full text-lg font-medium hover:bg-foreground/5 transition-default"
            >
              了解更多
            </button>
          </div>

          {/* 信任标签 */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/60 animate-fade-in animation-delay-600">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/users.svg"
                alt="用户数"
                width={20}
                height={20}
              />
              <span>50万+用户信赖</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/shield.svg"
                alt="安全"
                width={20}
                height={20}
              />
              <span>隐私安全保障</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/chart.svg"
                alt="准确率"
                width={20}
                height={20}
              />
              <span>95%匹配准确率</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
