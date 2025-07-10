import CourseHeader from '../components/home/CourseHeader';
import CoursePlan from '../components/home/CoursePlan';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center text-xs sm:text-sm text-gray-600">
          <span>Accueil</span> <ChevronRight className="w-3 h-3 mx-1 sm:mx-2" /> <span>Cours</span> <ChevronRight className="w-3 h-3 mx-1 sm:mx-2" /> <span className="text-gray-900 font-medium">Évaluation</span>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <CourseHeader />
        <CoursePlan />
      </div>
    </main>
  );
}
