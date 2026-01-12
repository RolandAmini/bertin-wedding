"use client";

import React, { useState } from 'react';
import { Heart, MapPin, Calendar, Clock, ChevronRight, ArrowLeft, Camera, Gift, Music, Utensils } from 'lucide-react';

export default function WeddingInvitation() {
  const [currentPage, setCurrentPage] = useState('cover');

  // Page de couverture avec photo et carte
  const CoverPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Photo de fond avec overlay */}
        <div className="relative h-screen max-h-[800px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Image de fond (placeholder avec gradient) */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-300 to-amber-500">
            {/* Simulation d'une photo de couple au coucher du soleil */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-800/50 to-transparent"></div>
            </div>
          </div>

          {/* Overlay sombre subtil */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* En-tête avec noms et date */}
          <div className="absolute top-0 left-0 right-0 pt-12 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-3 drop-shadow-lg">
              Bertin & Dinah
            </h1>
            <p className="text-white text-xl tracking-wider drop-shadow-md">
              16.12.2025
            </p>
          </div>

          {/* Carte flottante au centre */}
          <div className="absolute inset-x-6 top-1/2 -translate-y-1/2">
            <div className="bg-white rounded-3xl shadow-2xl p-6 relative overflow-hidden">
              {/* Motifs floraux décoratifs */}
              <div className="absolute top-0 left-0 w-32 h-32">
                <svg viewBox="0 0 100 100" className="text-emerald-200 opacity-40">
                  <circle cx="20" cy="20" r="15" fill="currentColor"/>
                  <path d="M10 25 Q15 35 25 30 Q35 25 30 15" fill="currentColor"/>
                  <path d="M25 10 Q35 15 30 25 Q25 35 15 30" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 rotate-180">
                <svg viewBox="0 0 100 100" className="text-rose-200 opacity-40">
                  <circle cx="20" cy="20" r="15" fill="currentColor"/>
                  <path d="M10 25 Q15 35 25 30 Q35 25 30 15" fill="currentColor"/>
                  <path d="M25 10 Q35 15 30 25 Q25 35 15 30" fill="currentColor"/>
                </svg>
              </div>

              {/* Contenu de la carte */}
              <div className="relative z-10">
                {/* Noms */}
                <h2 className="text-3xl font-serif text-stone-800 text-center mb-2">
                  Bertin & Dinah
                </h2>
                <p className="text-stone-600 text-center mb-4">16.12.2026</p>

                {/* Message */}
                <p className="text-stone-700 text-center text-sm mb-6 px-2 leading-relaxed">
                  Notre bonheur serait incomplet sans vous !
                </p>

                {/* Icônes avec informations */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-amber-400 flex items-center justify-center mb-2">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <p className="text-xs text-stone-600 text-center">Heure</p>
                    <p className="text-xs text-stone-800 font-medium">(15h00)</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-amber-400 flex items-center justify-center mb-2">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <p className="text-xs text-stone-600 text-center">Lieu</p>
                    <p className="text-xs text-stone-800 font-medium">(Kinshasa)</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-amber-400 flex items-center justify-center mb-2">
                      <Heart className="w-6 h-6 text-amber-600 fill-amber-600" />
                    </div>
                    <p className="text-xs text-stone-600 text-center">Chic</p>
                    <p className="text-xs text-stone-800 font-medium">(Élégant)</p>
                  </div>
                </div>

                {/* Détails supplémentaires */}
                <div className="text-center text-xs text-stone-500 mb-4">
                  Église Saint-Joseph • Réception à suivre
                </div>
              </div>
            </div>
          </div>

          {/* Bouton en bas */}
          <div className="absolute bottom-8 left-6 right-6">
            <button
              onClick={() => setCurrentPage('details')}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-full font-medium text-lg shadow-lg transition-all transform hover:scale-105"
            >
              Je serai présent(e) !
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Page des détails
  const DetailsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Bouton retour */}
        <button
          onClick={() => setCurrentPage('cover')}
          className="mb-6 flex items-center space-x-2 text-emerald-700 hover:text-emerald-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Retour</span>
        </button>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-8 px-6 text-center">
            <h2 className="text-4xl font-serif mb-2">Confirmation de présence</h2>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-px bg-white/50"></div>
              <Heart className="w-6 h-6 fill-white" />
              <div className="w-12 h-px bg-white/50"></div>
            </div>
          </div>

          {/* Photo des mariés (placeholder) */}
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-amber-300 via-orange-200 to-amber-400">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Camera className="w-16 h-16 mx-auto mb-3 opacity-50" />
                <p className="text-lg font-light">Bertin & Dinah</p>
              </div>
            </div>
          </div>

          {/* Informations détaillées */}
          <div className="p-8 space-y-8">
            {/* Horaire détaillé */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                <Calendar className="w-10 h-10 text-emerald-700 mb-4" />
                <h3 className="text-xl font-serif text-emerald-900 mb-3">Date & Heure</h3>
                <div className="space-y-2 text-emerald-700">
                  <p className="font-medium">Lundi 16 Décembre 2026</p>
                  <p className="text-sm">Cérémonie : 15h00</p>
                  <p className="text-sm">Réception : 18h00</p>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                <MapPin className="w-10 h-10 text-emerald-700 mb-4" />
                <h3 className="text-xl font-serif text-emerald-900 mb-3">Lieu</h3>
                <div className="space-y-2 text-emerald-700">
                  <p className="font-medium">Église Catholique Saint-Joseph</p>
                  <p className="text-sm">Avenue de la Paix</p>
                  <p className="text-sm">Gombe, Kinshasa, RDC</p>
                </div>
              </div>
            </div>

            {/* Programme de la journée */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl border border-emerald-200">
              <h3 className="text-2xl font-serif text-emerald-900 mb-6 text-center">Programme de la journée</h3>
              <div className="space-y-4">
                {[
                  { time: '15h00', icon: Heart, event: 'Cérémonie religieuse', desc: 'Église Saint-Joseph' },
                  { time: '16h30', icon: Camera, event: 'Séance photos', desc: 'Avec famille et amis' },
                  { time: '18h00', icon: Utensils, event: 'Cocktail & Dîner', desc: 'Salle de réception' },
                  { time: '21h00', icon: Music, event: 'Soirée dansante', desc: 'Animation musicale live' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 pb-4 border-b border-emerald-200 last:border-0">
                    <div className="flex-shrink-0 w-20 text-emerald-700 font-semibold">{item.time}</div>
                    <div className="flex-shrink-0">
                      <item.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-emerald-900">{item.event}</p>
                      <p className="text-sm text-emerald-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Informations pratiques */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white border border-emerald-200 rounded-lg hover:shadow-md transition-shadow">
                <Utensils className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-emerald-900">Repas complet</p>
                <p className="text-xs text-emerald-600">Menu gastronomique</p>
              </div>
              <div className="text-center p-4 bg-white border border-emerald-200 rounded-lg hover:shadow-md transition-shadow">
                <Music className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-emerald-900">Animation</p>
                <p className="text-xs text-emerald-600">DJ & orchestre live</p>
              </div>
              <div className="text-center p-4 bg-white border border-emerald-200 rounded-lg hover:shadow-md transition-shadow">
                <Gift className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-emerald-900">Tenue</p>
                <p className="text-xs text-emerald-600">Chic et élégante</p>
              </div>
            </div>

            {/* Formulaire RSVP */}
            <div className="bg-emerald-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-serif mb-4 text-center">Confirmez votre présence</h3>
              <p className="mb-6 text-emerald-100 text-center">
                Merci de confirmer avant le <span className="font-semibold">1er Novembre 2026</span>
              </p>
              
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Votre nom complet"
                  className="w-full px-4 py-3 rounded-lg text-stone-800 focus:ring-2 focus:ring-emerald-300 outline-none"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 rounded-lg text-stone-800 focus:ring-2 focus:ring-emerald-300 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Votre téléphone"
                  className="w-full px-4 py-3 rounded-lg text-stone-800 focus:ring-2 focus:ring-emerald-300 outline-none"
                />
                <select className="w-full px-4 py-3 rounded-lg text-stone-800 focus:ring-2 focus:ring-emerald-300 outline-none">
                  <option>Je serai présent(e)</option>
                  <option>Je viendrai accompagné(e)</option>
                  <option>Je ne pourrai pas venir</option>
                </select>
              </div>

              <button className="w-full bg-white text-emerald-700 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105">
                Envoyer ma confirmation
              </button>
            </div>

            {/* Message final */}
            <div className="text-center pt-6 border-t border-emerald-200">
              <p className="text-emerald-700 italic mb-4 text-lg">
                "Votre présence est le plus beau des cadeaux"
              </p>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-emerald-900 font-serif text-xl">Bertin & Dinah</span>
                <Heart className="w-5 h-5 text-emerald-600 fill-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentPage === 'cover' && <CoverPage />}
      {currentPage === 'details' && <DetailsPage />}
    </>
  );
}