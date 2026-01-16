import React from 'react';
import { CreditCard, HandCoins, Shield, Coins } from 'lucide-react';

export default function ServicesSection({ onNavigateToLogin }) {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* 4 boutons de services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <button 
            onClick={onNavigateToLogin}
            className="bg-white border-2 border-blue-600 rounded-lg p-6 hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3">
              <CreditCard className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-blue-600 font-bold text-sm">Ouvrir un compte</h3>
          </button>

          <button 
            onClick={onNavigateToLogin}
            className="bg-white border-2 border-blue-600 rounded-lg p-6 hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3">
              <HandCoins className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-blue-600 font-bold text-sm">Financer un projet</h3>
          </button>

          <button 
            onClick={onNavigateToLogin}
            className="bg-white border-2 border-blue-600 rounded-lg p-6 hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-blue-600 font-bold text-sm">Vous assurer</h3>
          </button>

          <button 
            onClick={onNavigateToLogin}
            className="bg-white border-2 border-blue-600 rounded-lg p-6 hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3">
              <Coins className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-blue-600 font-bold text-sm">Mettre de l'argent de côté</h3>
          </button>
        </div>

        {/* Section Bienvenue */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Bienvenue
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
            à La Banque Postale,
          </h3>
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">
            citoyenne
          </h3>
        </div>
      </div>
    </div>
  );
}