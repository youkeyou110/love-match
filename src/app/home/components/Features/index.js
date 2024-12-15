'use client';

import { useRef, useEffect } from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: '/icons/ai.svg',
    title: 'AI智能匹配系统',
    description: '运用先进的AI算法，精准分析性格特征，为您匹配最适合的伴侣。'
  },
  {
    icon: '/icons/mbti.svg',
    title: 'MBTI性格测试',
    description: '基于科学的MBTI人格分析，深入了解自己和潜在伴侣的性格特质。'
  },
  {
    icon: '/icons/values.svg',
    title: '价值观匹配分析',
    description: '全方位评估价值观契合度，确保长期关系的稳定发展。'
  },
  {
    icon: '/icons/lifestyle.svg',
    title: '生活习惯评估',
    description: '分析日常生活习惯的兼容性，预测未来共同生活的和谐度。'
  }
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            科学的匹配系统，让爱情更有把握
          </h2>
          <p className="text-lg text-foreground/70 animate-fade-in animation-delay-200">
            我们运用先进的AI技术和心理学理论，帮助您找到真正契合的伴侣
          </p>
        </div>

        {/* 特性卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`feature-card opacity-0 animation-delay-${(index + 2) * 200}`}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        {/* 补充信息 */}
        <div className="mt-16 text-center animate-fade-in animation-delay-1000">
          <p className="text-foreground/60">
            基于<span className="text-primary font-medium">50万+</span>真实用户数据分析
            · 匹配准确率<span className="text-primary font-medium">95%</span>
          </p>
        </div>
      </div>
    </section>
  );
}
