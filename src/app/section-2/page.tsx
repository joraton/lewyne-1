'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, Calculator, DollarSign, AlertCircle, Lightbulb } from 'lucide-react';

export default function Section2Page() {
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
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '50%' }}></div>
            </div>
            <span className="text-sm text-gray-600">3/6</span>
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
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">II - Méthode des Flux de Trésorerie Actualisés (DCF)</h1>
          </div>
     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discounted Cash Flow et calcul du CMPC
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Introduction DCF */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-purple-500" />
              1. Principe de la Méthode DCF
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                La méthode DCF (Discounted Cash Flow) consiste à actualiser les flux de trésorerie disponibles futurs 
                que l&apos;entreprise est capable de générer. Cette méthode intrinsèque reflète la capacité de création de valeur de l&apos;entreprise.
              </p>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">📊 Formule générale</h4>
                <div className="bg-white p-4 rounded border text-center">
                  <strong className="text-xl">VE = Σ FCF(t) / (1+CMPC)^t + Valeur Terminale / (1+CMPC)^n</strong>
                  <br />
                  <span className="text-sm text-gray-600 mt-2 block">
                    FCF = Free Cash Flow (Flux de Trésorerie Disponible)
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                  <h5 className="font-semibold text-blue-900 mb-2">Étape 1</h5>
                  <p className="text-blue-800 text-sm">Calcul des FCF prévisionnels</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                  <h5 className="font-semibold text-green-900 mb-2">Étape 2</h5>
                  <p className="text-green-800 text-sm">Détermination du CMPC</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
                  <h5 className="font-semibold text-orange-900 mb-2">Étape 3</h5>
                  <p className="text-orange-800 text-sm">Calcul de la valeur terminale</p>
                </div>
              </div>
            </div>
          </div>

          {/* Free Cash Flow */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calculator className="w-6 h-6 text-purple-500" />
              2. Calcul du Free Cash Flow (FCF)
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le Free Cash Flow représente les liquidités générées par l&apos;activité opérationnelle, 
                disponibles pour rémunérer l&apos;ensemble des pourvoyeurs de capitaux (actionnaires et créanciers).
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-green-900 mb-4">📊 Méthode de calcul</h4>
                <div className="bg-white p-6 rounded border">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b pb-2">
                      <span>Résultat d&apos;Exploitation (RE)</span>
                      <span className="font-medium">+ XXX</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>- Impôt sur le RE (IS × RE)</span>
                      <span className="font-medium">- XXX</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>+ Dotations aux amortissements</span>
                      <span className="font-medium">+ XXX</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>- Investissements (CAPEX)</span>
                      <span className="font-medium">- XXX</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>- Variation du BFR</span>
                      <span className="font-medium">± XXX</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2">
                      <span>= Free Cash Flow</span>
                      <span className="text-green-600">= XXX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-900 mb-2">Points d&apos;attention</h4>
                    <ul className="text-yellow-800 space-y-1">
                      <li>• L&apos;impôt est calculé sur le RE avant charges financières</li>
                      <li>• Les amortissements sont retraités car ils ne représentent pas une sortie de cash</li>
                      <li>• Une augmentation du BFR diminue le FCF (besoin de financement)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CMPC */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Coût Moyen Pondéré du Capital (CMPC)</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le CMPC représente le taux de rentabilité exigé par l&apos;ensemble des pourvoyeurs de capitaux 
                (actionnaires et créanciers), pondéré par leur poids respectif dans le financement.
              </p>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-indigo-900 mb-3">📊 Formule du CMPC</h4>
                <div className="bg-white p-4 rounded border text-center">
                  <strong className="text-xl">CMPC = Ke × (CP/VE) + Kd × (1-IS) × (D/VE)</strong>
                  <br />
                  <div className="text-sm text-gray-600 mt-3 space-y-1">
                    <div>Ke = Coût des fonds propres | Kd = Coût de la dette</div>
                    <div>CP = Capitaux propres | D = Dette | IS = Taux d&apos;impôt</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Coût des Fonds Propres (Ke)</h4>
                  <p className="text-blue-800 text-sm mb-3">Calculé avec le modèle MEDAF :</p>
                  <div className="bg-white p-3 rounded border text-center">
                    <strong>Ke = Rf + β × (Rm - Rf)</strong>
                  </div>
                  <ul className="text-blue-800 text-sm mt-3 space-y-1">
                    <li>• Rf = Taux sans risque</li>
                    <li>• β = Bêta de l&apos;action</li>
                    <li>• Rm = Rentabilité du marché</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Coût de la Dette (Kd)</h4>
                  <p className="text-green-800 text-sm mb-3">Taux d&apos;intérêt moyen de la dette :</p>
                  <div className="bg-white p-3 rounded border text-center">
                    <strong>Kd = Charges financières / Dette</strong>
                  </div>
                  <div className="text-green-800 text-sm mt-3">
                    <strong>Économie d&apos;impôt :</strong> La dette bénéficie d&apos;un avantage fiscal 
                    car les intérêts sont déductibles.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Valeur Terminale */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Valeur Terminale</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                La valeur terminale représente la valeur de l&apos;entreprise au-delà de la période de prévision explicite. 
                Elle constitue souvent la majeure partie de la valorisation (60-80%).
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">Méthode Gordon & Shapiro</h4>
                  <div className="bg-white p-4 rounded border text-center mb-3">
                    <strong>VT = FCF(n+1) / (CMPC - g)</strong>
                  </div>
                  <p className="text-purple-800 text-sm">
                    g = taux de croissance perpétuel (généralement 2-3%)
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <h4 className="text-lg font-semibold text-orange-900 mb-3">Méthode des Multiples</h4>
                  <div className="bg-white p-4 rounded border text-center mb-3">
                    <strong>VT = Multiple × Agrégat(n)</strong>
                  </div>
                  <p className="text-orange-800 text-sm">
                    Application d&apos;un multiple de sortie aux données de la dernière année
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 Moyen mnémotechnique</h4>
                <p className="text-gray-700 mb-2">
                  <strong>&quot;FCVT&quot;</strong> pour retenir les étapes du DCF :
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li><strong>F</strong>CF (Free Cash Flow) → Calcul des flux prévisionnels</li>
                  <li><strong>C</strong>MPC → Détermination du taux d&apos;actualisation</li>
                  <li><strong>V</strong>T (Valeur Terminale) → Gordon & Shapiro ou multiples</li>
                  <li><strong>T</strong>otal → Somme des flux actualisés + VT actualisée</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exemple pratique */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Exemple Pratique - DSCG 2017</h2>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">Données de l&apos;exercice</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Résultat d&apos;exploitation : 2 400 k€</li>
                  <li>• Taux d&apos;impôt : 33,33%</li>
                      <li>• Amortissements : 800 k€</li>
                      <li>• Investissements : 1 000 k€</li>
                      <li>• Variation BFR : +200 k€</li>
                      <li>• CMPC : 8%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Calcul du FCF :</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span>Résultat d&apos;exploitation</span>
                    <span className="font-medium">2 400 k€</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>- Impôt (33,33% × 2 400)</span>
                    <span className="font-medium">- 800 k€</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>+ Amortissements</span>
                    <span className="font-medium">+ 800 k€</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>- Investissements</span>
                    <span className="font-medium">- 1 000 k€</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>- Variation BFR</span>
                    <span className="font-medium">- 200 k€</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t-2">
                    <span>= Free Cash Flow</span>
                    <span className="text-green-600">1 200 k€</span>
                  </div>
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
            href="/section-1" 
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Section I</span>
          </Link>
          
          <Link 
            href="/section-3" 
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <span>Section III</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}