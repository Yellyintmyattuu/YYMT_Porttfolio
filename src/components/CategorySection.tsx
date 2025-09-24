import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CertificationCard } from './CertificationCard';
import { getCertificationsByCategory } from '../data/certifications';

interface CategorySectionProps {
  category: string;
  icon: React.ReactNode;
  isInitiallyExpanded?: boolean;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  icon,
  isInitiallyExpanded = false
}) => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);
  const certifications = getCertificationsByCategory(category);
  const categoryId = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div className="mb-8" id={categoryId}>
      {/* Category Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 
                   bg-gradient-to-r from-slate-800 to-slate-700 
                   text-white rounded-xl shadow-lg hover:shadow-xl 
                   transform hover:scale-[1.01] transition-all duration-300 
                   border border-slate-600 hover:border-amber-400"
      >
        <div className="flex items-center gap-4">
          <div className="text-amber-400">
            {icon}
          </div>
          <h2 className="text-2xl font-bold">
            {category}
          </h2>
          <span className="bg-amber-500 text-slate-800 px-3 py-1 
                           rounded-full text-sm font-bold">
            {certifications.length}
          </span>
        </div>
        
        <div className="text-amber-400 transition-transform duration-300"
             style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ChevronDown size={24} />
        </div>
      </button>

      {/* Certificates Grid */}
      <div className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 pt-8">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={cert.id} 
              certification={cert} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );

};
