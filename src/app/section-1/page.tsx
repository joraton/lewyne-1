'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BarChart3, Calculator, TrendingUp, AlertCircle } from 'lucide-react';

export default function Section1Page() {
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
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '33.33%' }}></div>
            </div>
            <span className="text-sm text-gray-600">2/6</span>
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
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">I - Méthodes d&apos;Évaluation par Comparaison</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capitalisation boursière, valeur d&apos;entreprise et multiples
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Capitalisation boursière */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-green-500" />
              1. Capitalisation Boursière
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                La capitalisation boursière représente la valeur de marché des capitaux propres d&apos;une entreprise cotée.
                  Elle se calcule en multipliant le nombre d&apos;actions en circulation par le cours de bourse.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">📊 Formule</h4>
                <div className="bg-white p-4 rounded border text-center">
                  <strong className="text-xl">Capitalisation = Nombre d&apos;actions × Cours de bourse</strong>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-900 mb-2">Attention</h4>
                    <p className="text-yellow-800">
                      La capitalisation boursière ne représente que la valeur des fonds propres, 
                      pas la valeur totale de l&apos;entreprise (qui inclut la dette).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Valeur d'entreprise */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calculator className="w-6 h-6 text-green-500" />
              2. Valeur d&apos;Entreprise (VE)
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                La valeur d&apos;entreprise représente la valeur totale de l&apos;entreprise, indépendamment de sa structure financière.
                  Elle correspond à la valeur que devrait payer un acquéreur pour racheter l&apos;intégralité de l&apos;entreprise.
              </p>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">📊 Formule</h4>
                <div className="bg-white p-4 rounded border text-center">
                  <strong className="text-xl">VE = Capitalisation + Dette nette</strong>
                  <br />
                  <span className="text-sm text-gray-600 mt-2 block">
                    Dette nette = Dette financière - Trésorerie
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">✅ Avantages</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Indépendante de la structure financière</li>
                    <li>• Permet la comparaison entre entreprises</li>
                    <li>• Reflète la valeur opérationnelle</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h4 className="text-lg font-semibold text-red-900 mb-3">⚠️ Limites</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Dépend de la valorisation boursière</li>
                    <li>• Sensible aux fluctuations du marché</li>
                    <li>• Nécessite des entreprises comparables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Multiples boursiers */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Multiples Boursiers</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Les multiples boursiers permettent de comparer la valorisation d&apos;entreprises similaires 
                en rapportant leur valeur à des agrégats financiers.
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Multiple</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Formule</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">VE/CA</td>
                      <td className="border border-gray-300 px-4 py-3">Valeur d&apos;Entreprise / Chiffre d&apos;Affaires</td>
                      <td className="border border-gray-300 px-4 py-3">Secteurs à forte croissance</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">VE/EBE</td>
                      <td className="border border-gray-300 px-4 py-3">Valeur d&apos;Entreprise / EBITDA</td>
                      <td className="border border-gray-300 px-4 py-3">Le plus utilisé</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">VE/RE</td>
                      <td className="border border-gray-300 px-4 py-3">Valeur d&apos;Entreprise / Résultat d&apos;Exploitation</td>
                      <td className="border border-gray-300 px-4 py-3">Secteurs matures</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">PER</td>
                      <td className="border border-gray-300 px-4 py-3">Capitalisation / Résultat Net</td>
                      <td className="border border-gray-300 px-4 py-3">Valorisation des fonds propres</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 Moyen mnémotechnique</h4>
                <p className="text-gray-700 mb-2">
                  <strong>&quot;CERP&quot;</strong> pour retenir les principaux multiples :
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li><strong>C</strong>A (Chiffre d&apos;Affaires) → VE/CA</li>
                  <li><strong>E</strong>BE (EBITDA) → VE/EBE</li>
                  <li><strong>R</strong>E (Résultat d&apos;Exploitation) → VE/RE</li>
                  <li><strong>P</strong>ER (Price Earnings Ratio) → Cap/RN</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Méthodologie */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Méthodologie de Valorisation</h2>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Étape 1 : Sélection des comparables</h4>
                  <p className="text-gray-700">Identifier des entreprises similaires en termes de secteur, taille, géographie et modèle économique.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Étape 2 : Calcul des multiples</h4>
                  <p className="text-gray-700">Calculer les multiples de valorisation pour chaque comparable sélectionné.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Étape 3 : Analyse statistique</h4>
                  <p className="text-gray-700">Déterminer la médiane, la moyenne et les quartiles des multiples observés.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Étape 4 : Application</h4>
                  <p className="text-gray-700">Appliquer les multiples retenus aux agrégats financiers de l&apos;entreprise à valoriser.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-between items-center mt-12"
        >
          <Link 
            href="/introduction" 
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Introduction</span>
          </Link>
          
          <Link 
            href="/section-2" 
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <span>Section II</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}