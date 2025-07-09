'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calculator, TrendingUp, Target, AlertCircle, Lightbulb, DollarSign, BarChart3, Zap } from 'lucide-react';

export default function InvestissementsPage() {
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
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '83.33%' }}></div>
            </div>
            <span className="text-sm text-gray-600">6/6</span>
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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Section III
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            III - Critères de Rentabilité des Investissements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VAN, TIR, Indice de Profitabilité et exemples pratiques détaillés
          </p>
        </motion.div>

        {/* Introduction VAN */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Valeur Actuelle Nette (VAN)</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex items-start">
                <Lightbulb className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Principe de la VAN</h3>
                  <p className="text-blue-700">
                    La VAN mesure la création de valeur d&apos;un investissement en actualisant les flux de trésorerie futurs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Formule de la VAN</h3>
              <div className="bg-white p-4 rounded border text-center">
                <p className="font-mono text-lg mb-2">VAN = -I₀ + Σ[CFₜ/(1+i)ᵗ]</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• I₀ = Investissement initial</p>
                  <p>• CFₜ = Cash-flow de la période t</p>
                  <p>• i = Taux d&apos;actualisation</p>
                  <p>• t = Période</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Règle de décision</h4>
              <div className="text-green-700 space-y-2">
                <p>• <strong>VAN &gt; 0 :</strong> Projet créateur de valeur → Accepter</p>
                <p>• <strong>VAN = 0 :</strong> Projet à l&apos;équilibre → Indifférent</p>
                <p>• <strong>VAN &lt; 0 :</strong> Projet destructeur de valeur → Rejeter</p>
                <p className="mt-3"><strong>Entre plusieurs projets :</strong> Choisir celui avec la VAN la plus élevée</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TIR */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Taux de Rendement Interne (TIR)</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Définition</h3>
              <div className="bg-white p-4 rounded border text-center">
                <p className="font-mono text-lg mb-2">TIR = i tel que VAN = 0</p>
                <p className="text-gray-600">Le TIR est le taux d&apos;actualisation qui annule la VAN</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">📊 Règle de décision</h4>
              <div className="text-green-700 space-y-2">
                <p>• <strong>TIR &gt; Taux d&apos;actualisation :</strong> Projet rentable → Accepter</p>
                <p>• <strong>TIR = Taux d&apos;actualisation :</strong> Projet à l&apos;équilibre → Indifférent</p>
                <p>• <strong>TIR &lt; Taux d&apos;actualisation :</strong> Projet non rentable → Rejeter</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Limites du TIR</h4>
              <div className="text-yellow-700 space-y-2">
                <p>• Peut avoir plusieurs solutions (projets non conventionnels)</p>
                <p>• Problème de réinvestissement implicite au TIR</p>
                <p>• En cas de divergence avec la VAN, privilégier la VAN</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Indice de Profitabilité */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Indice de Profitabilité (IP)</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Formules</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border text-center">
                  <p className="font-mono text-lg mb-2">IP = Σ[CFₜ/(1+i)ᵗ] / I₀</p>
                  <p className="text-gray-600">ou</p>
                  <p className="font-mono text-lg">IP = (VAN + I₀) / I₀ = VAN/I₀ + 1</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">📈 Interprétation</h4>
              <div className="text-purple-700 space-y-2">
                <p>• <strong>IP &gt; 1 :</strong> Projet rentable (VAN &gt; 0)</p>
                <p>• <strong>IP = 1 :</strong> Projet à l'équilibre (VAN = 0)</p>
                <p>• <strong>IP &lt; 1 :</strong> Projet non rentable (VAN &lt; 0)</p>
                <p className="mt-3"><strong>Avantage :</strong> Permet de comparer des projets de tailles différentes</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Exemple Détaillé 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Exemple 1 : Choix entre Conservation et Renouvellement</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-3">📝 Énoncé</h4>
              <div className="text-orange-700 space-y-2">
                <p>Une entreprise possède une machine achetée 8 000€. Deux options :</p>
                <p><strong>Projet 1 :</strong> Conserver 4 ans</p>
                <p><strong>Projet 2 :</strong> Renouveler au bout de 2 ans</p>
                <p><strong>Taux d&apos;actualisation :</strong> 10%</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Projet 1 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Projet 1 - Conservation 4 ans</h4>
                <div className="bg-white p-3 rounded text-sm">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-1">Année</th>
                        <th className="text-right py-1">1</th>
                        <th className="text-right py-1">2</th>
                        <th className="text-right py-1">3</th>
                        <th className="text-right py-1">4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-1">EBE</td><td className="text-right">8 000</td><td className="text-right">6 000</td><td className="text-right">4 000</td><td className="text-right">1 000</td></tr>
                      <tr><td className="py-1">Dotations</td><td className="text-right">(3 000)</td><td className="text-right">(1 880)</td><td className="text-right">(1 560)</td><td className="text-right">(1 560)</td></tr>
                      <tr><td className="py-1">REX</td><td className="text-right">5 000</td><td className="text-right">4 120</td><td className="text-right">2 440</td><td className="text-right">40</td></tr>
                      <tr><td className="py-1">IS (30%)</td><td className="text-right">(1 500)</td><td className="text-right">(1 236)</td><td className="text-right">(732)</td><td className="text-right">(12)</td></tr>
                      <tr><td className="py-1">RN</td><td className="text-right">3 500</td><td className="text-right">2 884</td><td className="text-right">1 708</td><td className="text-right">28</td></tr>
                      <tr><td className="py-1">+ Dotations</td><td className="text-right">3 000</td><td className="text-right">1 880</td><td className="text-right">1 560</td><td className="text-right">1 560</td></tr>
                      <tr className="border-t font-semibold"><td className="py-1">CF</td><td className="text-right">6 500</td><td className="text-right">4 764</td><td className="text-right">3 268</td><td className="text-right">1 588</td></tr>
                    </tbody>
                  </table>
                  <div className="mt-3 p-2 bg-blue-50 rounded">
                    <p className="text-xs"><strong>Revente :</strong> 1 000€ - IS sur PV (300€) = 700€</p>
                    <p className="text-xs font-semibold">CF année 4 total : 1 588 + 700 = 2 288€</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-green-50 rounded">
                  <p className="text-sm font-semibold text-green-800">VAN₁ = -8 000 + 6 500/1,1 + 4 764/1,1² + 3 268/1,1³ + 2 288/1,1⁴</p>
                  <p className="text-lg font-bold text-green-700">VAN₁ = 5 864€</p>
                </div>
              </div>

              {/* Projet 2 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Projet 2 - Renouvellement à 2 ans</h4>
                <div className="bg-white p-3 rounded text-sm">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-1">Année</th>
                        <th className="text-right py-1">1</th>
                        <th className="text-right py-1">2</th>
                        <th className="text-right py-1">3</th>
                        <th className="text-right py-1">4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-1">CF exploitation</td><td className="text-right">6 500</td><td className="text-right">4 764</td><td className="text-right">6 500</td><td className="text-right">4 764</td></tr>
                      <tr><td className="py-1">Âge machine</td><td className="text-right">1 an</td><td className="text-right">2 ans</td><td className="text-right">1 an</td><td className="text-right">2 ans</td></tr>
                    </tbody>
                  </table>
                  <div className="mt-3 p-2 bg-blue-50 rounded">
                    <p className="text-xs"><strong>Année 2 :</strong> Revente 5 000€ - IS sur PV (564€) - Nouvel investissement (8 000€)</p>
                    <p className="text-xs"><strong>Année 4 :</strong> Revente 5 000€ - IS sur PV (564€)</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-green-50 rounded">
                  <p className="text-sm font-semibold text-green-800">VAN₂ = -8 000 + 6 500/1,1 + (4 764+5 000-564-8 000)/1,1² + 6 500/1,1³ + (4 764+5 000-564)/1,1⁴</p>
                  <p className="text-lg font-bold text-green-700">VAN₂ = 10 068€</p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 border border-green-300 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">🎯 Conclusion</h4>
              <p className="text-green-700">
                <strong>VAN₂ (10 068€) &gt; VAN₁ (5 864€)</strong> → Choisir le projet 2 (renouvellement)
              </p>
            </div>
          </div>
        </motion.section>

        {/* Exemple Détaillé 2 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Exemple 2 : Remplacement de Machine</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-3">📝 Énoncé</h4>
              <div className="text-red-700 space-y-2">
                <p><strong>Machine actuelle :</strong> 180k€ (achetée N-1), amortissable sur 6 ans</p>
                <p><strong>Nouvelle machine :</strong> 200k€, amortissable sur 5 ans</p>
                <p><strong>Revente ancienne :</strong> 100k€</p>
                <p><strong>Amélioration EBE :</strong> 80k€, 90k€, 105k€, 110k€, 110k€</p>
                <p><strong>IS :</strong> 30% | <strong>Taux d&apos;actualisation :</strong> 10%</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Calcul différentiel des cash-flows</h4>
              <div className="bg-white p-4 rounded">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Année</th>
                      <th className="text-right py-2">1</th>
                      <th className="text-right py-2">2</th>
                      <th className="text-right py-2">3</th>
                      <th className="text-right py-2">4</th>
                      <th className="text-right py-2">5</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="py-1">Δ EBE</td><td className="text-right">80 000</td><td className="text-right">90 000</td><td className="text-right">105 000</td><td className="text-right">110 000</td><td className="text-right">110 000</td></tr>
                    <tr><td className="py-1">Δ Dotations</td><td className="text-right">(10 000)</td><td className="text-right">(10 000)</td><td className="text-right">(10 000)</td><td className="text-right">(10 000)</td><td className="text-right">(10 000)</td></tr>
                    <tr><td className="py-1">Δ REX</td><td className="text-right">70 000</td><td className="text-right">80 000</td><td className="text-right">95 000</td><td className="text-right">100 000</td><td className="text-right">100 000</td></tr>
                    <tr><td className="py-1">Δ IS</td><td className="text-right">(21 000)</td><td className="text-right">(24 000)</td><td className="text-right">(28 500)</td><td className="text-right">(30 000)</td><td className="text-right">(30 000)</td></tr>
                    <tr><td className="py-1">Δ RN</td><td className="text-right">49 000</td><td className="text-right">56 000</td><td className="text-right">66 500</td><td className="text-right">70 000</td><td className="text-right">70 000</td></tr>
                    <tr><td className="py-1">+ Δ Dotations</td><td className="text-right">10 000</td><td className="text-right">10 000</td><td className="text-right">10 000</td><td className="text-right">10 000</td><td className="text-right">10 000</td></tr>
                    <tr className="border-t font-semibold"><td className="py-1">Δ CF</td><td className="text-right">59 000</td><td className="text-right">66 000</td><td className="text-right">76 500</td><td className="text-right">80 000</td><td className="text-right">80 000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">💰 Calcul de l&apos;investissement net</h4>
              <div className="text-blue-700 space-y-2">
                <p><strong>Nouvelle machine :</strong> -200 000€</p>
                <p><strong>Revente ancienne :</strong> +100 000€</p>
                <p><strong>VNC ancienne :</strong> 180 000 - 30 000 = 150 000€</p>
                <p><strong>Moins-value :</strong> 100 000 - 150 000 = -50 000€</p>
                <p><strong>Économie d&apos;IS :</strong> 50 000 × 30% = +15 000€</p>
                <p className="font-semibold"><strong>Investissement net :</strong> -200 000 + 100 000 + 15 000 = -85 000€</p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">📊 Calcul de la VAN</h4>
              <div className="text-green-700">
                <p className="font-mono text-sm mb-2">
                  VAN = -85 000 + 59 000/1,1¹ + 66 000/1,1² + 76 500/1,1³ + 80 000/1,1⁴ + 80 000/1,1⁵
                </p>
                <p className="text-xl font-bold text-green-800">VAN = 184 972€ &gt; 0</p>
                <p className="mt-2"><strong>Conclusion :</strong> Recommander le remplacement immédiat</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Seuil de Rentabilité */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Seuil de Rentabilité</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">🎯 Définition</h4>
              <p className="text-yellow-700">
                Le seuil de rentabilité correspond au nombre d&apos;unités qu&apos;il faut vendre pour que la VAN soit égale à 0.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Méthode de calcul</h3>
              <div className="bg-white p-4 rounded border">
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Exprimer les cash-flows en fonction du nombre d&apos;unités vendues (x)</li>
                  <li>Calculer la VAN en fonction de x</li>
                  <li>Résoudre l&apos;équation VAN(x) = 0</li>
                </ol>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Points Clés */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Points Clés à Retenir</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">La VAN est le critère de référence pour l&apos;évaluation des investissements</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Le TIR doit être comparé au coût du capital de l&apos;entreprise</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">L&apos;indice de profitabilité facilite la comparaison de projets de tailles différentes</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Toujours considérer les flux différentiels pour les projets de remplacement</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Prendre en compte les effets fiscaux (IS sur plus/moins-values)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Le seuil de rentabilité aide à évaluer la robustesse du projet</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-between items-center pt-8"
        >
          <Link
            href="/section-4"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Section 4 : Méthodes Avancées</span>
          </Link>
          
          <Link
            href="/comparaison-projets"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Comparaison de Projets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}