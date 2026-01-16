import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MagazineSection({ onNavigateToLogin }) {
  return (
    <div className="bg-blue-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">Le Mag</h2>
        <p className="text-blue-600 text-sm mb-6 flex items-center gap-2">
          Voir toutes les actualités associées 
          <span className="text-blue-600">›</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Article Assurance Chien */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all"
          >
            <div className="relative h-48">
              <img 
                src="/images/I9.jpeg" 
                alt="Assurance santé chien" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                assurance
              </span>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Assurance santé chien : quels soins sont pris en charge ?
              </h3>
              <p className="text-xs text-gray-500 mb-4">15/01/2026</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Lire l'article
              </button>
            </div>
          </div>

          {/* Article Épargne */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all"
          >
            <div className="relative h-48">
              <img 
                src="/images/I10.jpeg" 
                alt="Épargne retraite" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                assurance
              </span>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Est-il intéressant d'ouvrir une épargne retraite ?
              </h3>
              <p className="text-xs text-gray-500 mb-4">09/01/2026</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Lire l'article
              </button>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4">
          <button 
            onClick={onNavigateToLogin}
            className="w-12 h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={onNavigateToLogin}
            className="w-12 h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}