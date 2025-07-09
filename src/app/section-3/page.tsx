'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calculator, TrendingUp, Target, AlertCircle, Lightbulb, DollarSign } from 'lucide-react';

export default function Section3Page() {
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
            <span className="text-sm text-gray-600">4/6</span>
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
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">IV - Méthodes Avancées d&apos;Actualisation</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            VAN Globale, TIR Global et applications pratiques
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* VAN */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              1. Valeur Actuelle Nette (VAN)
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                La VAN mesure la création de valeur d&apos;un projet d&apos;investissement en actualisant 
                les flux de trésorerie futurs au coût du capital. Un projet est rentable si sa VAN est positive.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">📊 Formule de la VAN</h4>
                <div className="bg-white p-4 rounded border text-center">
                  <strong className="text-xl">VAN = -I₀ + Σ CFₜ / (1+i)ᵗ</strong>
                  <br />
                  <span className="text-sm text-gray-600 mt-2 block">
                    I₀ = Investissement initial | CFₜ = Cash Flow année t | i = Taux d&apos;actualisation
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                  <h5 className="font-semibold text-green-900 mb-2">VAN &gt; 0</h5>
                  <p className="text-green-800 text-sm">Projet rentable<br />→ Accepter</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                  <h5 className="font-semibold text-gray-900 mb-2">VAN = 0</h5>
                  <p className="text-gray-800 text-sm">Projet neutre<br />→ Indifférent</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
                  <h5 className="font-semibold text-red-900 mb-2">VAN &lt; 0</h5>
                  <p className="text-red-800 text-sm">Projet non rentable<br />→ Rejeter</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">Hypothèse implicite</h4>
                    <p className="text-blue-800">
                      La VAN suppose que les cash flows intermédiaires sont réinvestis au taux d&apos;actualisation.
                Si ce n&apos;est pas le cas, il faut utiliser la VAN Globale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VAN Globale */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-orange-500" />
              2. VAN Globale (VANG)
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                La VAN Globale prend en compte explicitement le taux de réinvestissement des cash flows intermédiaires, 
                qui peut être différent du taux d&apos;actualisation.
              </p>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">📊 Formule de la VANG</h4>
                <div className="bg-white p-4 rounded border text-center">
                  <strong className="text-xl">VANG = -I₀ + Σ [CFₜ × (1+j)ⁿ⁻ᵗ] / (1+i)ⁿ</strong>
                  <br />
                  <span className="text-sm text-gray-600 mt-2 block">
                    j = Taux de placement des CF | i = Taux d&apos;actualisation | n = Durée du projet
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Cas j &gt; i</h4>
                  <p className="text-green-800 text-sm">
                    Les CF sont réinvestis à un taux supérieur au coût du capital.
                    La VANG sera supérieure à la VAN classique.
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h4 className="text-lg font-semibold text-red-900 mb-3">Cas j &lt; i</h4>
                  <p className="text-red-800 text-sm">
                    Les CF sont réinvestis à un taux inférieur au coût du capital.
                    La VANG sera inférieure à la VAN classique.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-900 mb-2">Remarque importante</h4>
                    <p className="text-yellow-800">
                      Si j = i, alors VANG = VAN. La VAN classique suppose implicitement 
                      que les CF sont réinvestis au taux d&apos;actualisation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TIR et TIR Globale */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Taux de Rentabilité Interne (TIR)</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le TIR est le taux d&apos;actualisation qui annule la VAN. Il représente la rentabilité intrinsèque du projet.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">TIR Classique</h4>
                  <div className="bg-white p-3 rounded border text-center mb-3">
                    <strong>VAN = 0 ⟺ TIR = i</strong>
                  </div>
                  <p className="text-blue-800 text-sm">
                    Critère de décision : Accepter le projet si TIR &gt; coût du capital
                  </p>
                </div>
                
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-indigo-900 mb-3">TIR Globale (TIRG)</h4>
                  <div className="bg-white p-3 rounded border text-center mb-3">
                    <strong>TIRG = [Σ CFₜ(1+j)ⁿ⁻ᵗ / I₀]^(1/n) - 1</strong>
                  </div>
                  <p className="text-indigo-800 text-sm">
                    Prend en compte le taux de réinvestissement des CF
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exemple pratique */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Exemple Pratique - Comparaison VAN/VANG</h2>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Données du projet :</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Investissement initial : 100 000 €</li>
                  <li>• Cash flows annuels : 20 000 € pendant 3 ans</li>
                  <li>• Taux d&apos;actualisation (CMPC) : 10%</li>
                  <li>• Taux de replacement : 3%</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Calcul VAN Classique</h4>
                  <div className="space-y-2 text-sm">
                    <div>VAN = -100 000</div>
                    <div>+ 20 000/(1,10)¹ = 18 182</div>
                    <div>+ 20 000/(1,10)² = 16 529</div>
                    <div>+ 20 000/(1,10)³ = 15 026</div>
                    <div className="border-t pt-2 font-bold text-green-600">
                      VAN = -50 263 € &lt; 0
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-900 mb-3">Calcul VANG</h4>
                  <div className="space-y-2 text-sm">
                    <div>VANG = -100 000</div>
                    <div>+ [20 000×(1,03)² + 20 000×(1,03)¹ + 20 000×(1,03)⁰] / (1,10)³</div>
                    <div>= -100 000 + 62 836 / 1,331</div>
                    <div>= -100 000 + 47 208</div>
                    <div className="border-t pt-2 font-bold text-red-600">
                      VANG = -52 792 € &lt; 0
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Conclusion</h4>
                <p className="text-blue-800">
                  Dans cet exemple, le taux de replacement (3%) est inférieur au taux d&apos;actualisation (10%), 
                  ce qui explique que la VANG soit plus faible que la VAN. Le projet est rejeté dans les deux cas.
                </p>
              </div>
            </div>
          </div>

          {/* Valorisation Start-ups */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-orange-500" />
              5. Valorisation des Start-ups
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                La valorisation des start-ups utilise des concepts spécifiques liés aux levées de fonds 
                et à la dilution du capital.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">Valeur Pré-Money</h4>
                  <div className="bg-white p-3 rounded border text-center mb-3">
                    <strong>Valeur avant l&apos;investissement</strong>
                  </div>
                  <p className="text-purple-800 text-sm">
                    Valorisation de l&apos;entreprise avant la levée de fonds, 
                    basée sur les actifs existants et les perspectives.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Valeur Post-Money</h4>
                  <div className="bg-white p-3 rounded border text-center mb-3">
                    <strong>Valeur après l&apos;investissement</strong>
                  </div>
                  <p className="text-green-800 text-sm">
                    Valeur Post-Money = Valeur Pré-Money + Montant investi
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">📊 Calcul de la dilution</h4>
                <div className="bg-white p-4 rounded border">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>% de dilution =</span>
                      <span className="font-medium">Montant investi / Valeur Post-Money</span>
                    </div>
                    <div className="flex justify-between">
                      <span>% conservé par les fondateurs =</span>
                      <span className="font-medium">Valeur Pré-Money / Valeur Post-Money</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 Moyen mnémotechnique</h4>
                <p className="text-gray-700 mb-2">
                  <strong>&quot;VANG-TIR&quot;</strong> pour retenir les méthodes avancées :
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li><strong>V</strong>AN → Méthode de base avec réinvestissement au taux d&apos;actualisation</li>
                  <li><strong>A</strong>justement → VANG avec taux de replacement différent</li>
                  <li><strong>N</strong>eutralité → VAN = 0 quand TIR = coût du capital</li>
                  <li><strong>G</strong>lobale → VANG et TIRG pour plus de réalisme</li>
                  <li><strong>T</strong>aux → TIR comme critère de rentabilité</li>
                  <li><strong>I</strong>nvestissement → Application aux start-ups (pré/post-money)</li>
                  <li><strong>R</strong>entabilité → Comparaison avec le coût du capital</li>
                </ul>
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
            href="/section-2" 
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Section II</span>
          </Link>
          
          <Link 
            href="/section-4" 
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            <span>Section IV</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}