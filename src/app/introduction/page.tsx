'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Rocket, Lightbulb, Target } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au plan</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '16.67%' }}></div>
            </div>
            <span className="text-sm text-gray-600">1/6</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Introduction</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les concepts fondamentaux de l'évaluation financière et les différentes approches méthodologiques.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Objectifs d'apprentissage</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Comprendre les enjeux de l'évaluation d'entreprise</li>
                    <li>• Maîtriser les différentes méthodes d'évaluation</li>
                    <li>• Savoir choisir la méthode appropriée selon le contexte</li>
                    <li>• Appliquer les concepts à des cas pratiques</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Qu'est-ce que l'évaluation financière ?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              L'évaluation financière est un processus complexe qui vise à déterminer la valeur économique d'une entreprise, 
              d'un actif ou d'un projet d'investissement. Cette discipline est au cœur de nombreuses décisions stratégiques : 
              fusions-acquisitions, introduction en bourse, cession d'activités, ou encore évaluation de projets d'investissement.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-yellow-900 mb-2">Point clé</h4>
                  <p className="text-yellow-800">
                    Il n'existe pas une seule "vraie" valeur d'une entreprise, mais plutôt une fourchette de valeurs 
                    dépendant de la méthode utilisée, du contexte et des hypothèses retenues.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Les principales approches d'évaluation</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h4 className="text-lg font-semibold text-green-900 mb-3">1. Méthodes Analogiques</h4>
                <p className="text-green-800 text-sm">
                  Basées sur la comparaison avec des entreprises similaires (comparables boursiers) 
                  ou des transactions récentes (comparables transactionnels).
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">2. Méthodes Intrinsèques</h4>
                <p className="text-purple-800 text-sm">
                  Fondées sur l'actualisation des flux de trésorerie futurs (DCF - Discounted Cash Flow) 
                  et la capacité de l'entreprise à générer de la valeur.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Concepts fondamentaux</h3>
            
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Valeur d'Entreprise (VE)</h5>
                <p className="text-gray-700 text-sm">
                  Valeur totale de l'entreprise, indépendamment de sa structure financière. 
                  Elle représente la valeur des actifs économiques.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Capitalisation Boursière</h5>
                <p className="text-gray-700 text-sm">
                  Valeur de marché des capitaux propres, calculée en multipliant le nombre d'actions 
                  par le cours de bourse.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Multiples de Valorisation</h5>
                <p className="text-gray-700 text-sm">
                  Ratios permettant de comparer la valorisation d'entreprises similaires 
                  (P/E, EV/EBITDA, EV/Sales, etc.).
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 Moyen mnémotechnique</h4>
              <p className="text-gray-700 mb-2">
                <strong>"CAVE"</strong> pour retenir les étapes clés :
              </p>
              <ul className="text-gray-700 space-y-1">
                <li><strong>C</strong>omparables (méthodes analogiques)</li>
                <li><strong>A</strong>ctualisation (méthode DCF)</li>
                <li><strong>V</strong>aleur d'entreprise vs valeur des fonds propres</li>
                <li><strong>E</strong>stimation finale et fourchette de valeurs</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-between items-center"
        >
          <Link 
            href="/" 
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Plan du cours</span>
          </Link>
          
          <Link 
            href="/section-1" 
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Section I</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}