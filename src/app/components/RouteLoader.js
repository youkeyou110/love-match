'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RouteLoader() {
  const router = useRouter();

  useEffect(() => {
    // 预加载重要路由
    const routes = ['/guide', '/pricing', '/about'];
    routes.forEach(route => {
      router.prefetch(route);
    });
  }, [router]);

  return null;
} 