import React from 'react';

export default function ProductsSection({ onNavigateToLogin }) {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8">
          Les produits préférés des clients de La Banque Postale
        </h2>

        {/* Comptes et cartes */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Comptes et cartes</h3>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={onNavigateToLogin}
                className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                La Formule de Compte
              </button>
            </li>
            <li>
              <button 
                onClick={onNavigateToLogin}
                className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Le compte spécial jeune 18-29 ans
              </button>
            </li>
            <li>
              <button 
                onClick={onNavigateToLogin}
                className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Le compte mineur 12-17 ans
              </button>
            </li>
            <li>
              <button 
                onClick={onNavigateToLogin}
                className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                La carte Visa Premier
              </button>
            </li>
            <li>
              <button 
                onClick={onNavigateToLogin}
                className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Western Union
              </button>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Crédits consommation */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Crédits consommation</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Prêt personnel Projet
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Prêt personnel Auto
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Prêt personnel Véhicule vert
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Prêt personnel Travaux
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Prêt personnel Travaux vert
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Rachat de crédit
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Prêt personnel Étudiant
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Assurance crédit à la consommation
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Convention AERAS
                </button>
              </li>
            </ul>
          </div>

          {/* Prêts immobiliers */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Prêts immobiliers</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Prêt habitat taux fixe
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Prêt Relais
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Prêt à taux zéro
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Prêt Conventionné
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Prêt à l'Accession Sociale
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Eco prêt à taux zéro
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Assurance emprunteur
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Assurance perte d'emploi
                </button>
              </li>
            </ul>
          </div>

          {/* Épargne et placements financiers */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Épargne et placements financiers</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Livret A
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Livret jeune
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  LDDS
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Assurance Vie
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Placements financiers
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  ISR
                </button>
              </li>
            </ul>
          </div>

          {/* Assurances */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Assurances</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Assurance Auto
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Assurance Habitation
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Assurance Santé
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Assurance 2 roues
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Protection juridique
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Assurance des Appareils Nomades
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Assurance Scolaire
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}