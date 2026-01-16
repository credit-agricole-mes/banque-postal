import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 mx-4 sm:mx-6 my-6 sm:my-8 rounded-lg overflow-hidden">
      {/* Image de fond */}
      <img 
        src="/images/I1.jpeg" 
        alt="Offre Boostée - La Banque Postale"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay avec texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 sm:p-6 lg:p-8">
        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Offre Boostée : Votre projet à 0€ de frais de dossier</h2>
        <p className="text-white text-xs sm:text-sm mb-2">du 08 au 25 janvier 2026 inclus !</p>
        <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4">Pour toute souscription à partir de 8 000 € d'un Prêt personnel Auto, Travaux ou Projet pendant l'Offre Boostée</p>
        <button className="bg-white text-blue-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-100 transition w-full sm:w-auto max-w-xs">
          Découvrir notre offre
        </button>
      </div>
    </div>
  );
}