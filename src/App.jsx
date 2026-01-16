import React, { useState, useEffect, useRef } from 'react';
import { CreditCard, Coins, Shield, Wallet, TrendingUp, Phone, Users, Gift, Menu, X } from 'lucide-react';
import { AuthProvider, useAuth } from './context/AuthContext';

// Composants Header et Footer
import Header from './components/Header';
import Footer from './components/Footer';

// Nouveaux composants La Banque Postale

import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import OffersSection from './components/OffersSection';
import SolutionsSection from './components/SolutionsSection';
import MagazineSection from './components/MagazineSection';
import ProductsSection from './components/ProductsSection';

// Pages existantes (ne pas toucher)
import LoginPage from './components/LoginPage';
import InscriptionPage from './components/InscriptionPage';
import DashboardPage from './components/DashboardPage';
import HistoriquePage from './components/HistoriquePage';
import VirementPage from './components/VirementPage';
import CartesPage from './components/CartesPage';
import RibPage from './components/RibPage';
import RecuPage from './components/RecuPage';
import AjouterBeneficiaire from './components/AjouterBeneficiaire';
import ChangePasswordPage from './components/ChangePasswordPage';


function AppContent() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [virementData, setVirementData] = useState(null);
  
  // ⚡ Utiliser useRef pour éviter les boucles infinies
  const hasRedirectedToDashboard = useRef(false);

  // ✅ CORRECTION : Redirection initiale uniquement (une seule fois)
  useEffect(() => {
    // Rediriger vers dashboard seulement si :
    // 1. L'utilisateur est connecté
    // 2. On est sur la page home
    // 3. On n'a pas encore redirigé
    if (user && currentPage === 'home' && !hasRedirectedToDashboard.current) {
      console.log('🏠 Redirection automatique vers dashboard');
      setCurrentPage('dashboard');
      hasRedirectedToDashboard.current = true;
    }
    
    // Si l'utilisateur se déconnecte, réinitialiser le flag
    if (!user) {
      hasRedirectedToDashboard.current = false;
    }
  }, [user, currentPage]);

  const navigate = (page) => {
    console.log('🧭 Navigation vers:', page);
    setCurrentPage(page);
    setSidebarOpen(false);
  };

  // ⚡⚡⚡ CORRECTION CRITIQUE : Cette fonction doit SEULEMENT sauvegarder les données
  // La navigation est gérée par VirementPage.jsx
  const handleVirementSuccess = (data) => {
    console.log('✅ App.jsx - Callback virement reçu');
    console.log('📦 Données du virement:', data);
    
    // Sauvegarder les données dans le state
    setVirementData(data);
    
    console.log('💾 Données sauvegardées dans App.jsx, état virementData mis à jour');
  };

  const menuItems = [
    { icon: Users, label: 'Professionnels', mobileOnly: true },
    { icon: Shield, label: 'Accessibilité', mobileOnly: true },
    { icon: CreditCard, label: 'Gérer ses comptes' },
    { icon: Coins, label: 'Emprunter' },
    { icon: Shield, label: 'Assurer et sécuriser' },
    { icon: Wallet, label: 'Épargner' },
    { icon: TrendingUp, label: 'Investir en bourse' },
    { icon: Phone, label: 'Nous contacter' },
    { icon: Users, label: 'Vous et vos besoins' },
    { icon: Gift, label: 'Ma banque et moi' },
  ];

  // Afficher un loader pendant la vérification de l'authentification
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Page de connexion
  if (currentPage === 'login') {
    return <LoginPage navigate={navigate} />;
  }

  // Page d'inscription
  if (currentPage === 'inscription') {
    return <InscriptionPage navigate={navigate} />;
  }

  // Page Dashboard
  if (currentPage === 'dashboard' || currentPage === 'solde') {
    return <DashboardPage navigate={navigate} />;
  }

  // Page Historique
  if (currentPage === 'historique') {
    return <HistoriquePage navigate={navigate} />;
  }

  // Page Virement
  if (currentPage === 'virement') {
    return (
      <VirementPage 
        navigate={navigate} 
        onVirementSuccess={handleVirementSuccess}
      />
    );
  }

  // ⚡⚡⚡ Page Reçu - AVEC LOG DE DEBUG
  if (currentPage === 'recu') {
    console.log('📄 Affichage de RecuPage avec virementData:', virementData);
    return (
      <RecuPage 
        navigate={navigate} 
        virementData={virementData}
      />
    );
  }

  // Page Cartes
  if (currentPage === 'cartes') {
    return <CartesPage user={user} navigate={navigate} />;
  }

  // Page RIB
  if (currentPage === 'rib') {
    return <RibPage user={user} navigate={navigate} />;
  }

  // NOUVELLES PAGES
  if (currentPage === 'ajouter-beneficiaire') {
    return <AjouterBeneficiaire navigate={navigate} />;
  }

  // ⚡ NOUVELLE PAGE - Changement de mot de passe
  if (currentPage === 'change-password') {
    return <ChangePasswordPage navigate={navigate} />;
  }

  // Page d'accueil
  return (
    <div className="flex min-h-screen">
      {/* Bouton menu mobile */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-0.5 sm:top-1 left-2 sm:left-4 z-50 p-1.5 sm:p-2 bg-gray-800 text-white rounded-md shadow-lg"
      >
        {sidebarOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
      </button>

      {/* Sidebar - Fond gris foncé */}
      <aside
        className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-transform duration-300 z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-48 sm:w-56 overflow-y-auto scrollbar-hide`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div className="p-3 sm:p-4">
          <nav className="space-y-0.5 sm:space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate('login')}
                className={`w-full flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-lg hover:bg-gray-700 transition-colors text-left text-xs sm:text-sm ${
                  item.mobileOnly ? 'lg:hidden' : ''
                }`}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700">
            <button 
              onClick={() => navigate('login')}
              className="w-full flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Gift size={16} className="text-green-400" />
              <span className="text-xs sm:text-sm">Ma banque s'engage</span>
            </button>
            
            <button 
              onClick={() => navigate('login')}
              className="w-full flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-lg hover:bg-gray-700 transition-colors mt-1.5 sm:mt-2"
            >
              <Shield size={16} className="text-green-400" />
              <span className="text-xs sm:text-sm">Sécurité, conseils et bonnes pratiques</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
        />
      )}

      {/* Zone de contenu principale - Fond gris clair */}
      <main className="flex-1 lg:ml-48 xl:ml-56 bg-gray-50">
        <Header 
          onNavigateToLogin={() => navigate('login')}
          onNavigateToInscription={() => navigate('inscription')}
        />
        
        <HeroSection />
        <ServicesSection onNavigateToLogin={() => navigate('login')} />
        <OffersSection onNavigateToLogin={() => navigate('login')} />
        <SolutionsSection onNavigateToLogin={() => navigate('login')} />
        <MagazineSection onNavigateToLogin={() => navigate('login')} />
        <ProductsSection onNavigateToLogin={() => navigate('login')} />
        <Footer onNavigateToLogin={() => navigate('login')} />
      </main>
    </div>
  );
}

// Composant principal avec AuthProvider
export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}