import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer({ onNavigateToLogin }) {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Section principale avec logo et description */}
      <div className="bg-teal-800 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 mb-6">
            <img 
              src="/images/I11.jpeg" 
              alt="La Banque Postale" 
              className="h-16 w-auto bg-white p-2 rounded"
            />
            <div className="border-l-2 border-white pl-4">
              <h3 className="text-xl font-bold">Citoyenne</h3>
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            Née en 2006, notre banque a grandi avec vous. Citoyenne, ouverte et accessible à tous, nous revendiquons l'ambition d'accompagner nos 20 millions de clients avec des offres et services performants, la modernité radicale de notre engagement citoyen et notre héritage postal. Aujourd'hui La Banque Postale partage les rêves et les exigences de sa génération.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex gap-4 mb-8">
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <Facebook className="w-6 h-6 text-teal-800" />
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <Instagram className="w-6 h-6 text-teal-800" />
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <Linkedin className="w-6 h-6 text-teal-800" />
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <svg className="w-6 h-6 text-teal-800" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <Youtube className="w-6 h-6 text-teal-800" />
            </a>
          </div>

          {/* Newsletter */}
          <button 
            onClick={onNavigateToLogin}
            className="border-2 border-white text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-teal-800 transition w-full sm:w-auto"
          >
            Abonnez-vous à la Newsletter
          </button>

          {/* 4 sections avec icônes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 pt-8 border-t border-white/30">
            <button 
              onClick={onNavigateToLogin}
              className="flex items-center gap-4 text-left hover:opacity-80 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Espace sourds et</p>
                <p className="font-semibold">malentendants</p>
              </div>
            </button>

            <button 
              onClick={onNavigateToLogin}
              className="flex items-center gap-4 text-left hover:opacity-80 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Recherche bureau</p>
                <p className="font-semibold">de poste</p>
              </div>
            </button>

            <button 
              onClick={onNavigateToLogin}
              className="flex items-center gap-4 text-left hover:opacity-80 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Foire aux</p>
                <p className="font-semibold">questions et</p>
                <p className="font-semibold">centre d'aide</p>
              </div>
            </button>

            <button 
              onClick={onNavigateToLogin}
              className="flex items-center gap-4 text-left hover:opacity-80 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Nous contacter</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Liens footer */}
      <div className="bg-white text-gray-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs sm:text-sm">
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Mentions légales</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Tarifs bancaires</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Convention de compte</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Protection des Données à Caractère Personnel</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Filiales et partenaires</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Cookies</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Actualiser vos informations</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Contestation et réclamation</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Coordonnées Centres Financiers</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Recherche bureau de poste</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Assistance technique</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Alertes fraudes et points de vigilance</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Actualités réglementaires</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">CGU</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Aide navigateur et systèmes d'exploitation</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Vider le cache de votre navigateur</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Lexique</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Aide et accessibilité</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Accessibilité – Partiellement conforme</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Espace candidature</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">BFI - Banque de Financement et d'Investissement</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Le fonds de garantie des dépôts et de résolution</button>
            <button onClick={onNavigateToLogin} className="hover:text-blue-600">Résilier</button>
          </div>
        </div>
      </div>

      {/* Mentions légales détaillées */}
      <div className="bg-gray-100 text-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="font-bold text-sm mb-4">Mentions légales :</h3>
          
          <div className="space-y-4 text-xs leading-relaxed">
            <p>
              <strong>Prêteur :</strong> LA BANQUE POSTALE CONSUMER FINANCE - S.A. à Directoire et Conseil de Surveillance. Capital social 243 250 000 €. 1 avenue François Mitterrand 93212 La Plaine Saint Denis Cedex. RCS Bobigny n°487 779 035. IDU EMP FR232875_01MFVK. Intermédiaire d'assurance, inscrit à l'ORIAS sous le n°09 051 330.
            </p>
            
            <p>
              <strong>Distributeur/Intermédiaire de crédit :</strong> LA BANQUE POSTALE - S.A. à Directoire et Conseil de Surveillance. Capital social 6 585 350 218 €. 115 rue de Sèvres, 75275 Paris Cedex 06. RCS Paris n°421100645. ORIAS n°07023424.
            </p>
            
            <p>
              <strong>Assureur :</strong> SOGECAP - Société Anonyme d'Assurance sur la Vie et de Capitalisation au capital de 1 263 556 110 €. Siège social : Tour D2 - 17 bis place des Reflets 92919 Paris La Défense CEDEX. RCS Nanterre n°086 380 730. Entreprise régie par le Code des assurances.
            </p>
            
            <p>
              <strong>CNP Assurances IARD,</strong> dénommée sous la marque LA BANQUE POSTALE ASSURANCE IARD - Société Anonyme au capital de 146 952 480 euros. Siège social : 4 Promenade Cœur de ville, 92130, Issy-les-Moulineaux. RCS Nanterre 493 253 652. Entreprise régie par le Code des assurances. IDU EMP FR232845_01WXTG.
            </p>
            
            <p>
              <strong>La Banque Postale :</strong> Société Anonyme à Directoire et Conseil de Surveillance au capital de 6 585 350 218 euros. Siège social : 115, rue de Sèvres, 75275 Paris CEDEX 06. RCS Paris n°421100645. IDU EMP FR231771_01UJPN. ORIAS n°07 023 424.
            </p>
            
            <p>
              L'instance chargée du contrôle des activités de CNP Assurances IARD, de La Banque Postale est l'Autorité de Contrôle Prudentiel et de Résolution - 4 Place de Budapest -CS 92459 - 75436 Paris CEDEX 09.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}