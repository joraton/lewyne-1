'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calculator, TrendingUp, Target, AlertCircle, Lightbulb, DollarSign, BarChart3, PieChart } from 'lucide-react';

export default function Section4Page() {
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
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '66.67%' }}></div>
            </div>
            <span className="text-sm text-gray-600">5/6</span>
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
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4" />
            Section V
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            V - Techniques d'Évaluation Avancées
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VAN Probabilisée et méthodes sophistiquées
          </p>
        </motion.div>

        {/* Introduction VAN Probabilisée */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Introduction à l'Évaluation sous Incertitude</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex items-start">
                <Lightbulb className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Limites des Méthodes Déterministes</h3>
                  <p className="text-blue-700">
                    Les méthodes classiques (VAN, TIR) supposent que les cash-flows futurs sont certains. En réalité, ils sont incertains et variables.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Nécessité d'Intégrer le Risque</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm font-semibold mt-0.5">1</div>
                  <p className="text-gray-700">Les cash-flows dépendent de facteurs économiques incertains</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm font-semibold mt-0.5">2</div>
                  <p className="text-gray-700">Les investisseurs sont sensibles au risque</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm font-semibold mt-0.5">3</div>
                  <p className="text-gray-700">La VAN probabilisée permet une analyse plus réaliste</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* VAN Probabilisée - Méthodes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Méthodes de Calcul de la VAN Probabilisée</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4">
              <div className="flex items-start">
                <Lightbulb className="w-5 h-5 text-indigo-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-800 mb-2">Principe Fondamental</h3>
                  <p className="text-indigo-700">
                    La VAN probabilisée traite les cash-flows comme des variables aléatoires et calcule l'espérance mathématique de la VAN.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">1. Méthode des Scénarios</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-800 mb-3">Principe</h4>
                  <p className="text-gray-600 mb-3">Définir plusieurs scénarios économiques avec leurs probabilités d'occurrence :</p>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-mono text-center text-lg mb-2">E(VAN) = Σ[P(i) × VAN(i)]</p>
                    <div className="text-sm text-gray-600">
                      <p>• P(i) = probabilité du scénario i</p>
                      <p>• VAN(i) = VAN dans le scénario i</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">📊 Exemple Pratique</h4>
                  <div className="text-green-700 space-y-2">
                    <div className="bg-white p-3 rounded">
                      <p><strong>Scénario Optimiste (25%) :</strong> VAN = 80 000€</p>
                      <p><strong>Scénario Probable (60%) :</strong> VAN = 30 000€</p>
                      <p><strong>Scénario Pessimiste (15%) :</strong> VAN = -20 000€</p>
                      <p className="mt-3 font-semibold border-t pt-2">
                        E(VAN) = 0,25×80 000 + 0,60×30 000 + 0,15×(-20 000) = <span className="text-green-600">35 000€</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">2. Simulation de Monte Carlo</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-800 mb-3">Méthodologie</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-sm font-semibold mt-0.5">1</div>
                      <p className="text-gray-700">Définir les distributions de probabilité des variables d'entrée</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-sm font-semibold mt-0.5">2</div>
                      <p className="text-gray-700">Générer aléatoirement des milliers de scénarios</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-sm font-semibold mt-0.5">3</div>
                      <p className="text-gray-700">Calculer la VAN pour chaque scénario</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-sm font-semibold mt-0.5">4</div>
                      <p className="text-gray-700">Analyser la distribution des résultats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Analyse du Risque */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Analyse du Risque et Indicateurs</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Mesures de Risque</h3>
                  <p className="text-red-700">
                    L'analyse probabiliste permet de quantifier le risque associé à un investissement.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Écart-Type de la VAN</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <p className="font-mono text-center mb-2">σ(VAN) = √[Σ P(i) × (VAN(i) - E(VAN))²]</p>
                  </div>
                  <p className="text-gray-700 text-sm">Plus l'écart-type est élevé, plus le projet est risqué.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Coefficient de Variation</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <p className="font-mono text-center mb-2">CV = σ(VAN) / E(VAN)</p>
                  </div>
                  <p className="text-gray-700 text-sm">Permet de comparer le risque relatif de projets différents.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">📊 Probabilité de Perte</h4>
              <div className="text-blue-700 space-y-2">
                <p>Calculer P(VAN &lt; 0) pour évaluer le risque de perte :</p>
                <div className="bg-white p-3 rounded">
                  <p><strong>Exemple :</strong> Si P(VAN &lt; 0) = 15%, il y a 15% de chances que le projet soit non rentable.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Applications Pratiques */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Applications et Limites</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Domaines d'Application</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-semibold mt-0.5">1</div>
                  <p className="text-gray-700">Projets d'investissement industriels avec incertitudes sur les volumes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-semibold mt-0.5">2</div>
                  <p className="text-gray-700">Évaluation d'entreprises en phase de développement</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-semibold mt-0.5">3</div>
                  <p className="text-gray-700">Projets R&D avec probabilités de succès variables</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Limites de la Méthode</h4>
              <div className="text-yellow-700 space-y-2">
                <p>• <strong>Subjectivité :</strong> Estimation des probabilités souvent subjective</p>
                <p>• <strong>Complexité :</strong> Nécessite des outils informatiques pour Monte Carlo</p>
                <p>• <strong>Corrélations :</strong> Difficile de modéliser les corrélations entre variables</p>
                <p>• <strong>Hypothèses :</strong> Suppose que les distributions restent stables dans le temps</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Points Clés */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Points Clés à Retenir</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">La VAN probabilisée intègre l'incertitude dans l'évaluation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Méthode des scénarios : simple et intuitive</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Monte Carlo : analyse sophistiquée pour projets complexes</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Écart-type et coefficient de variation mesurent le risque</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Probabilité de perte : indicateur clé de risque</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Attention aux limites : subjectivité et complexité</p>
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
            href="/section-3"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Section IV : DCF</span>
          </Link>
          
          <Link
            href="/investissements"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            <span>Section VI : Évaluation des Investissements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}