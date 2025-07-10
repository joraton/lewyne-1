'use client';

import { motion } from 'framer-motion';
import { Target, Rocket, BarChart3, TrendingUp, Calculator, HelpCircle, Award, GitCompare, PieChart } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Concepts fondamentaux de l&apos;évaluation financière',
    icon: Rocket,
    color: 'blue',
    href: '/introduction'
  },
  {
    id: 'section-1',
    title: 'I - Méthodes d&apos;Évaluation par Comparaison',
    description: 'Capitalisation boursière, valeur d&apos;entreprise et multiples',
    icon: BarChart3,
    color: 'green',
    href: '/section-1'
  },
  {
    id: 'section-2',
    title: 'II - Méthode des Flux de Trésorerie Actualisés (DCF)',
    description: 'Discounted Cash Flow et calcul du CMPC',
    icon: TrendingUp,
    color: 'purple',
    href: '/section-2'
  },
  {
    id: 'investissements',
    title: 'III - Critères de Rentabilité des Investissements',
    description: 'VAN, TIR, Indice de Profitabilité et exemples pratiques',
    icon: Target,
    color: 'indigo',
    href: '/investissements'
  },
  {
    id: 'section-3',
    title: 'IV - Méthodes Avancées d&apos;Actualisation',
    description: 'VAN Globale, TIR Global et applications pratiques',
    icon: Calculator,
    color: 'orange',
    href: '/section-3'
  },
  {
    id: 'comparaison-projets',
    title: 'V - Comparaison et Sélection de Projets',
    description: 'PPCM, Annuité Équivalente et critères de divergence',
    icon: GitCompare,
    color: 'pink',
    href: '/comparaison-projets'
  },
  {
    id: 'van-probabilisee',
    title: 'VI - Gestion du Risque dans l&apos;Évaluation',
    description: 'VAN Probabilisée et intégration de l&apos;incertitude',
    icon: PieChart,
    color: 'cyan',
    href: '/van-probabilisee'
  },
  {
    id: 'questions-dscg',
    title: 'VII - Cas Pratiques',
    description: 'Exercices et annales du DSCG avec solutions détaillées',
    icon: Award,
    color: 'purple',
    href: '/questions-dscg'
  },
  {
    id: 'quiz',
    title: 'Quiz Final',
    description: 'Testez vos connaissances avec des exercices pratiques',
    icon: HelpCircle,
    color: 'red',
    href: '/quiz'
  }
];

export default function CoursePlan() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8"
    >
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Plan du cours</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 text-sm sm:text-lg"
        >
          Suivez le parcours structuré pour maîtriser l&apos;évaluation financière
        </motion.p>
      </div>

      {/* Sections */}
      <div className="space-y-3 sm:space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
          >
            <SectionBlock 
              title={section.title}
              description={section.description}
              icon={section.icon}
              color={section.color}
              href={section.href}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}