import Image from 'next/image';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group p-6 rounded-2xl border border-foreground/10 hover:border-primary/30 transition-default hover:bg-primary/5 hover-scale">
      {/* 图标 */}
      <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-default">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="text-primary"
        />
      </div>

      {/* 标题 */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* 描述 */}
      <p className="text-foreground/70">{description}</p>
    </div>
  );
} 