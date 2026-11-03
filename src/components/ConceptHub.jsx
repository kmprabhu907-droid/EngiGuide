import React, { useState } from 'react';
import {
  BookOpen,
  Lightbulb,
  HelpCircle,
  CheckCircle,
  XCircle,
  Bookmark,
  ArrowRight,
  Filter,
  Layers,
  Sparkles
} from 'lucide-react';
import { concepts } from '../data/concepts';

export default function ConceptHub({ searchQuery = '', savedConceptIds = [], onToggleSaveConcept }) {
  const [selectedDiscipline, setSelectedDiscipline] = useState('all');
  const [expandedConceptId, setExpandedConceptId] = useState(concepts[0]?.id || null);
  const [quizAnswers, setQuizAnswers] = useState({}); // { [conceptId]: { selectedIndex, submitted: boolean } }

  const disciplines = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'Cross-Disciplinary', label: 'Cross-Disciplinary' },
    { id: 'Computer Science', label: 'Computer Science' },
    { id: 'Electrical & Hardware', label: 'Electrical & Hardware' },
    { id: 'Mechanical & Civil', label: 'Mechanical & Civil' },
    { id: 'Signals & Communications', label: 'Signals & Communications' },
    { id: 'Robotics & Systems', label: 'Robotics & Systems' },
  ];

  const filteredConcepts = concepts.filter((c) => {
    const matchesDiscipline = selectedDiscipline === 'all' || c.discipline === selectedDiscipline;
    if (!matchesDiscipline) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.summary.toLowerCase().includes(q) ||
      c.analogy.toLowerCase().includes(q) ||
      c.applications.some(a => a.toLowerCase().includes(q))
    );
  });

  const handleSelectAnswer = (conceptId, optionIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [conceptId]: {
        selectedIndex: optionIndex,
        submitted: true
      }
    }));
  };

  const handleResetQuiz = (conceptId) => {
    setQuizAnswers(prev => {
      const copy = { ...prev };
      delete copy[conceptId];
      return copy;
    });
  };

  return (
    <div className="space-y-8">
      {/* Concept Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-400/30">
            First-Principles Learning
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Core Engineering Concepts Hub
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Formulas are easily forgotten, but the physical intuition stays forever. Explore foundational concepts with intuitive analogies, mathematical formulas, and quick self-assessment questions.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 mr-1" />
        {disciplines.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDiscipline(d.id)}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
              selectedDiscipline === d.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Concept Cards List */}
      <div className="space-y-4">
        {filteredConcepts.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
            No concepts matched your search query. Try broadening your terms.
          </div>
        ) : (
          filteredConcepts.map((concept) => {
            const isExpanded = expandedConceptId === concept.id;
            const isSaved = savedConceptIds.includes(concept.id);
            const userQuiz = quizAnswers[concept.id];

            return (
              <div
                key={concept.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all hover:border-slate-300"
              >
                {/* Collapsible Card Header */}
                <div
                  onClick={() => setExpandedConceptId(isExpanded ? null : concept.id)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-slate-50/50"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                        {concept.discipline}
                      </span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        concept.difficulty === 'Fundamental'
                          ? 'bg-emerald-50 text-emerald-700'
                          : concept.difficulty === 'Intermediate'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-purple-50 text-purple-700'
                      }`}>
                        {concept.difficulty}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                      {concept.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {concept.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveConcept(concept.id);
                      }}
                      aria-label="Bookmark Concept"
                      className={`p-2 rounded-lg border transition-colors ${
                        isSaved
                          ? 'bg-indigo-50 border-indigo-300 text-indigo-600'
                          : 'bg-white border-slate-200 text-slate-400 hover:text-indigo-600'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-indigo-600' : ''}`} />
                    </button>
                    <span className="text-xs font-semibold text-indigo-600 px-3 py-1.5 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                      {isExpanded ? 'Hide Details' : 'Deep Dive'}
                    </span>
                  </div>
                </div>

                {/* Expanded Card Details */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-6 animate-in fade-in duration-150">

                    {/* The Intuitive Analogy Box */}
                    <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                        <Lightbulb className="w-4 h-4 text-amber-600" />
                        The Intuitive Analogy
                      </div>
                      <p className="text-xs sm:text-sm text-amber-950 leading-relaxed italic">
                        "{concept.analogy}"
                      </p>
                    </div>

                    {/* Formula & Definition */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Governing Equation / Formal Law
                        </div>
                        <div className="font-mono text-sm sm:text-base font-semibold text-indigo-900 bg-white p-3 rounded-lg border border-slate-200">
                          {concept.keyFormula}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Common Engineering Applications
                        </div>
                        <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                          {concept.applications.map((app, i) => (
                            <li key={i}>{app}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pitfalls to Avoid */}
                    <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100">
                      <div className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2">
                        Common Misconceptions & Traps
                      </div>
                      <ul className="text-xs text-rose-950 space-y-1 list-disc list-inside">
                        {concept.pitfalls.map((pitfall, i) => (
                          <li key={i}>{pitfall}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Knowledge Check Quiz */}
                    {concept.quiz && (
                      <div className="border border-indigo-100 rounded-xl p-5 bg-gradient-to-b from-indigo-50/40 to-white">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                            <HelpCircle className="w-4 h-4 text-indigo-600" />
                            Knowledge Check Quiz
                          </div>
                          {userQuiz?.submitted && (
                            <button
                              onClick={() => handleResetQuiz(concept.id)}
                              className="text-xs text-indigo-600 hover:underline font-medium"
                            >
                              Retry Question
                            </button>
                          )}
                        </div>

                        <p className="text-sm font-medium text-slate-800 mb-3">
                          {concept.quiz.question}
                        </p>

                        <div className="space-y-2">
                          {concept.quiz.options.map((option, optIdx) => {
                            const isSelected = userQuiz?.selectedIndex === optIdx;
                            const isCorrect = optIdx === concept.quiz.correctAnswerIndex;
                            const showResult = userQuiz?.submitted;

                            let buttonStyle = 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300';
                            if (showResult) {
                              if (isCorrect) {
                                buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-medium';
                              } else if (isSelected && !isCorrect) {
                                buttonStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                              } else {
                                buttonStyle = 'bg-white border-slate-200 text-slate-400 opacity-60';
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={showResult}
                                onClick={() => handleSelectAnswer(concept.id, optIdx)}
                                className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm flex items-center justify-between transition-all ${buttonStyle}`}
                              >
                                <span>{option}</span>
                                {showResult && isCorrect && (
                                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                                )}
                                {showResult && isSelected && !isCorrect && (
                                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 ml-2" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {userQuiz?.submitted && (
                          <div className="mt-4 p-3 rounded-lg bg-indigo-50 border border-indigo-200 text-xs text-indigo-950">
                            <span className="font-bold">Explanation: </span>
                            {concept.quiz.explanation}
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
