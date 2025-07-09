'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, BarChart3, Calculator, Target, AlertCircle, Lightbulb, PieChart, Zap } from 'lucide-react';

export default function VanProbabiliseePage() {
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
            <span className="text-sm text-gray-600">8/8</span>
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
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <PieChart className="w-4 h-4" />
            Section VII
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            VII - Gestion du Risque dans l'Évaluation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VAN Probabilisée et intégration de l'incertitude
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Principe de la VAN Probabilisée</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4">
              <div className="flex items-start">
                <Lightbulb className="w-5 h-5 text-indigo-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-800 mb-2">Objectif</h3>
                  <p className="text-indigo-700">
                    La VAN probabilisée permet d'intégrer l'incertitude sur les flux de trésorerie futurs en utilisant des distributions de probabilité.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Démarche</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-semibold mt-0.5">1</div>
                  <p className="text-gray-700">Identifier les variables aléatoires (CA, coûts, etc.)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-semibold mt-0.5">2</div>
                  <p className="text-gray-700">Définir les distributions de probabilité pour chaque variable</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-semibold mt-0.5">3</div>
                  <p className="text-gray-700">Calculer l'espérance et la variance de la VAN</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-semibold mt-0.5">4</div>
                  <p className="text-gray-700">Analyser le risque et prendre une décision</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Formules */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Formules Fondamentales</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Espérance de la VAN</h3>
              <div className="bg-white p-4 rounded border text-center">
                <p className="font-mono text-lg mb-2">E(VAN) = -I₀ + Σ[E(CFₜ)/(1+i)ᵗ]</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• E(CFₜ) = Espérance du cash-flow de la période t</p>
                  <p>• I₀ = Investissement initial (certain)</p>
                  <p>• i = Taux d'actualisation</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Variance de la VAN</h3>
              <div className="bg-white p-4 rounded border text-center">
                <p className="font-mono text-lg mb-2">Var(VAN) = Σ[Var(CFₜ)/(1+i)²ᵗ]</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Var(CFₜ) = Variance du cash-flow de la période t</p>
                  <p>• Hypothèse : Les cash-flows sont indépendants</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Écart-type de la VAN</h3>
              <div className="bg-white p-4 rounded border text-center">
                <p className="font-mono text-lg mb-2">σ(VAN) = √Var(VAN)</p>
                <div className="text-sm text-gray-600">
                  <p>L'écart-type mesure le risque du projet</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Exemple Détaillé */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Exemple : Comparaison de Deux Projets</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">📝 Données</h4>
              <div className="text-green-700 space-y-2">
                <p><strong>Investissement initial :</strong> 100 000€ pour chaque projet</p>
                <p><strong>Durée :</strong> 3 ans</p>
                <p><strong>Taux d'actualisation :</strong> 10%</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Projet A */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Projet A</h4>
                <div className="bg-white p-3 rounded text-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-1">Année</th>
                        <th className="text-center py-1">CF</th>
                        <th className="text-center py-1">Prob.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-1">1</td><td className="text-center">40 000</td><td className="text-center">0,3</td></tr>
                      <tr><td></td><td className="text-center">50 000</td><td className="text-center">0,4</td></tr>
                      <tr><td></td><td className="text-center">60 000</td><td className="text-center">0,3</td></tr>
                      <tr><td className="py-1">2</td><td className="text-center">45 000</td><td className="text-center">0,2</td></tr>
                      <tr><td></td><td className="text-center">55 000</td><td className="text-center">0,6</td></tr>
                      <tr><td></td><td className="text-center">65 000</td><td className="text-center">0,2</td></tr>
                      <tr><td className="py-1">3</td><td className="text-center">50 000</td><td className="text-center">0,4</td></tr>
                      <tr><td></td><td className="text-center">60 000</td><td className="text-center">0,6</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Projet B */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Projet B</h4>
                <div className="bg-white p-3 rounded text-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-1">Année</th>
                        <th className="text-center py-1">CF</th>
                        <th className="text-center py-1">Prob.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-1">1</td><td className="text-center">30 000</td><td className="text-center">0,2</td></tr>
                      <tr><td></td><td className="text-center">50 000</td><td className="text-center">0,6</td></tr>
                      <tr><td></td><td className="text-center">70 000</td><td className="text-center">0,2</td></tr>
                      <tr><td className="py-1">2</td><td className="text-center">40 000</td><td className="text-center">0,3</td></tr>
                      <tr><td></td><td className="text-center">55 000</td><td className="text-center">0,4</td></tr>
                      <tr><td></td><td className="text-center">70 000</td><td className="text-center">0,3</td></tr>
                      <tr><td className="py-1">3</td><td className="text-center">45 000</td><td className="text-center">0,3</td></tr>
                      <tr><td></td><td className="text-center">60 000</td><td className="text-center">0,7</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-4">📊 Calculs des espérances et variances</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Calculs Projet A */}
                <div className="bg-white p-4 rounded">
                  <h5 className="font-semibold text-gray-800 mb-3">Projet A</h5>
                  <div className="text-sm space-y-2">
                    <p><strong>E(CF₁) =</strong> 40×0,3 + 50×0,4 + 60×0,3 = 50 000€</p>
                    <p><strong>E(CF₂) =</strong> 45×0,2 + 55×0,6 + 65×0,2 = 55 000€</p>
                    <p><strong>E(CF₃) =</strong> 50×0,4 + 60×0,6 = 56 000€</p>
                    
                    <p className="mt-3"><strong>Var(CF₁) =</strong> (40-50)²×0,3 + (50-50)²×0,4 + (60-50)²×0,3 = 60 000 000</p>
                    <p><strong>Var(CF₂) =</strong> (45-55)²×0,2 + (55-55)²×0,6 + (65-55)²×0,2 = 40 000 000</p>
                    <p><strong>Var(CF₃) =</strong> (50-56)²×0,4 + (60-56)²×0,6 = 24 000 000</p>
                  </div>
                </div>

                {/* Calculs Projet B */}
                <div className="bg-white p-4 rounded">
                  <h5 className="font-semibold text-gray-800 mb-3">Projet B</h5>
                  <div className="text-sm space-y-2">
                    <p><strong>E(CF₁) =</strong> 30×0,2 + 50×0,6 + 70×0,2 = 50 000€</p>
                    <p><strong>E(CF₂) =</strong> 40×0,3 + 55×0,4 + 70×0,3 = 55 000€</p>
                    <p><strong>E(CF₃) =</strong> 45×0,3 + 60×0,7 = 55 500€</p>
                    
                    <p className="mt-3"><strong>Var(CF₁) =</strong> (30-50)²×0,2 + (50-50)²×0,6 + (70-50)²×0,2 = 160 000 000</p>
                    <p><strong>Var(CF₂) =</strong> (40-55)²×0,3 + (55-55)²×0,4 + (70-55)²×0,3 = 135 000 000</p>
                    <p><strong>Var(CF₃) =</strong> (45-55,5)²×0,3 + (60-55,5)²×0,7 = 47 250 000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-semibold text-gray-900 mb-4">🎯 Résultats finaux</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Résultats Projet A */}
                <div className="bg-green-50 p-4 rounded">
                  <h5 className="font-semibold text-green-800 mb-3">Projet A</h5>
                  <div className="space-y-2">
                    <p><strong>E(VAN) =</strong> -100 000 + 50 000/1,1 + 55 000/1,1² + 56 000/1,1³</p>
                    <p className="font-semibold text-green-700">E(VAN) = 33 029€</p>
                    
                    <p className="mt-3"><strong>Var(VAN) =</strong> 60M/1,1² + 40M/1,1⁴ + 24M/1,1⁶</p>
                    <p className="font-semibold text-green-700">σ(VAN) = 8 944€</p>
                    
                    <p className="mt-3 text-sm"><strong>Coefficient de variation :</strong> 8 944/33 029 = 27,1%</p>
                  </div>
                </div>

                {/* Résultats Projet B */}
                <div className="bg-blue-50 p-4 rounded">
                  <h5 className="font-semibold text-blue-800 mb-3">Projet B</h5>
                  <div className="space-y-2">
                    <p><strong>E(VAN) =</strong> -100 000 + 50 000/1,1 + 55 000/1,1² + 55 500/1,1³</p>
                    <p className="font-semibold text-blue-700">E(VAN) = 32 653€</p>
                    
                    <p className="mt-3"><strong>Var(VAN) =</strong> 160M/1,1² + 135M/1,1⁴ + 47,25M/1,1⁶</p>
                    <p className="font-semibold text-blue-700">σ(VAN) = 15 789€</p>
                    
                    <p className="mt-3 text-sm"><strong>Coefficient de variation :</strong> 15 789/32 653 = 48,3%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">🤔 Analyse et décision</h4>
              <div className="text-orange-700 space-y-2">
                <p>• <strong>Espérance :</strong> Projet A légèrement supérieur (33 029€ vs 32 653€)</p>
                <p>• <strong>Risque :</strong> Projet A moins risqué (σ = 8 944€ vs 15 789€)</p>
                <p>• <strong>Coefficient de variation :</strong> Projet A plus stable (27,1% vs 48,3%)</p>
                <p className="font-semibold mt-3"><strong>Recommandation :</strong> Choisir le projet A (meilleure espérance et risque plus faible)</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Critères de Décision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Critères de Décision</h2>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">📈 Espérance-Variance</h4>
                <div className="text-blue-700 text-sm space-y-2">
                  <p>• Maximiser E(VAN)</p>
                  <p>• Minimiser Var(VAN)</p>
                  <p>• Arbitrage rendement/risque</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">📊 Coefficient de Variation</h4>
                <div className="text-green-700 text-sm space-y-2">
                  <p>CV = σ(VAN) / E(VAN)</p>
                  <p>Mesure le risque relatif</p>
                  <p>Plus faible = meilleur</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Probabilité VAN &gt; 0</h4>
                <div className="text-purple-700 text-sm space-y-2">
                  <p>Si VAN ~ N(μ, σ²)</p>
                  <p>P(VAN &gt; 0) = Φ(μ/σ)</p>
                  <p>Φ = fonction de répartition normale</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Exemple de calcul de probabilité</h3>
              <div className="bg-white p-4 rounded border">
                <p className="text-sm mb-2">Pour le Projet A : E(VAN) = 33 029€, σ(VAN) = 8 944€</p>
                <p className="font-mono text-sm mb-2">P(VAN &gt; 0) = Φ(33 029 / 8 944) = Φ(3,69) ≈ 99,99%</p>
                <p className="text-sm text-green-700 font-semibold">Le projet A a une probabilité très élevée d'être rentable</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Points Clés */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Points Clés à Retenir</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">La VAN probabilisée intègre explicitement le risque dans l'évaluation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">L'espérance de la VAN donne la valeur moyenne attendue</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">La variance mesure la dispersion autour de cette moyenne</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Le coefficient de variation permet de comparer des projets de tailles différentes</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">La probabilité que VAN &gt; 0 indique la robustesse du projet</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Cette méthode nécessite des hypothèses sur les distributions de probabilité</p>
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
            href="/comparaison-projets"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Comparaison de Projets</span>
          </Link>
          
          <Link
            href="/questions-dscg"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <span>Questions DSCG</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}