import React from 'react';

export default function OffersSection({ onNavigateToLogin }) {
  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Carte Assurance Auto */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="relative h-48">
              <img 
                src="/images/I2.jpeg" 
                alt="Assurance Auto" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-blue-600 font-semibold mb-2">Offre Exclu Web</p>
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Assurance Auto : profitez de 2 mois offerts⁽³⁾
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Profitez de 2 mois offerts⁽³⁾ pour toute souscription du 05/01/2026 au 15/02/2026.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition">
                Commencer mon devis
              </button>
            </div>
          </div>

          {/* Carte Pièces Jaunes */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="relative h-48">
              <img 
                src="/images/I3.jpeg" 
                alt="Pièces Jaunes" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Soutenez les Pièces Jaunes pour améliorer le quotidien des enfants hospitalisés
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                La Banque Postale renouvelle son engagement aux côtés de la Fondation des Hôpitaux pour l'opération Pièces Jaunes, afin d'améliorer le quotidien des enfants et adolescents hospitalisés partout en France.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition">
                Je fais un don
              </button>
            </div>
          </div>

          {/* Carte e-Carte Bleue */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="relative h-48">
              <img 
                src="/images/I4.jpeg" 
                alt="e-Carte Bleue" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Sécuriser vos achats sur internet avec le service e-Carte Bleue⁽⁴⁾
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Protégez vos données cartes bancaires : Créez une e-carte dédiée et payez vos achats à distance ou vos abonnements en toute confiance.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition">
                Découvrir le service e-Carte Bleue
              </button>
            </div>
          </div>

          {/* Carte Fraude */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="relative h-48">
              <img 
                src="/images/I5.jpeg" 
                alt="Vigilance Fraude" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Fraude : Vigilance renforcée !
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Restez en alerte</strong> sur les tentatives d'appels par de faux conseillers bancaires. En cas de doute, mettez fin à l'appel et contactez votre conseiller bancaire habituel ou le 3639. (service gratuit + prix appel)
              </p>
              <p className="text-xs text-gray-500">
                Pour rappel, les conseillers de La Banque Postale ne vous demanderont jamais de leur communiquer votre code secret ni les données de votre carte bancaire, de code de sécurité reçu par SMS ni même vos identifiants et codes d'accès à votre banque à distance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}