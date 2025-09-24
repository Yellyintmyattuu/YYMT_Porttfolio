import React from 'react';
import { Trophy, Award, Star, Sparkles } from 'lucide-react';
import { getCertificationStats } from '../data/certification.ts';

export const Header: React.FC = () => {
  const stats = getCertificationStats();

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 
                    text-white py-16 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-amber-400">
          <Star size={32} className="animate-pulse" />
        </div>
        <div className="absolute top-20 right-20 text-amber-300">
          <Trophy size={28} className="animate-bounce" />
        </div>
        <div className="absolute bottom-20 left-20 text-amber-500">
          <Award size={24} className="animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-32 text-amber-400">
          <Sparkles size={30} className="animate-bounce" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-600 opacity-5">
          <Trophy size={200} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Trophy size={48} className="text-amber-400 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r 
                         from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Professional Certifications
          </h1>
          <Trophy size={48} className="text-amber-400 animate-pulse" />
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-4xl mx-auto leading-relaxed">
          A comprehensive showcase of professional achievements and expertise 
          across multiple technology domains
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 
                          border border-amber-400/30 shadow-lg">
            <div className="text-3xl font-bold text-amber-400">
              {stats.totalCertifications}
            </div>
            <div className="text-amber-100 text-sm uppercase tracking-wide">
              Total Certifications
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 
                          border border-amber-400/30 shadow-lg">
            <div className="text-3xl font-bold text-amber-400">
              {stats.categoriesCount}
            </div>
            <div className="text-amber-100 text-sm uppercase tracking-wide">
              Categories
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 
                          border border-amber-400/30 shadow-lg">
            <div className="text-3xl font-bold text-amber-400">
              2024-2025
            </div>
            <div className="text-amber-100 text-sm uppercase tracking-wide">
              Achievement Years
            </div>
          </div>
        </div>

        {/* Oscar-style Quote */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto 
                        border border-amber-400/20 shadow-xl">
          <p className="text-lg italic text-amber-100 leading-relaxed">
            "Excellence is not a skill, it's an attitude. These certifications represent 
            a continuous journey of learning, growth, and professional mastery."
          </p>
          <div className="mt-4 flex justify-center">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-amber-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-amber-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Star size={8 + Math.random() * 16} />
          </div>
        ))}
      </div>
    </div>
  );
};