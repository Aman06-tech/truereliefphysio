"use client";

import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Settings, BarChart3, TrendingUp, Database, Lock, Eye, EyeOff, Info } from 'lucide-react';
import { cookies, type CookieInfo } from '@/lib/cookie-manager';

export default function CookieInfoDisplay() {
  const [cookieList, setCookieList] = useState<CookieInfo[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    byCategory: { essential: 0, functional: 0, analytics: 0, marketing: 0 },
    totalSize: 0,
  });
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    // Load cookie information
    const info = cookies.getCookieInfo();
    const cookieStats = cookies.getStats();

    setCookieList(info);
    setStats(cookieStats);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'essential':
        return <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />;
      case 'functional':
        return <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'analytics':
        return <BarChart3 className="h-5 w-5 text-purple-600 dark:text-purple-400" />;
      case 'marketing':
        return <TrendingUp className="h-5 w-5 text-orange-600 dark:text-orange-400" />;
      default:
        return <Cookie className="h-5 w-5 text-gray-600 dark:text-gray-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'essential':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800';
      case 'functional':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800';
      case 'analytics':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800';
      case 'marketing':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-800';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-800';
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <Cookie className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Cookie Information
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              View and manage browser cookies
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowValues(!showValues)}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
        >
          {showValues ? (
            <>
              <EyeOff className="h-4 w-4" />
              <span className="text-sm font-medium">Hide Values</span>
            </>
          ) : (
            <>
              <Eye className="h-4 w-4" />
              <span className="text-sm font-medium">Show Values</span>
            </>
          )}
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between mb-2">
            <Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-3xl font-bold text-blue-900 dark:text-blue-100">
              {stats.total}
            </span>
          </div>
          <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
            Total Cookies
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between mb-2">
            <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
            <span className="text-3xl font-bold text-green-900 dark:text-green-100">
              {stats.byCategory.essential}
            </span>
          </div>
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            Essential
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between mb-2">
            <Settings className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <span className="text-3xl font-bold text-purple-900 dark:text-purple-100">
              {stats.byCategory.functional}
            </span>
          </div>
          <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
            Functional
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between mb-2">
            <Database className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            <span className="text-2xl font-bold text-orange-900 dark:text-orange-100">
              {formatSize(stats.totalSize)}
            </span>
          </div>
          <p className="text-sm font-medium text-orange-800 dark:text-orange-200">
            Total Size
          </p>
        </div>
      </div>

      {/* Cookie List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Active Cookies ({cookieList.length})
          </h3>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {cookieList.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <Cookie className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">No cookies found</p>
            </div>
          ) : (
            cookieList.map((cookie, index) => (
              <div key={index} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getCategoryIcon(cookie.category)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white font-mono">
                        {cookie.name}
                      </h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(cookie.category)}`}>
                        {cookie.category}
                      </span>
                      {cookie.secure && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800 flex items-center gap-1">
                          <Lock className="h-3 w-3" />
                          Secure
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {cookie.description}
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Value:</span>
                        <p className="font-mono text-gray-900 dark:text-white mt-1 truncate">
                          {showValues ? cookie.value : '***' + cookie.value.slice(-4)}
                        </p>
                      </div>

                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Size:</span>
                        <p className="font-semibold text-gray-900 dark:text-white mt-1">
                          {formatSize(cookie.size)}
                        </p>
                      </div>

                      <div>
                        <span className="text-gray-500 dark:text-gray-400">SameSite:</span>
                        <p className="font-semibold text-gray-900 dark:text-white mt-1 capitalize">
                          {cookie.sameSite}
                        </p>
                      </div>

                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Path:</span>
                        <p className="font-mono text-gray-900 dark:text-white mt-1">
                          {cookie.path}
                        </p>
                      </div>

                      {cookie.expires && (
                        <div className="col-span-2">
                          <span className="text-gray-500 dark:text-gray-400">Expires:</span>
                          <p className="text-gray-900 dark:text-white mt-1">
                            {new Date(cookie.expires).toLocaleString()}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Cookie Policy Info */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-4">
          <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              About Cookies
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
              Cookies are small text files stored on your device. We use cookies to:
            </p>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span><strong>Essential:</strong> Keep you logged in and maintain your session</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span><strong>Functional:</strong> Remember your preferences (theme, language)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span><strong>Security:</strong> Protect against CSRF attacks and unauthorized access</span>
              </li>
            </ul>
            <p className="text-sm text-blue-800 dark:text-blue-200 mt-4">
              You can manage your cookie preferences at any time through your browser settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
