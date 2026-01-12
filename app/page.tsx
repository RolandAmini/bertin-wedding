"use client";


import React, { useState } from 'react';
import { Heart, MapPin, Calendar, Clock, ChevronDown } from 'lucide-react';

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setShowContent(true), 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        {!showContent ? (
          // Enveloppe fermée avec photos
          <div className="relative perspective-1000">
            {/* Fond bois décoratif */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-stone-800/10 rounded-3xl blur-2xl"></div>
            
            <div className="relative bg-stone-100 rounded-2xl shadow-2xl p-8 overflow-hidden">
              {/* Décorations végétales */}
              <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
                <div className="w-full h-full bg-emerald-200 rounded-full blur-xl"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30">
                <div className="w-full h-full bg-emerald-200 rounded-full blur-xl"></div>
              </div>

              {/* Carte avec photos en triptyque */}
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden mb-8">
                {/* Bande supérieure avec photos */}
                <div className="grid grid-cols-3 gap-0 h-64 md:h-96">
                  <div className="relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-400 to-stone-300 flex items-center justify-center">
                      <div className="text-white text-6xl md:text-8xl font-serif">16</div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  </div>
                  <div className="relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-500 to-stone-400 flex items-center justify-center">
                      <div className="text-white text-6xl md:text-8xl font-serif">12</div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  </div>
                  <div className="relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-400 to-stone-300 flex items-center justify-center">
                      <div className="text-white text-6xl md:text-8xl font-serif">25</div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  </div>
                </div>

                {/* Bande de texte */}
                <div className="bg-white py-4 text-center border-t-2 border-stone-200">
                  <p className="text-stone-600 text-sm md:text-base tracking-widest uppercase font-light">
                    Save the Date  |  AKILIMALI BERTIN & DINAH PENUEL |  16 Décembre 2025
                  </p>
                </div>
              </div>

              {/* Enveloppe */}
              <div className="relative">
                <div 
                  className={`relative bg-stone-200 rounded-lg shadow-lg transition-all duration-700 ${
                    isOpen ? 'transform -translate-y-4' : ''
                  }`}
                  style={{ 
                    height: '300px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Rabat de l'enveloppe */}
                  <div 
                    className={`absolute inset-x-0 top-0 bg-gradient-to-b from-stone-300 to-stone-200 transition-all duration-700 origin-top shadow-lg`}
                    style={{
                      height: '150px',
                      clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                      transform: isOpen ? 'rotateX(-180deg)' : 'rotateX(0deg)',
                      transformStyle: 'preserve-3d',
                      zIndex: 10
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-amber-600 fill-amber-600 opacity-50" />
                    </div>
                  </div>

                  {/* Corps de l'enveloppe */}
                  <div className="absolute inset-0 bg-stone-200 rounded-lg flex items-center justify-center">
                    {!isOpen && (
                      <button
                        onClick={handleOpen}
                        className="group flex flex-col items-center space-y-4 px-8 py-6 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-white/70 transition-all transform hover:scale-105 shadow-lg"
                      >
                        <Heart className="w-12 h-12 text-amber-600 fill-amber-600 animate-pulse" />
                        <span className="text-stone-700 text-lg font-medium">Ouvrir l'invitation</span>
                        <ChevronDown className="w-6 h-6 text-stone-500 animate-bounce" />
                      </button>
                    )}
                  </div>

                  {/* Lignes décoratives de l'enveloppe */}
                  <div className="absolute inset-x-8 top-1/2 h-px bg-stone-300/50"></div>
                  <div className="absolute inset-x-12 top-1/2 mt-4 h-px bg-stone-300/50"></div>
                </div>
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute top-4 left-4 w-16 h-16 opacity-20">
                <svg viewBox="0 0 100 100" className="text-emerald-600 fill-current">
                  <path d="M50 20 L60 40 L80 45 L65 60 L68 80 L50 70 L32 80 L35 60 L20 45 L40 40 Z" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 w-16 h-16 opacity-20 rotate-45">
                <svg viewBox="0 0 100 100" className="text-emerald-600 fill-current">
                  <path d="M50 20 L60 40 L80 45 L65 60 L68 80 L50 70 L32 80 L35 60 L20 45 L40 40 Z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          // Contenu complet de l'invitation
          <div className="animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* En-tête élégant */}
              <div className="relative bg-gradient-to-br from-amber-50 to-stone-50 pt-16 pb-12 px-8 text-center border-b border-stone-200">
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <Heart className="w-16 h-16 text-amber-600 fill-amber-600 animate-pulse" />
                </div>
                <div className="mt-12">
                  <h1 className="text-6xl md:text-7xl font-serif text-stone-800 mb-4 tracking-wide">
                    Amanda & Daniel
                  </h1>
                  <div className="w-32 h-px bg-amber-600 mx-auto mb-4"></div>
                  <p className="text-2xl text-stone-600 font-light italic">
                    Nous unissons nos vies
                  </p>
                </div>
              </div>

              {/* Message principal */}
              <div className="px-8 py-12 bg-white">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <p className="text-xl text-stone-700 leading-relaxed font-light">
                    C'est avec une joie immense que nous vous invitons à célébrer notre mariage.
                    Votre présence sera le plus beau des cadeaux pour partager ce moment unique.
                  </p>
                </div>

                {/* Détails de l'événement */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                  <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-stone-200">
                    <Calendar className="w-10 h-10 text-amber-700 mb-4 mx-auto" />
                    <h3 className="text-lg font-serif font-semibold text-stone-800 mb-3 text-center">Date</h3>
                    <p className="text-stone-700 text-center font-light">Samedi</p>
                    <p className="text-2xl text-stone-800 text-center font-serif">16 Décembre</p>
                    <p className="text-stone-700 text-center font-light">2025</p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-stone-200">
                    <Clock className="w-10 h-10 text-amber-700 mb-4 mx-auto" />
                    <h3 className="text-lg font-serif font-semibold text-stone-800 mb-3 text-center">Horaire</h3>
                    <p className="text-stone-700 text-center">Cérémonie</p>
                    <p className="text-2xl text-stone-800 text-center font-serif">15h00</p>
                    <p className="text-stone-600 text-sm text-center mt-2">Réception à suivre</p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-stone-200">
                    <MapPin className="w-10 h-10 text-amber-700 mb-4 mx-auto" />
                    <h3 className="text-lg font-serif font-semibold text-stone-800 mb-3 text-center">Lieu</h3>
                    <p className="text-stone-800 font-medium text-center">Villa San Francisco</p>
                    <p className="text-stone-600 text-sm text-center">Golden Gate Park</p>
                    <p className="text-stone-600 text-sm text-center">San Francisco, CA</p>
                  </div>
                </div>

                {/* Programme de la journée */}
                <div className="max-w-2xl mx-auto mb-12 bg-gradient-to-br from-stone-50 to-amber-50 p-8 rounded-xl border border-stone-200">
                  <h3 className="text-2xl font-serif text-stone-800 text-center mb-6">Programme</h3>
                  <div className="space-y-4">
                    {[
                      { time: '15h00', event: 'Cérémonie de mariage' },
                      { time: '16h30', event: 'Cocktail & Photos' },
                      { time: '18h00', event: 'Dîner de gala' },
                      { time: '21h00', event: 'Ouverture du bal' },
                      { time: '00h00', event: 'Soirée dansante' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between pb-3 border-b border-stone-200 last:border-0">
                        <span className="text-amber-700 font-semibold">{item.time}</span>
                        <span className="text-stone-700 font-light">{item.event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RSVP */}
                <div className="text-center space-y-6">
                  <p className="text-stone-600 text-lg font-light">
                    Merci de confirmer votre présence avant le <span className="font-semibold">1er Novembre 2025</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg">
                      Confirmer ma présence
                    </button>
                    <button className="bg-white hover:bg-stone-50 text-amber-700 border-2 border-amber-700 px-10 py-4 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg">
                      Informations pratiques
                    </button>
                  </div>
                </div>

                {/* Citation */}
                <div className="text-center pt-12 mt-12 border-t border-stone-200">
                  <p className="text-stone-600 italic text-lg font-light max-w-2xl mx-auto">
                    "Dans chaque instant partagé, nous avons trouvé l'éternité.
                    Aujourd'hui, nous la célébrons avec vous."
                  </p>
                  <div className="flex items-center justify-center mt-6 space-x-3">
                    <div className="w-8 h-px bg-amber-600"></div>
                    <Heart className="w-5 h-5 text-amber-600 fill-amber-600" />
                    <div className="w-8 h-px bg-amber-600"></div>
                  </div>
                </div>
              </div>

              {/* Pied de page */}
              <div className="bg-gradient-to-r from-amber-100 via-stone-100 to-amber-100 py-8 text-center border-t border-stone-200">
                <p className="text-stone-700 font-serif text-lg">Amanda & Daniel</p>
                <p className="text-stone-500 text-sm mt-2">16.12.2025 • San Francisco</p>
              </div>
            </div>

            {/* Bouton pour fermer */}
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setShowContent(false);
                  setIsOpen(false);
                }}
                className="text-stone-600 hover:text-stone-800 text-sm underline"
              >
                Refermer l'invitation
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}