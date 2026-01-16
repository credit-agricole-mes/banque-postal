import React from 'react';
import { Search, Bell } from 'lucide-react';

export default function Header({ onNavigateToLogin, onNavigateToInscription }) {
  return (
    <header className="sticky top-0 z-30 shadow-sm">
      {/* Barre de navigation supérieure */}
      <nav className="bg-teal-700 flex items-center text-white text-xs sm:text-sm overflow-x-auto">
        <div className="flex items-center ml-auto mr-2 sm:mr-4 whitespace-nowrap">
          <button 
            onClick={onNavigateToLogin} 
            className="bg-teal-800 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 hover:bg-teal-900 transition font-medium text-xs sm:text-sm"
          >
            Particuliers
          </button>
          <button 
            onClick={onNavigateToLogin} 
            className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 hover:bg-teal-600 transition text-xs sm:text-sm"
          >
            Banque privée
          </button>
          <button 
            onClick={onNavigateToLogin} 
            className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 hover:bg-teal-600 transition text-xs sm:text-sm hidden sm:block"
          >
            Professionnels
          </button>
          <button 
            onClick={onNavigateToLogin} 
            className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 hover:bg-teal-600 transition text-xs sm:text-sm"
          >
            Entreprises
          </button>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 px-2 sm:px-4 whitespace-nowrap">
          <button onClick={onNavigateToLogin} className="hover:opacity-80 text-xs sm:text-sm hidden sm:block">
            Accessibilité
          </button>
          <button onClick={onNavigateToLogin} className="hover:opacity-80 flex items-center gap-1 text-xs">
            FR <span className="text-xs">▼</span>
          </button>
        </div>
      </nav>

      {/* Logo et boutons */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/I11.jpeg" 
                  alt="La Banque Postale" 
                  className="h-8 w-auto"
                />
                <span className="text-sm font-semibold text-gray-900">LA BANQUE POSTALE</span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={onNavigateToLogin} className="hover:bg-gray-100 p-2 rounded-full transition">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
                <button onClick={onNavigateToLogin} className="hover:bg-gray-100 p-2 rounded-full transition">
                  <Bell className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={onNavigateToInscription}
                className="flex-1 bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded-full text-sm font-medium text-white transition shadow-sm"
              >
                Devenir client
              </button>
              <button 
                onClick={onNavigateToLogin}
                className="flex-1 bg-blue-700 hover:bg-blue-800 px-4 py-2.5 rounded-full text-sm font-medium text-white transition shadow-sm"
              >
                Mes comptes
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center gap-6">
              <img 
                src="/images/I11.jpeg" 
                alt="La Banque Postale" 
                className="h-12 w-auto"
              />
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold text-gray-900">LA BANQUE POSTALE</h1>
                <span className="text-gray-300">|</span>
                <p className="text-sm text-gray-600">La banque citoyenne</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={onNavigateToLogin}
                className="hover:bg-gray-100 p-2 rounded-full transition"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={onNavigateToLogin}
                className="hover:bg-gray-100 p-2 rounded-full transition"
              >
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={onNavigateToInscription}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2.5 rounded-full text-sm font-medium text-white transition shadow-sm ml-2"
              >
                Devenir client
              </button>
              <button 
                onClick={onNavigateToLogin}
                className="bg-blue-700 hover:bg-blue-800 px-6 py-2.5 rounded-full text-sm font-medium text-white transition shadow-sm"
              >
                Accéder à mes comptes
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}