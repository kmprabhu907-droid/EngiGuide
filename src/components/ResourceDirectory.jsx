import React, { useState } from 'react';
import {
  GraduationCap,
  ExternalLink,
  Bookmark,
  Filter,
  Search,
  CheckCircle,
  Tag,
  DollarSign
} from 'lucide-react';
import { resources } from '../data/resources';
import { branches } from '../data/branches';

export default function ResourceDirectory({
  searchQuery = '',
  selectedBranchFilter = 'all',
  onSelectBranchFilter,
  savedResourceIds = [],
  onToggleSaveResource
}) {
  const [selectedType, setSelectedType] = useState('all');

  const resourceTypes = [
    'all',
    'OpenCourseWare',
    'Interactive Textbook',
    'Interactive Simulator',
    'Practical Tooling Guide',
    'Reference Guide',
  ];

  const filteredResources = resources.filter((res) => {
    // Branch filter
    if (selectedBranchFilter !== 'all' && res.branch !== selectedBranchFilter && res.branch !== 'all') {
      return false;
    }
    // Type filter
    if (selectedType !== 'all' && res.type !== selectedType) {
      return false;
    }
    // Global search
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      res.title.toLowerCase().includes(q) ||
      res.description.toLowerCase().includes(q) ||
      res.provider.toLowerCase().includes(q) ||
      res.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-8">
      {/* Directory Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-400/30">
            Open & Curated Learning
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            High-Yield Engineering Study Resources
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Free, verified, high-quality open-courseware, textbooks, and interactive visual simulators from top universities and institutions.
          </p>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        {/* Branch Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 sm:w-28 shrink-0">
            Discipline:
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-wrap">
            <button
              onClick={() => onSelectBranchFilter('all')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedBranchFilter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Branches
            </button>
            {branches.map(b => (
              <button
                key={b.id}
                onClick={() => onSelectBranchFilter(b.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedBranchFilter === b.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {b.shortCode}
              </button>
            ))}
          </div>
        </div>

        {/* Resource Type Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 sm:w-28 shrink-0">
            Format:
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-wrap">
            {resourceTypes.map(t => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedType === t
                    ? 'bg-teal-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t === 'all' ? 'All Formats' : t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredResources.length === 0 ? (
          <div className="col-span-full p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
            No resources match the selected filters or search terms.
          </div>
        ) : (
          filteredResources.map((res) => {
            const isSaved = savedResourceIds.includes(res.id);

            return (
              <div
                key={res.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-100">
                      {res.type}
                    </span>
                    <button
                      onClick={() => onToggleSaveResource(res.id)}
                      aria-label="Bookmark resource"
                      className={`p-1.5 rounded-md transition-colors ${
                        isSaved ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400 hover:text-indigo-600'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-indigo-600' : ''}`} />
                    </button>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug mb-1.5 hover:text-indigo-600">
                    {res.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 mb-2.5 flex items-center gap-1.5">
                    <span>{res.provider}</span>
                    <span>•</span>
                    <span className="text-indigo-600">{res.recommendedForYear}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {res.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {res.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Visit External Link */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {res.cost}
                    </span>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline"
                    >
                      Access Material
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
