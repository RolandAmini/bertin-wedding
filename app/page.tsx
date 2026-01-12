"use client";
import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Clock, 
  ChevronRight, 
  ArrowLeft, 
  Camera, 
  Gift, 
  Music, 
  Utensils 
} from 'lucide-react';

export default function WeddingInvitation() {
  const [currentPage, setCurrentPage] = useState('cover');

  // Page de couverture avec photo et carte
  const CoverPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Photo de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        {/* --- IMAGE DE FOND PRINCIPALE --- */}
        <img
          src="/berti1.jpeg"
          alt="Wedding background"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400/40 via-pink-300/30 to-orange-200/40" />
        
        {/* 2. Overlay sombre subtil global */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* En-tête avec noms et date */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-20">
        <h1 className="text-5xl md:text-6xl font-serif text-white drop-shadow-2xl mb-2">
          Bertin & Dinah
        </h1>
        <p className="text-2xl text-white/95 drop-shadow-lg font-light tracking-widest">
          16.12.2025
        </p>
      </div>

      {/* Carte flottante au centre */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/95 mt-70 mb-2 backdrop-blur-sm rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          {/* Motifs floraux décoratifs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full -mr-16 -mt-16 opacity-50" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-100 rounded-full -ml-12 -mb-12 opacity-50" />
          
          {/* Contenu de la carte */}
          <div className="relative z-10">
            {/* Noms */}
            <div className="text-center mb-6">
              <h2 className="text-4xl font-serif text-emerald-800 mb-2">
                Bertin & Dinah
              </h2>
              <div className="flex items-center justify-center space-x-2 text-emerald-600">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">16.12.2026</span>
              </div>
            </div>

            {/* Message */}
            <p className="text-center text-gray-700 text-lg mb-8 italic">
              Notre bonheur serait incomplet sans vous !
            </p>

            {/* Icônes avec informations */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-8 h-8 text-emerald-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Heure</p>
                <p className="text-xs text-gray-600">(15h00)</p>
              </div>
              
              <div className="text-center">
                <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-8 h-8 text-rose-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Lieu</p>
                <p className="text-xs text-gray-600">(Goma)</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Gift className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800">Chic</p>
                <p className="text-xs text-gray-600">(Élégant)</p>
              </div>
            </div>

            {/* Détails supplémentaires */}
            <div className="text-center text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
              Église Saint-Joseph • Réception à suivre
            </div>

            {/* Bouton en bas */}
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Bouton retour */}
        <button
          onClick={() => setCurrentPage('cover')}
          className="mb-6 flex items-center space-x-2 text-emerald-700 hover:text-emerald-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour</span>
        </button>

        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif text-emerald-800 mb-2">
            Confirmation de présence
          </h1>
        </div>

        {/* Photo des mariés (placeholder) */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <div className="aspect-video bg-gradient-to-br from-rose-200 to-pink-300 rounded-2xl mb-4 flex items-center justify-center">
            <div className="text-center">
              <Heart className="w-16 h-16 text-white mx-auto mb-2" />
              <p className="text-white text-xl font-serif">Bertin & Dinah</p>
            </div>
          </div>
        </div>

        {/* Informations détaillées */}
        <div className="space-y-6">
          {/* Horaire détaillé */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Date & Heure</h2>
            </div>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">Lundi 16 Décembre 2026</p>
              <p>Cérémonie : 15h00</p>
              <p>Réception : 18h00</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="w-6 h-6 text-rose-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Lieu</h2>
            </div>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">Église Catholique Saint-Joseph</p>
              <p>Avenue de la Paix</p>
              <p>Goma, Linda Hotel</p>
            </div>
          </div>

          {/* Programme de la journée */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Programme de la journée
            </h2>
            <div className="space-y-4">
              {[
                { 
                  time: '15h00', 
                  icon: Heart, 
                  event: 'Cérémonie religieuse', 
                  desc: 'Église Saint-Joseph' 
                },
                { 
                  time: '16h30', 
                  icon: Camera, 
                  event: 'Séance photos', 
                  desc: 'Avec famille et amis' 
                },
                { 
                  time: '18h00', 
                  icon: Utensils, 
                  event: 'Cocktail & Dîner', 
                  desc: 'Salle de réception' 
                },
                { 
                  time: '21h00', 
                  icon: Music, 
                  event: 'Soirée dansante', 
                  desc: 'Animation musicale live' 
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start space-x-4 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                      <item.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-emerald-700">{item.time}</p>
                    <p className="font-semibold text-gray-800">{item.event}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Informations pratiques */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Utensils className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800 text-sm">Repas complet</p>
                <p className="text-xs text-gray-600">Menu gastronomique</p>
              </div>
              <div>
                <Music className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800 text-sm">Animation</p>
                <p className="text-xs text-gray-600">DJ & orchestre live</p>
              </div>
              <div>
                <Gift className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800 text-sm">Tenue</p>
                <p className="text-xs text-gray-600">Chic et élégante</p>
              </div>
            </div>
          </div>

          {/* Formulaire RSVP */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Confirmez votre présence
            </h2>
            <p className="text-center text-sm text-gray-600 mb-6">
              Merci de confirmer avant le 1er Novembre 2026
            </p>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom complet"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              
              <input
                type="tel"
                placeholder="Votre téléphone"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              
              <div className="space-y-2">
                <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-full cursor-pointer hover:bg-emerald-50 transition">
                  <input type="radio" name="attendance" value="yes" className="text-emerald-600" />
                  <span>Je serai présent(e)</span>
                </label>
                
                <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-full cursor-pointer hover:bg-blue-50 transition">
                  <input type="radio" name="attendance" value="plus-one" className="text-blue-600" />
                  <span>Je viendrai accompagné(e)</span>
                </label>
                
                <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 transition">
                  <input type="radio" name="attendance" value="no" className="text-gray-600" />
                  <span>Je ne pourrai pas venir</span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-full font-medium text-lg shadow-lg transition-all transform hover:scale-105"
              >
                Envoyer ma confirmation
              </button>
            </form>
          </div>

          {/* Message final */}
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl shadow-xl p-8 text-center">
            <Heart className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <p className="text-lg italic text-gray-700 mb-2">
              "Votre présence est le plus beau des cadeaux"
            </p>
            <p className="text-emerald-800 font-serif text-xl">Bertin & Dinah</p>
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