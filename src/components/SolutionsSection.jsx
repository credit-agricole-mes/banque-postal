import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SolutionsSection({ onNavigateToLogin }) {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8">
          La Banque Postale vous soutient dans tous vos projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Solutions Jeunes */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all"
          >
            <div className="relative h-64">
              <img 
                src="/images/I6.jpeg" 
                alt="Solutions Jeunes" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Solutions Jeunes</h3>
              <p className="text-sm text-gray-600">
                Prenez un bon départ dans la vie avec les offres, services et conseils adaptés à votre situation et vos besoins.
              </p>
            </div>
          </div>

          {/* Solutions Famille */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all"
          >
            <div className="relative h-64">
              <img 
                src="/images/I7.jpeg" 
                alt="Solutions Famille" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Solutions famille</h3>
              <p className="text-sm text-gray-600">
                Famille Comprise c'est le service d'accompagnement de La Banque Postale à destination des parents d'enfants mineurs.
              </p>
            </div>
          </div>

          {/* Solutions Patrimoniales */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all"
          >
            <div className="relative h-64">
              <img 
                src="/images/I8.jpeg" 
                alt="Solutions Patrimoniales" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-blue-600 font-semibold mb-2">Épargne</p>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Solutions patrimoniales</h3>
              <p className="text-sm text-gray-600 mb-4">
                Vous accompagner au quotidien, soutenir vos projets, être au service de vos intérêts, telles sont les missions des conseillers spécialisés de La Banque Postale.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition">
                Découvrez nos solutions
              </button>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4">
          <button 
            onClick={onNavigateToLogin}
            className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={onNavigateToLogin}
            className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}