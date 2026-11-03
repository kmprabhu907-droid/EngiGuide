import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  GraduationCap,
  Rocket,
  CheckSquare,
  Square,
  ExternalLink,
  Compass,
  Award,
  Users
} from 'lucide-react';
import { careerTracks, internshipChecklist, societiesAndChapters } from '../data/career';

export default function CareerRoadmap() {
  const [activeTrackId, setActiveTrackId] = useState(careerTracks[0].id);

  // Persisted internship checklist in localStorage
  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('engiguide_internship_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('engiguide_internship_checklist', JSON.stringify(checkedItems));
    } catch (e) {
      console.error(e);
    }
  }, [checkedItems]);

  const toggleChecklist = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const activeTrack = careerTracks.find(t => t.id === activeTrackId) || careerTracks[0];

  const completedChecklistCount = Object.values(checkedItems).filter(Boolean).length;
  const checklistPercentage = Math.round((completedChecklistCount / internshipChecklist.length) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-10 text-white shadow-xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-purple-400/30">
            Pathways & Readiness
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Engineering Career Pathways & Readiness
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Navigate the transitions from academic lecture halls into industry engineering roles, elite graduate research programs, or deep-tech startup ventures.
          </p>
        </div>
      </div>

      {/* Pathway Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {careerTracks.map((track) => {
          const isSelected = track.id === activeTrack.id;
          return (
            <button
              key={track.id}
              onClick={() => setActiveTrackId(track.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-white border-purple-600 ring-2 ring-purple-600/20 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block ${
                isSelected ? 'bg-purple-100 text-purple-800' : 'bg-slate-100 text-slate-600'
              }`}>
                {track.badge}
              </span>
              <h3 className="font-bold text-slate-900 text-base">
                {track.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Active Track Timeline & Skills */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-1">
            {activeTrack.title}
          </h2>
          <p className="text-sm text-slate-600">
            {activeTrack.summary}
          </p>
        </div>

        {/* Timeline breakdown */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Four-Year Strategic Roadmap
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTrack.keyStages.map((stage, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="text-xs font-bold text-purple-700 uppercase tracking-wide">
                  {stage.year}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {stage.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Matrix */}
        <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
          <h4 className="text-xs font-bold text-purple-950 uppercase tracking-wider mb-2">
            Essential Competencies & Proof of Work
          </h4>
          <ul className="text-xs sm:text-sm text-purple-900 space-y-1 list-disc list-inside">
            {activeTrack.skillMatrix.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Internship & Job Readiness Checklist */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Internship & Resume Readiness Checklist
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Essential verification steps before submitting corporate applications.
            </p>
          </div>
          <div className="text-right sm:text-right">
            <span className="text-xs font-semibold text-slate-500">Readiness Score: </span>
            <span className="text-sm font-bold text-indigo-600">{checklistPercentage}%</span>
          </div>
        </div>

        <div className="space-y-2.5">
          {internshipChecklist.map((item) => {
            const isDone = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleChecklist(item.id)}
                className={`p-3.5 rounded-xl border cursor-pointer select-none transition-all flex items-start gap-3 ${
                  isDone
                    ? 'bg-indigo-50/50 border-indigo-200'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isDone ? (
                    <CheckSquare className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-300 hover:text-slate-400" />
                  )}
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 inline-block mr-2">
                    {item.category}
                  </span>
                  <span className={`text-xs sm:text-sm leading-relaxed ${
                    isDone ? 'line-through text-slate-400' : 'text-slate-800'
                  }`}>
                    {item.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Professional Societies & Technical Networks */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
          <Users className="w-5 h-5 text-indigo-600" />
          Professional Engineering Societies & Student Chapters
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          Joining a recognized engineering institute gives you student journal access, conference discounts, and collegiate competition opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {societiesAndChapters.map((soc, idx) => (
            <a
              key={idx}
              href={soc.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wide block mb-1">
                  {soc.branch}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {soc.name}
                </span>
              </div>
              <div className="mt-2 text-right">
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 inline-block" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
