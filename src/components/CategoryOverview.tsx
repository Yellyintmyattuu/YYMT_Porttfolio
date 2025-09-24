import React from 'react';
import { 
  Shield, 
  TrendingUp, 
  Cloud, 
  BarChart3, 
  Brain, 
  Users, 
  Code, 
  Network, 
  Search, 
  GraduationCap 
} from 'lucide-react';
import { categories, getCertificationsByCategory } from '../data/certifications';

const categoryIcons = {
  "Cybersecurity & Ethical Hacking": <Shield size={32} />,
  "Digital Marketing & SEO": <TrendingUp size={32} />,
  "Cloud Computing & Infrastructure": <Cloud size={32} />,
  "Data Science & Analytics": <BarChart3 size={32} />,
  "AI & Machine Learning": <Brain size={32} />,
  "Project Management & Business": <Users size={32} />,
  "Software Development & IT Support": <Code size={32} />,
  "Network & Systems Administration": <Network size={32} />,
  "Specialized Security & Forensics": <Search size={32} />,
  "Academic & Professional Development": <GraduationCap size={32} />
};

interface CategoryOverviewProps {
  onCategoryClick: (categoryId: string) => void;
}

export const CategoryOverview: React.FC<CategoryOverviewProps> = ({ onCategoryClick }) => {
  const scrollToCategory = (category: string) => {
    const categoryId = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onCategoryClick(categoryId);
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          Certification Categories
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Explore certifications organized by expertise area. Click any category to navigate directly to those credentials.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => {
          const certCount = getCertificationsByCategory(category).length;
          const categoryId = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          
          return (
            <button
              key={category}
              onClick={() => scrollToCategory(category)}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                         transform hover:scale-105 transition-all duration-300 
                         border-2 border-gray-200 hover:border-amber-400
                         text-center cursor-pointer"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-slate-600 group-hover:text-amber-600 
                              transition-colors duration-300">
                {categoryIcons[category as keyof typeof categoryIcons]}
              </div>

              {/* Category Name */}
              <h3 className="text-sm font-semibold text-slate-800 mb-2 leading-tight 
                             group-hover:text-slate-900">
                {category}
              </h3>

              {/* Certificate Count */}
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 
                              text-white text-xs font-bold rounded-full px-3 py-1 mx-auto w-fit
                              group-hover:from-amber-600 group-hover:to-yellow-600">
                {certCount} cert{certCount !== 1 ? 's' : ''}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-yellow-400/5 
                              rounded-xl opacity-0 group-hover:opacity-100 transition-opacity 
                              duration-300 pointer-events-none"></div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-amber-400 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              animate-pulse"></div>
            </button>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 bg-gradient-to-r from-slate-50 to-amber-50 rounded-xl p-6 
                      border border-amber-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-1">
              {categories.length}
            </div>
            <div className="text-slate-600 text-sm uppercase tracking-wide">
              Expertise Areas
            </div>
          </div>
          
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-1">
              {categories.reduce((total, category) => 
                total + getCertificationsByCategory(category).length, 0
              )}
            </div>
            <div className="text-slate-600 text-sm uppercase tracking-wide">
              Total Certifications
            </div>
          </div>
          
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-1">
              2024-2025
            </div>
            <div className="text-slate-600 text-sm uppercase tracking-wide">
              Achievement Period
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
