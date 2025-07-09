'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, GitCompare, Clock, Calculator, TrendingUp, Target, AlertCircle, Lightbulb, BarChart3 } from 'lucide-react';

export default function ComparaisonProjetsPage() {
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
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <span className="text-sm text-gray-600">7/7</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GitCompare className="w-4 h-4" />
            Section VI
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            VI - Comparaison et Sélection de Projets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PPCM, Annuité Équivalente et critères de divergence
          </p>
        </motion.div>

        {/* Divergence VAN-TIR */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Divergence entre VAN et TIR</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Problème de divergence</h3>
                  <p className="text-red-700">
                    La VAN et le TIR peuvent donner des classements différents pour des projets mutuellement exclusifs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Exemple de divergence</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-800 mb-3">Projet X</h4>
                  <div className="space-y-2 text-sm">
                    <p>Investissement : -1 000€</p>
                    <p>CF année 1 : 1 200€</p>
                    <p><strong>TIR = 20%</strong></p>
                    <p><strong>VAN (10%) = 91€</strong></p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-800 mb-3">Projet Y</h4>
                  <div className="space-y-2 text-sm">
                    <p>Investissement : -1 000€</p>
                    <p>CF année 1 : 500€</p>
                    <p>CF année 2 : 800€</p>
                    <p><strong>TIR = 18,6%</strong></p>
                    <p><strong>VAN (10%) = 116€</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">🎯 Taux pivot</h4>
              <div className="text-blue-700 space-y-2">
                <p>Le <strong>taux pivot</strong> est le taux d'actualisation pour lequel VAN(X) = VAN(Y)</p>
                <p>Dans cet exemple : <strong>taux pivot = 15,2%</strong></p>
                <div className="mt-3 p-3 bg-white rounded border">
                  <p className="text-sm">• Si i &lt; 15,2% → Choisir Y (VAN plus élevée)</p>
                  <p className="text-sm">• Si i &gt; 15,2% → Choisir X (VAN plus élevée)</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Règle de décision</h4>
              <p className="text-green-700">
                <strong>En cas de divergence, toujours privilégier la VAN</strong> car elle mesure directement la création de valeur.
              </p>
            </div>
          </div>
        </motion.section>

        {/* PPCM */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Plus Petit Commun Multiple (PPCM)</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex items-start">
                <Lightbulb className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Principe du PPCM</h3>
                  <p className="text-blue-700">
                    Pour comparer des projets de durées différentes, on calcule la VAN sur leur plus petit commun multiple.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Exemple : Projets X (2 ans) et Y (3 ans)</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-800 mb-3">PPCM = 6 ans</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Projet X (répété 3 fois)</p>
                      <div className="text-sm space-y-1">
                        <p>Années 0-2 : Projet X initial</p>
                        <p>Années 2-4 : Projet X répété</p>
                        <p>Années 4-6 : Projet X répété</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Projet Y (répété 2 fois)</p>
                      <div className="text-sm space-y-1">
                        <p>Années 0-3 : Projet Y initial</p>
                        <p>Années 3-6 : Projet Y répété</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Hypothèses du PPCM</h4>
              <div className="text-yellow-700 space-y-2">
                <p>• Les projets peuvent être répétés à l'identique</p>
                <p>• Les conditions économiques restent stables</p>
                <p>• Pas d'évolution technologique</p>
                <p>• Disponibilité des financements</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Annuité Équivalente */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Annuité Équivalente (AEQ)</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <div className="flex items-start">
                <Lightbulb className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Principe de l'AEQ</h3>
                  <p className="text-green-700">
                    L'annuité équivalente transforme la VAN en rente constante sur la durée du projet.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Formule de l'AEQ</h3>
              <div className="bg-white p-4 rounded border text-center">
                <p className="font-mono text-lg mb-2">AEQ = VAN × [i(1+i)ⁿ] / [(1+i)ⁿ - 1]</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• VAN = Valeur Actuelle Nette du projet</p>
                  <p>• i = Taux d'actualisation</p>
                  <p>• n = Durée du projet</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Exemple de calcul</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-800 mb-3">Projet X (2 ans)</h4>
                  <div className="space-y-2 text-sm">
                    <p>VAN = 91€</p>
                    <p>i = 10%, n = 2</p>
                    <p className="font-mono">AEQ = 91 × [0,1×1,1²] / [1,1² - 1]</p>
                    <p className="font-mono">AEQ = 91 × 0,121 / 0,21</p>
                    <p className="font-semibold text-green-600">AEQ = 52,5€</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-800 mb-3">Projet Y (3 ans)</h4>
                  <div className="space-y-2 text-sm">
                    <p>VAN = 116€</p>
                    <p>i = 10%, n = 3</p>
                    <p className="font-mono">AEQ = 116 × [0,1×1,1³] / [1,1³ - 1]</p>
                    <p className="font-mono">AEQ = 116 × 0,1331 / 0,331</p>
                    <p className="font-semibold text-green-600">AEQ = 46,6€</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded">
                <p className="text-green-800 font-semibold">Conclusion : AEQ(X) &gt; AEQ(Y) → Choisir le projet X</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">💡 Avantages de l'AEQ</h4>
              <div className="text-blue-700 space-y-2">
                <p>• Méthode plus simple que le PPCM</p>
                <p>• Pas besoin d'hypothèses sur la répétition des projets</p>
                <p>• Facilite la comparaison directe</p>
                <p>• Interprétation intuitive (rente annuelle)</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Exemple Détaillé */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Exemple Détaillé : Comparaison Complète</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3">📝 Données</h4>
              <div className="text-purple-700 space-y-2">
                <p><strong>Projet A :</strong> I₀ = -10 000€, CF₁ = 6 000€, CF₂ = 8 000€</p>
                <p><strong>Projet B :</strong> I₀ = -10 000€, CF₁ = 4 000€, CF₂ = 5 000€, CF₃ = 6 000€</p>
                <p><strong>Taux d'actualisation :</strong> 12%</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Calculs Projet A */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Projet A (2 ans)</h4>
                <div className="bg-white p-3 rounded text-sm space-y-2">
                  <p><strong>VAN :</strong></p>
                  <p className="font-mono">VAN = -10 000 + 6 000/1,12 + 8 000/1,12²</p>
                  <p className="font-mono">VAN = -10 000 + 5 357 + 6 378</p>
                  <p className="font-semibold text-green-600">VAN = 1 735€</p>
                  
                  <p className="mt-3"><strong>TIR :</strong> 20,1%</p>
                  
                  <p className="mt-3"><strong>AEQ :</strong></p>
                  <p className="font-mono">AEQ = 1 735 × 0,12×1,12² / (1,12² - 1)</p>
                  <p className="font-semibold text-green-600">AEQ = 1 028€</p>
                </div>
              </div>

              {/* Calculs Projet B */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Projet B (3 ans)</h4>
                <div className="bg-white p-3 rounded text-sm space-y-2">
                  <p><strong>VAN :</strong></p>
                  <p className="font-mono">VAN = -10 000 + 4 000/1,12 + 5 000/1,12² + 6 000/1,12³</p>
                  <p className="font-mono">VAN = -10 000 + 3 571 + 3 985 + 4 274</p>
                  <p className="font-semibold text-green-600">VAN = 1 830€</p>
                  
                  <p className="mt-3"><strong>TIR :</strong> 18,7%</p>
                  
                  <p className="mt-3"><strong>AEQ :</strong></p>
                  <p className="font-mono">AEQ = 1 830 × 0,12×1,12³ / (1,12³ - 1)</p>
                  <p className="font-semibold text-green-600">AEQ = 761€</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-semibold text-gray-900 mb-4">📊 Synthèse des résultats</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Critère</th>
                      <th className="text-center py-2">Projet A</th>
                      <th className="text-center py-2">Projet B</th>
                      <th className="text-center py-2">Choix</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="py-2">VAN</td><td className="text-center">1 735€</td><td className="text-center">1 830€</td><td className="text-center font-semibold text-green-600">B</td></tr>
                    <tr><td className="py-2">TIR</td><td className="text-center">20,1%</td><td className="text-center">18,7%</td><td className="text-center font-semibold text-green-600">A</td></tr>
                    <tr><td className="py-2">AEQ</td><td className="text-center">1 028€</td><td className="text-center">761€</td><td className="text-center font-semibold text-green-600">A</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">🤔 Analyse de la divergence</h4>
              <div className="text-orange-700 space-y-2">
                <p>• <strong>VAN :</strong> Privilégie B (valeur absolue plus élevée)</p>
                <p>• <strong>TIR et AEQ :</strong> Privilégient A (rentabilité relative plus élevée)</p>
                <p>• <strong>Choix final :</strong> Dépend de la contrainte de capital et de la possibilité de réinvestissement</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Points Clés */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Points Clés à Retenir</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">En cas de divergence VAN-TIR, privilégier la VAN</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Le taux pivot aide à comprendre les conditions de divergence</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Le PPCM nécessite des hypothèses fortes sur la répétition</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">L'AEQ est plus pratique que le PPCM pour comparer des durées différentes</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">L'AEQ transforme la VAN en rente annuelle équivalente</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Toujours analyser la cohérence entre les différents critères</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-between items-center pt-8"
        >
          <Link
            href="/investissements"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Évaluation des Investissements</span>
          </Link>
          
          <Link
            href="/van-probabilisee"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <span>VAN Probabilisée</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}