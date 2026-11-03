import React, { useState } from 'react';
import {
  Laptop,
  Cpu,
  Cog,
  Building2,
  FlaskConical,
  Compass,
  ArrowRight,
  Layers,
  Wrench,
  Briefcase,
  AlertCircle,
  CheckCircle2,
  GitCompare
} from 'lucide-react';
import { branches } from '../data/branches';

const iconMap = {
  Laptop,
  Cpu,
  Cog,
  Building2,
  FlaskConical,
  Compass
};

export default function BranchExplorer({ searchQuery = '', onSelectBranchForResources }) {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [comparingBranch, setComparingBranch] = useState(null);
  const [compareMode, setCompareMode] = useState(false);

  const filteredBranches = branches.filter(b => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      b.name.toLowerCase().includes(q) ||
      b.shortCode.toLowerCase().includes(q) ||
      b.coreSubjects.some(s => s.toLowerCase().includes(q)) ||
      b.keyToolsAndTech.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-400/30">
            Discipline Navigator
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            Explore Major Engineering Disciplines
          </h1>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Understand what each branch truly entails before deciding your focus or specialisation. Compare curricula, industry-grade toolchains, core subjects, and dispel prevalent student myths.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => {
                setCompareMode(!compareMode);
                if (!comparingBranch) setComparingBranch(branches[1]);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all"
            >
              <GitCompare className="w-4 h-4 text-indigo-300" />
              {compareMode ? 'Exit Branch Comparison' : 'Compare Two Branches'}
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Branch Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {filteredBranches.map((branch) => {
          const Icon = iconMap[branch.icon] || Compass;
          const isSelected = selectedBranch?.id === branch.id;
          return (
            <button
              key={branch.id}
              onClick={() => {
                setSelectedBranch(branch);
                if (compareMode && comparingBranch?.id === branch.id) {
                  setComparingBranch(branches.find(b => b.id !== branch.id) || null);
                }
              }}
              className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-50/80 border-indigo-500 ring-2 ring-indigo-500/20 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50/50'
              }`}
            >
              <div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                  isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-0.5">
                  {branch.shortCode}
                </div>
                <h3 className="font-semibold text-slate-900 text-sm leading-tight line-clamp-2">
                  {branch.name}
                </h3>
              </div>
            </button>
          );
        })}
      </div>

      {/* Comparison View or Single Branch Deep Dive */}
      {compareMode ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-200 gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <GitCompare className="w-5 h-5 text-indigo-600" />
                Side-by-Side Discipline Comparison
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Contrast fundamentals, tools, and career directions to make informed academic plans.
              </p>
            </div>
            {/* Branch 2 Picker */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-600 font-medium">Compare with:</span>
              <select
                value={comparingBranch?.id || ''}
                onChange={(e) => setComparingBranch(branches.find(b => b.id === e.target.value))}
                className="px-3 py-1.5 border border-slate-300 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {branches.map(b => (
                  <option key={b.id} value={b.id} disabled={b.id === selectedBranch.id}>
                    {b.name} ({b.shortCode})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Branch 1 */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-indigo-900">{selectedBranch.name}</h3>
                <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs font-semibold">
                  {selectedBranch.shortCode}
                </span>
              </div>
              <p className="text-xs text-slate-600 italic">{selectedBranch.tagline}</p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Core Subjects</h4>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  {selectedBranch.coreSubjects.map((sub, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Industry Toolchains</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedBranch.keyToolsAndTech.map((tool, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-700 rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Target Roles</h4>
                <ul className="text-xs space-y-1 text-slate-600">
                  {selectedBranch.careerTracks.map((role, i) => (
                    <li key={i}>• {role}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Branch 2 */}
            {comparingBranch && (
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-indigo-900">{comparingBranch.name}</h3>
                  <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs font-semibold">
                    {comparingBranch.shortCode}
                  </span>
                </div>
                <p className="text-xs text-slate-600 italic">{comparingBranch.tagline}</p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Core Subjects</h4>
                  <ul className="text-xs space-y-1.5 text-slate-700">
                    {comparingBranch.coreSubjects.map((sub, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Industry Toolchains</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {comparingBranch.keyToolsAndTech.map((tool, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-700 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Target Roles</h4>
                  <ul className="text-xs space-y-1 text-slate-600">
                    {comparingBranch.careerTracks.map((role, i) => (
                      <li key={i}>• {role}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Single Branch Deep Dive */
        selectedBranch && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 animate-in fade-in duration-200">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 font-semibold text-xs uppercase tracking-wider mb-2">
                  {selectedBranch.category}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {selectedBranch.name}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-1">
                  {selectedBranch.tagline}
                </p>
              </div>

              {onSelectBranchForResources && (
                <button
                  onClick={() => onSelectBranchForResources(selectedBranch.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors whitespace-nowrap self-start sm:self-center shadow-sm"
                >
                  View Study Materials
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Overview paragraph */}
            <div className="text-slate-700 leading-relaxed text-sm sm:text-base bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80">
              <span className="font-semibold text-slate-900 block mb-1">Discipline Overview:</span>
              {selectedBranch.overview}
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Core Subjects */}
              <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-xs">
                <div className="flex items-center gap-2 mb-3 text-indigo-700 font-bold text-base">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  Key Undergraduate Subjects
                </div>
                <p className="text-xs text-slate-500 mb-3">
                  Foundational coursework typically encountered between Semesters 2 and 6.
                </p>
                <div className="space-y-2">
                  {selectedBranch.coreSubjects.map((subject, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Tech Stack */}
              <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-xs">
                <div className="flex items-center gap-2 mb-3 text-indigo-700 font-bold text-base">
                  <Wrench className="w-5 h-5 text-indigo-600" />
                  Standard Industry Toolchains
                </div>
                <p className="text-xs text-slate-500 mb-3">
                  Software, simulation environments, and physical equipment to practice outside class.
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedBranch.keyToolsAndTech.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Misconceptions & Clarifications */}
            <div className="border border-amber-200 bg-amber-50/50 rounded-xl p-5">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-3">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                Common Student Misconceptions & Reality
              </div>
              <div className="space-y-2.5">
                {selectedBranch.commonMisconceptions.map((misconception, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-950">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{misconception}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Roles & Project Archetypes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                  Common Industry Career Roles
                </div>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                  {selectedBranch.careerTracks.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
                  <Wrench className="w-4 h-4 text-indigo-600" />
                  Hands-on Portfolio Project Ideas
                </div>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                  {selectedBranch.projectTypes.map((idea, idx) => (
                    <li key={idx}>{idea}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        )
      )}
    </div>
  );
}
