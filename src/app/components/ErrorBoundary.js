'use client';

import { useState } from 'react';

export default function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">出错了</h2>
          <p className="text-foreground/70 mb-4">抱歉，页面加载出现问题</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            重新加载
          </button>
        </div>
      </div>
    );
  }

  return children;
} 