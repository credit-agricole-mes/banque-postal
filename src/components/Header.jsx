import React, { useState } from 'react';
import { Search, Menu as MenuIcon, User, X, CreditCard, Coins, Shield, Wallet, TrendingUp, Phone, Users, Gift } from 'lucide-react';

export default function Header({ onNavigateToLogin, onNavigateToInscription }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { icon: CreditCard, label: 'Gérer ses comptes' },
    { icon: Coins, label: 'Emprunter' },
    { icon: Shield, label: 'Assurer et sécuriser' },
    { icon: Wallet, label: 'Épargner' },
    { icon: TrendingUp, label: 'Investir en bourse' },
    { icon: Phone, label: 'Nous contacter' },
    { icon: Users, label: 'Vous et vos besoins' },
    { icon: Gift, label: 'Ma banque et moi' },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 bg-white shadow-sm">
        {/* Ligne du haut: Changer de site + Particuliers */}
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
            <div className="flex justify-end items-center gap-4 text-sm">
              <span className="text-gray-600">Changer de site</span>
              <button className="flex items-center gap-2 text-blue-900 font-semibold hover:opacity-80">
                Particuliers
                <span className="text-lg">⌄</span>
              </button>
            </div>
          </div>
        </div>

        {/* Ligne du bas: Logo + Séparateur + Icône user | Recherche + Menu */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Gauche: Logo + Séparateur + Icône user */}
              <div className="flex items-center gap-4 sm:gap-6">
                <img 
                  src="/images/I11.jpeg" 
                  alt="La Banque Postale" 
                  className="h-10 sm:h-12 md:h-16 w-auto"
                />
                
                {/* Ligne verticale séparatrice */}
                <div className="h-12 sm:h-16 w-px bg-gray-300"></div>
                
                {/* Icône utilisateur avec cercle */}
                <button 
                  onClick={onNavigateToLogin}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 transition"
                >
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
              </div>
              
              {/* Droite: Recherche + Menu */}
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Icône recherche */}
                <button 
                  onClick={onNavigateToLogin}
                  className="hover:opacity-70 transition"
                >
                  <Search className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" />
                </button>
                
                {/* Menu hamburger */}
                <button 
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="hover:opacity-70 transition"
                >
                  {menuOpen ? (
                    <X className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" />
                  ) : (
                    <MenuIcon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu déroulant */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div 
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          
          {/* Menu latéral droit */}
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-6">
              {/* Bouton fermer */}
              <div className="flex justify-end mb-6">
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Menu items */}
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      onNavigateToLogin();
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
                  >
                    <item.icon size={20} className="text-blue-900" />
                    <span className="text-gray-800">{item.label}</span>
                  </button>
                ))}
              </nav>

              {/* Section supplémentaire */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => {
                    onNavigateToLogin();
                    setMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Gift size={20} className="text-green-600" />
                  <span className="text-gray-800">Ma banque s'engage</span>
                </button>
                
                <button 
                  onClick={() => {
                    onNavigateToLogin();
                    setMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mt-2"
                >
                  <Shield size={20} className="text-green-600" />
                  <span className="text-gray-800 text-sm">Sécurité, conseils et bonnes pratiques</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}