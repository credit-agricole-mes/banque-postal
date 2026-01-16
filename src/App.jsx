import React, { useState, useEffect, useRef } from 'react';
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

// Pages existantes
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
  const [virementData, setVirementData] = useState(null);
  
  const hasRedirectedToDashboard = useRef(false);

  useEffect(() => {
    if (user && currentPage === 'home' && !hasRedirectedToDashboard.current) {
      console.log('🏠 Redirection automatique vers dashboard');
      setCurrentPage('dashboard');
      hasRedirectedToDashboard.current = true;
    }
    
    if (!user) {
      hasRedirectedToDashboard.current = false;
    }
  }, [user, currentPage]);

  const navigate = (page) => {
    console.log('🧭 Navigation vers:', page);
    setCurrentPage(page);
  };

  const handleVirementSuccess = (data) => {
    console.log('✅ App.jsx - Callback virement reçu');
    console.log('📦 Données du virement:', data);
    setVirementData(data);
    console.log('💾 Données sauvegardées dans App.jsx');
  };

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

  if (currentPage === 'login') {
    return <LoginPage navigate={navigate} />;
  }

  if (currentPage === 'inscription') {
    return <InscriptionPage navigate={navigate} />;
  }

  if (currentPage === 'dashboard' || currentPage === 'solde') {
    return <DashboardPage navigate={navigate} />;
  }

  if (currentPage === 'historique') {
    return <HistoriquePage navigate={navigate} />;
  }

  if (currentPage === 'virement') {
    return (
      <VirementPage 
        navigate={navigate} 
        onVirementSuccess={handleVirementSuccess}
      />
    );
  }

  if (currentPage === 'recu') {
    console.log('📄 Affichage de RecuPage avec virementData:', virementData);
    return (
      <RecuPage 
        navigate={navigate} 
        virementData={virementData}
      />
    );
  }

  if (currentPage === 'cartes') {
    return <CartesPage user={user} navigate={navigate} />;
  }

  if (currentPage === 'rib') {
    return <RibPage user={user} navigate={navigate} />;
  }

  if (currentPage === 'ajouter-beneficiaire') {
    return <AjouterBeneficiaire navigate={navigate} />;
  }

  if (currentPage === 'change-password') {
    return <ChangePasswordPage navigate={navigate} />;
  }

  // Page d'accueil - SANS SIDEBAR
  return (
    <div className="min-h-screen bg-gray-50">
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
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}