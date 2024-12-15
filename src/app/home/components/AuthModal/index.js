'use client';

import { useState } from 'react';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({
    phone: '',
    code: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    
    // 手机号验证
    if (!formData.phone) {
      newErrors.phone = '请输入手机号';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入正确的手机号';
    }

    // 密码验证（登录模式）
    if (mode === 'login' && !formData.password) {
      newErrors.password = '请输入密码';
    }

    // 验证码验证（注册模式）
    if (mode === 'register' && !formData.code) {
      newErrors.code = '请输入验证码';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('表单提交', mode, formData);
      // TODO: 调用登录/注册API
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 清除对应的错误提示
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
      <div className="bg-background rounded-2xl p-8 max-w-md w-full mx-4 relative animate-fade-in animation-delay-200">
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-default"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* 标题 */}
        <h2 className="text-2xl font-bold mb-6 text-center">
          {mode === 'login' ? '登录' : '注册'}
        </h2>

        {/* 表单 */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">手机号</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-foreground/10'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-default`}
              placeholder="请输入手机号"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium mb-1">验证码</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className={`flex-1 px-4 py-2 rounded-lg border ${errors.code ? 'border-red-500' : 'border-foreground/10'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-default`}
                  placeholder="请输入验证码"
                />
                <button 
                  type="button"
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-default"
                >
                  获取验证码
                </button>
              </div>
              {errors.code && (
                <p className="mt-1 text-sm text-red-500">{errors.code}</p>
              )}
            </div>
          )}

          {mode === 'login' && (
            <div>
              <label className="block text-sm font-medium mb-1">密码</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${errors.password ? 'border-red-500' : 'border-foreground/10'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-default`}
                placeholder="请输入密码"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
          )}

          <button 
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-hover active:bg-primary-active transition-default"
          >
            {mode === 'login' ? '登录' : '注册'}
          </button>
        </form>

        {/* 切换模式 */}
        <p className="mt-4 text-center text-sm text-foreground/60">
          {mode === 'login' ? '还没有账号？' : '已有账号？'}
          <button
            type="button"
            className="text-primary hover:text-primary-hover ml-1"
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
          >
            {mode === 'login' ? '立即注册' : '去登录'}
          </button>
        </p>
      </div>
    </div>
  );
} 