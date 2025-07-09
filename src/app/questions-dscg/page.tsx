'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, ChevronDown, ChevronUp, CheckCircle, Award } from 'lucide-react';

interface Exercise {
  id: number;
  title: string;
  context: string;
  questions: {
    id: number;
    question: string;
    solution: string;
  }[];
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Valorisation par DCF (DSCG 2017)",
    context: `La société ALPHA est une PME spécialisée dans la conception et la fabrication de pièces mécaniques pour l&apos;industrie automobile. Vous êtes chargé(e) d&apos;évaluer cette entreprise en utilisant la méthode des flux de trésorerie actualisés (DCF).

Données :
- Chiffre d&apos;affaires 2016 : 5 200 K€
- Taux de croissance annuel du CA : 3%
- Taux de marge opérationnelle : 12%
- Taux d&apos;imposition : 33,33%
- BFR : 15% du CA
- Investissements annuels : 300 K€
- Amortissements annuels : 250 K€
- CMPC : 10%
- Taux de croissance à l&apos;infini : 1,5%
- Dette financière nette : 1 200 K€`,
    questions: [
      {
        id: 1,
        question: "Calculez les Free Cash Flows prévisionnels sur 5 ans (2017-2021).",
        solution: `Pour calculer les FCF, nous suivons la formule : FCF = EBIT × (1-t) + Amortissements - Investissements - Variation BFR

**Tableau des FCF prévisionnels (en K€) :**

| Année | 2017 | 2018 | 2019 | 2020 | 2021 |
|-------|------|------|------|------|------|
| CA | 5 356 | 5 517 | 5 682 | 5 853 | 6 028 |
| EBIT (12%) | 643 | 662 | 682 | 702 | 723 |
| EBIT × (1-t) | 428 | 441 | 455 | 468 | 482 |
| + Amortissements | 250 | 250 | 250 | 250 | 250 |
| - Investissements | 300 | 300 | 300 | 300 | 300 |
| - Variation BFR | 23 | 24 | 25 | 26 | 26 |
| = FCF | 355 | 367 | 380 | 392 | 406 |

*Calcul de la variation BFR : 15% × (CA année N - CA année N-1)*`
      },
      {
        id: 2,
        question: "Déterminez la valeur terminale en utilisant la formule de Gordon & Shapiro.",
        solution: `La valeur terminale selon Gordon & Shapiro se calcule avec la formule :
VT = FCF(n+1) / (CMPC - g)

FCF(2022) = FCF(2021) × (1 + g) = 406 × 1,015 = 412 K€

VT = 412 / (0,10 - 0,015) = 412 / 0,085 = 4 847 K€

La valeur terminale est donc de 4 847 K€.`
      },
      {
        id: 3,
        question: "Calculez la valeur d&apos;entreprise (VE) et la valeur des capitaux propres.",
        solution: `**Calcul de la valeur d&apos;entreprise :**

VE = Σ FCF actualisés + VT actualisée

| Année | FCF | Facteur d&apos;actualisation (1,10^n) | FCF actualisé |
|-------|-----|----------------------------------|---------------|
| 2017 | 355 | 1,100 | 323 |
| 2018 | 367 | 1,210 | 303 |
| 2019 | 380 | 1,331 | 285 |
| 2020 | 392 | 1,464 | 268 |
| 2021 | 406 | 1,611 | 252 |

Somme des FCF actualisés = 1 431 K€

VT actualisée = 4 847 / 1,611 = 3 009 K€

VE = 1 431 + 3 009 = 4 440 K€

**Valeur des capitaux propres :**
Valeur des capitaux propres = VE - Dette financière nette
Valeur des capitaux propres = 4 440 - 1 200 = 3 240 K€`
      }
    ]
  },
  {
    id: 2,
    title: "Choix d&apos;investissement et VAN (DSCG 2016)",
    context: `La société BETA envisage de lancer un nouveau produit. Deux scénarios d&apos;investissement sont possibles :

**Projet A :**
- Investissement initial : 800 K€
- Durée de vie : 4 ans
- Flux nets de trésorerie prévisionnels :
  * Année 1 : 250 K€
  * Année 2 : 300 K€
  * Année 3 : 350 K€
  * Année 4 : 200 K€

**Projet B :**
- Investissement initial : 1 200 K€
- Durée de vie : 4 ans
- Flux nets de trésorerie prévisionnels :
  * Année 1 : 400 K€
  * Année 2 : 450 K€
  * Année 3 : 400 K€
  * Année 4 : 300 K€

- Taux d&apos;actualisation : 8%
- Taux de réinvestissement des flux intermédiaires : 5%`,
    questions: [
      {
        id: 1,
        question: "Calculez la VAN classique pour chaque projet et indiquez lequel est préférable selon ce critère.",
        solution: `**Calcul de la VAN classique :**

**Projet A :**
VAN(A) = -800 + 250/(1,08) + 300/(1,08)² + 350/(1,08)³ + 200/(1,08)⁴
VAN(A) = -800 + 231,5 + 257,2 + 277,8 + 147,1 = 113,6 K€

**Projet B :**
VAN(B) = -1 200 + 400/(1,08) + 450/(1,08)² + 400/(1,08)³ + 300/(1,08)⁴
VAN(B) = -1 200 + 370,4 + 385,8 + 317,5 + 220,7 = 94,4 K€

Selon le critère de la VAN classique, le projet A est préférable car sa VAN est supérieure (113,6 K€ > 94,4 K€).`
      },
      {
        id: 2,
        question: "Calculez la VAN Globale (VANG) pour chaque projet en tenant compte du taux de réinvestissement de 5%.",
        solution: `**Calcul de la VAN Globale :**

**Projet A :**
VANG(A) = -800 + [250×(1,05)³ + 300×(1,05)² + 350×(1,05) + 200] / (1,08)⁴
VANG(A) = -800 + [289,4 + 330,8 + 367,5 + 200] / 1,36
VANG(A) = -800 + 1 187,7 / 1,36 = -800 + 873,3 = 73,3 K€

**Projet B :**
VANG(B) = -1 200 + [400×(1,05)³ + 450×(1,05)² + 400×(1,05) + 300] / (1,08)⁴
VANG(B) = -1 200 + [463,1 + 496,1 + 420 + 300] / 1,36
VANG(B) = -1 200 + 1 679,2 / 1,36 = -1 200 + 1 234,7 = 34,7 K€

Selon le critère de la VANG, le projet A reste préférable (73,3 K€ > 34,7 K€), mais l&apos;écart s&apos;est réduit car le taux de réinvestissement (5%) est inférieur au taux d&apos;actualisation (8%).`
      },
      {
        id: 3,
        question: "Calculez l&apos;Indice de Profitabilité (IP) pour chaque projet et commentez.",
        solution: `**Calcul de l&apos;Indice de Profitabilité :**

**Projet A :**
IP(A) = (Somme des flux actualisés) / Investissement initial
IP(A) = (231,5 + 257,2 + 277,8 + 147,1) / 800 = 913,6 / 800 = 1,142

**Projet B :**
IP(B) = (370,4 + 385,8 + 317,5 + 220,7) / 1 200 = 1 294,4 / 1 200 = 1,079

L&apos;indice de profitabilité du projet A (1,142) est supérieur à celui du projet B (1,079), ce qui confirme que le projet A est plus rentable par euro investi. Cela est particulièrement pertinent dans un contexte de ressources financières limitées.`
      }
    ]
  },
  {
    id: 3,
    title: "Valorisation par multiples (DSCG 2018)",
    context: `La société GAMMA, spécialisée dans la distribution de produits électroniques, souhaite acquérir la société DELTA. Vous êtes chargé(e) d&apos;évaluer DELTA en utilisant la méthode des multiples boursiers.

Données de DELTA :
- Chiffre d&apos;affaires : 12 M€
- EBE (EBITDA) : 2,4 M€
- Résultat d&apos;exploitation (EBIT) : 1,8 M€
- Résultat net : 1,2 M€
- Dette financière nette : 3,5 M€

Multiples moyens du secteur :
- VE/CA : 1,2x
- VE/EBE : 6,5x
- VE/RE : 8,5x
- PER : 12x`,
    questions: [
      {
        id: 1,
        question: "Calculez la valeur d&apos;entreprise (VE) de DELTA selon les différents multiples.",
        solution: `**Calcul de la valeur d&apos;entreprise selon les multiples :**

**Multiple VE/CA :**
VE = 1,2 × 12 M€ = 14,4 M€

**Multiple VE/EBE :**
VE = 6,5 × 2,4 M€ = 15,6 M€

**Multiple VE/RE :**
VE = 8,5 × 1,8 M€ = 15,3 M€

Les valeurs d&apos;entreprise obtenues sont relativement cohérentes, variant de 14,4 M€ à 15,6 M€.`
      },
      {
        id: 2,
        question: "Calculez la valeur des capitaux propres de DELTA selon chaque approche.",
        solution: `**Calcul de la valeur des capitaux propres :**

Valeur des capitaux propres = Valeur d&apos;entreprise - Dette financière nette

**Selon VE/CA :**
Valeur des capitaux propres = 14,4 - 3,5 = 10,9 M€

**Selon VE/EBE :**
Valeur des capitaux propres = 15,6 - 3,5 = 12,1 M€

**Selon VE/RE :**
Valeur des capitaux propres = 15,3 - 3,5 = 11,8 M€

**Selon PER :**
Valeur des capitaux propres = 12 × 1,2 = 14,4 M€

La valeur des capitaux propres varie de 10,9 M€ à 14,4 M€ selon la méthode utilisée.`
      },
      {
        id: 3,
        question: "Proposez une fourchette de valorisation pour DELTA et justifiez votre choix.",
        solution: `**Fourchette de valorisation :**

En excluant les valeurs extrêmes, nous pouvons proposer une fourchette de valorisation entre 11,8 M€ et 12,1 M€ pour les capitaux propres de DELTA.

**Justification :**

1. Les multiples VE/EBE et VE/RE sont généralement plus pertinents que le VE/CA car ils prennent en compte la rentabilité de l&apos;entreprise.

2. La valorisation par le PER (14,4 M€) semble élevée par rapport aux autres méthodes, ce qui pourrait s&apos;expliquer par des éléments exceptionnels dans le résultat net ou des structures financières différentes entre DELTA et les sociétés comparables.

3. Pour une acquisition, il est recommandé de privilégier une approche prudente, d&apos;où l&apos;exclusion de la valeur haute (14,4 M€).

4. La fourchette proposée (11,8 M€ - 12,1 M€) représente un multiple d&apos;EBE d&apos;environ 5x (après déduction de la dette), ce qui semble raisonnable pour le secteur de la distribution électronique.`
      }
    ]
  }
];

export default function QuestionsDSCGPage() {
  const [openExercise, setOpenExercise] = useState<number | null>(null);
  const [openSolutions, setOpenSolutions] = useState<{[key: number]: boolean}>({});

  const toggleExercise = (id: number) => {
    setOpenExercise(openExercise === id ? null : id);
  };

  const toggleSolution = (questionId: number) => {
    setOpenSolutions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

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
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
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
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Section VII
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">VII - Cas Pratiques</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exercices et annales du DSCG avec solutions détaillées
          </p>
        </motion.div>

        {/* Exercises */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {exercises.map((exercise) => (
            <div key={exercise.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleExercise(exercise.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                    {exercise.id}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{exercise.title}</h2>
                </div>
                {openExercise === exercise.id ? (
                  <ChevronUp className="w-6 h-6 text-gray-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </button>
              
              <AnimatePresence>
                {openExercise === exercise.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 py-6 border-t border-gray-200">
                      <div className="bg-gray-50 p-6 rounded-xl mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contexte</h3>
                        <div className="prose prose-gray max-w-none">
                          {exercise.context.split('\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-4">{paragraph}</p>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-8">
                        {exercise.questions.map((q) => (
                          <div key={q.id} className="border border-gray-200 rounded-xl overflow-hidden">
                            <div className="bg-purple-50 px-6 py-4 border-b border-gray-200">
                              <h4 className="text-lg font-semibold text-purple-900">Question {q.id}</h4>
                              <p className="text-purple-800">{q.question}</p>
                            </div>
                            
                            <div className="p-6">
                              <button
                                onClick={() => toggleSolution(q.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                  openSolutions[q.id] 
                                    ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                              >
                                {openSolutions[q.id] ? (
                                  <>
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Masquer la solution</span>
                                  </>
                                ) : (
                                  <>
                                    <Award className="w-4 h-4" />
                                    <span>Voir la solution</span>
                                  </>
                                )}
                              </button>
                              
                              <AnimatePresence>
                                {openSolutions[q.id] && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-6">
                                      <h5 className="text-lg font-semibold text-green-900 mb-4">Solution</h5>
                                      <div className="prose prose-sm max-w-none">
                                        {q.solution.split('\n').map((paragraph, idx) => {
                                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                            return (
                                              <h6 key={idx} className="text-green-800 font-bold mt-4 mb-2">
                                                {paragraph.replace(/\*\*/g, '')}
                                              </h6>
                                            );
                                          } else if (paragraph.startsWith('|')) {
                                            // This is a table
                                            const rows = paragraph.split('\n').filter(row => row.trim() !== '');
                                            if (rows.length >= 2) {
                                              return (
                                                <div key={idx} className="overflow-x-auto my-4">
                                                  <table className="min-w-full divide-y divide-green-200 border border-green-200">
                                                    <thead>
                                                      <tr>
                                                        {rows[0].split('|').filter(cell => cell.trim() !== '').map((cell, cellIdx) => (
                                                          <th key={cellIdx} className="px-3 py-2 bg-green-100 text-green-800 text-left text-xs font-medium uppercase tracking-wider">
                                                            {cell.trim()}
                                                          </th>
                                                        ))}
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      {rows.slice(2).map((row, rowIdx) => (
                                                        <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                                                          {row.split('|').filter(cell => cell.trim() !== '').map((cell, cellIdx) => (
                                                            <td key={cellIdx} className="px-3 py-2 text-xs text-green-800">
                                                              {cell.trim()}
                                                            </td>
                                                          ))}
                                                        </tr>
                                                      ))}
                                                    </tbody>
                                                  </table>
                                                </div>
                                              );
                                            }
                                          } else if (paragraph.startsWith('*')) {
                                            return (
                                              <p key={idx} className="text-green-700 italic text-sm mt-2">
                                                {paragraph.replace(/\*/g, '')}
                                              </p>
                                            );
                                          }
                                          return <p key={idx} className="text-green-800 mb-2">{paragraph}</p>;
                                        })}
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-indigo-50 border border-indigo-200 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Conseils méthodologiques</h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">1. Analyse du contexte</h3>
              <p className="text-indigo-700">
                Prenez le temps d&apos;identifier les informations clés dans l&apos;énoncé : données financières, 
                hypothèses, contraintes spécifiques. Soulignez les chiffres importants.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">2. Choix de la méthode</h3>
              <p className="text-indigo-700">
                Adaptez votre approche au contexte : méthodes analogiques pour les comparaisons sectorielles, 
                DCF pour les projections long terme, VAN/TIR pour les décisions d'investissement.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">3. Présentation des calculs</h3>
              <p className="text-indigo-700">
                Structurez vos réponses avec des tableaux clairs et des étapes intermédiaires. 
                Arrondissez les résultats de manière cohérente et précisez les unités (K€, M€).
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">4. Analyse critique</h3>
              <p className="text-indigo-700">
                Commentez vos résultats en soulignant les limites des méthodes utilisées et 
                en proposant des approches complémentaires pour une évaluation plus robuste.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center pt-8 mt-12"
        >
          <Link
            href="/van-probabilisee"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>VAN Probabilisée</span>
          </Link>
          
          <Link
            href="/quiz"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <span>Quiz Final</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}