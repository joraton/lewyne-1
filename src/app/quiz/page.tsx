'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Trophy, RotateCcw, Target } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la formule de la Valeur d'Entreprise (VE) ?",
    options: [
      "VE = Capitalisation boursière + Dettes financières nettes",
      "VE = Capitalisation boursière - Dettes financières nettes",
      "VE = Actif total - Passif total",
      "VE = Chiffre d'affaires × Multiple sectoriel"
    ],
    correct: 0,
    explanation: "La Valeur d'Entreprise correspond à la capitalisation boursière augmentée des dettes financières nettes. Elle représente la valeur totale de l'entreprise."
  },
  {
    id: 2,
    question: "Dans la méthode DCF, que représente le Free Cash Flow (FCF) ?",
    options: [
      "Le résultat net de l'entreprise",
      "Les flux de trésorerie disponibles pour les actionnaires et créanciers",
      "Le chiffre d'affaires moins les charges",
      "Les dividendes versés aux actionnaires"
    ],
    correct: 1,
    explanation: "Le FCF représente les flux de trésorerie générés par l'activité opérationnelle, disponibles pour rémunérer les pourvoyeurs de capitaux (actionnaires et créanciers)."
  },
  {
    id: 3,
    question: "Quel multiple boursier compare la valeur d'entreprise au résultat d'exploitation ?",
    options: [
      "VE/CA (Valeur d'Entreprise / Chiffre d'Affaires)",
      "VE/EBE (Valeur d'Entreprise / Excédent Brut d'Exploitation)",
      "VE/RE (Valeur d'Entreprise / Résultat d'Exploitation)",
      "PER (Price Earnings Ratio)"
    ],
    correct: 2,
    explanation: "Le multiple VE/RE compare la valeur d'entreprise au résultat d'exploitation. Il permet d'évaluer combien les investisseurs sont prêts à payer pour chaque euro de résultat opérationnel."
  },
  {
    id: 4,
    question: "Dans le calcul du CMPC, que représente le coefficient bêta ?",
    options: [
      "Le taux sans risque du marché",
      "La prime de risque du marché",
      "Le risque systématique de l'entreprise par rapport au marché",
      "Le coût de la dette de l'entreprise"
    ],
    correct: 2,
    explanation: "Le bêta mesure la sensibilité du titre par rapport aux variations du marché. Un bêta > 1 indique un titre plus volatil que le marché, un bêta < 1 indique un titre moins volatil."
  },
  {
    id: 5,
    question: "Quelle est la condition pour qu'un projet soit rentable selon la VAN ?",
    options: [
      "VAN = 0",
      "VAN > 0",
      "VAN < 0",
      "VAN = TIR"
    ],
    correct: 1,
    explanation: "Un projet est rentable si sa VAN est positive (VAN > 0), car cela signifie qu'il crée de la valeur en générant plus que le coût du capital investi."
  },
  {
    id: 6,
    question: "Dans la valorisation des start-ups, comment calcule-t-on la valeur post-money ?",
    options: [
      "Valeur post-money = Valeur pré-money - Montant investi",
      "Valeur post-money = Valeur pré-money + Montant investi",
      "Valeur post-money = Montant investi / % de dilution",
      "Valeur post-money = Valeur pré-money × % conservé"
    ],
    correct: 1,
    explanation: "La valeur post-money correspond à la valeur de l'entreprise après l'investissement, soit la valeur pré-money augmentée du montant investi."
  },
  {
    id: 7,
    question: "Quelle méthode de calcul de la valeur terminale utilise un taux de croissance perpétuel ?",
    options: [
      "Méthode des Multiples",
      "Méthode Gordon & Shapiro",
      "Méthode du TIR",
      "Méthode de la VAN Globale"
    ],
    correct: 1,
    explanation: "La méthode Gordon & Shapiro calcule la valeur terminale en supposant une croissance perpétuelle des flux à un taux constant : VT = FCF(n+1) / (CMPC - g)."
  },
  {
    id: 8,
    question: "Quelle est la principale différence entre VAN et VAN Globale ?",
    options: [
      "La VAN Globale ne prend pas en compte l'investissement initial",
      "La VAN Globale utilise un taux de réinvestissement différent du taux d'actualisation",
      "La VAN Globale ne s'applique qu'aux start-ups",
      "La VAN Globale utilise des flux nominaux au lieu de flux réels"
    ],
    correct: 1,
    explanation: "La VAN Globale prend explicitement en compte le taux de réinvestissement des cash flows intermédiaires, qui peut être différent du taux d'actualisation utilisé pour la VAN classique."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez parfaitement les concepts d\'évaluation.';
    if (percentage >= 60) return 'Bien ! Quelques révisions vous permettront de parfaire vos connaissances.';
    return 'Il est recommandé de revoir le cours avant de passer aux questions DSCG.';
  };

  if (quizCompleted) {
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
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '83.33%' }}></div>
              </div>
              <span className="text-sm text-gray-600">5/6</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Terminé !</h1>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="text-6xl font-bold mb-4 ${getScoreColor()}">
                {score}/{questions.length}
              </div>
              <div className="text-2xl font-semibold text-gray-700 mb-2">
                Score : {Math.round((score / questions.length) * 100)}%
              </div>
              <p className="text-lg text-gray-600 mb-6">
                {getScoreMessage()}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Recommencer</span>
                </button>
                
                <Link 
                  href="/questions-dscg" 
                  className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <span>Questions DSCG</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

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
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '83.33%' }}></div>
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
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Quiz d'Évaluation</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testez vos connaissances sur les méthodes d'évaluation financière.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Question {currentQuestion + 1} sur {questions.length}</span>
            <span className="text-sm text-gray-600">Score : {score}/{currentQuestion + (showResult ? 1 : 0)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ";
              
              if (showResult) {
                if (index === questions[currentQuestion].correct) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (index === selectedAnswer && index !== questions[currentQuestion].correct) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  buttonClass += "border-gray-200 bg-gray-50 text-gray-500";
                }
              } else {
                if (selectedAnswer === index) {
                  buttonClass += "border-orange-500 bg-orange-50 text-orange-800";
                } else {
                  buttonClass += "border-gray-200 hover:border-orange-300 hover:bg-orange-50";
                }
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  disabled={showResult}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0">
                      {showResult && index === questions[currentQuestion].correct && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {showResult && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                        <XCircle className="w-4 h-4" />
                      )}
                      {!showResult && selectedAnswer === index && (
                        <div className="w-3 h-3 rounded-full bg-current"></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
              >
                <h3 className="font-semibold text-blue-900 mb-2">Explication :</h3>
                <p className="text-blue-800">{questions[currentQuestion].explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Next Button */}
        {!showResult && (
          <div className="flex justify-center">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                selectedAnswer !== null
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Terminer le quiz' : 'Question suivante'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}