import React, { useState, useEffect } from 'react';
import {
  FolderGit2,
  CheckCircle2,
  Circle,
  Clock,
  Layers,
  Award,
  RotateCcw,
  PlusCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectPlanner({ searchQuery = '' }) {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id || null);

  // Persisted milestone progress state: { [projectId]: { [milestoneIndex]: boolean } }
  const [progressState, setProgressState] = useState(() => {
    try {
      const saved = localStorage.getItem('engiguide_project_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('engiguide_project_progress', JSON.stringify(progressState));
    } catch (e) {
      console.error('Failed to save project progress to local storage', e);
    }
  }, [progressState]);

  const activeProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  const toggleMilestone = (projectId, stepIndex) => {
    setProgressState(prev => {
      const projMilestones = { ...(prev[projectId] || {}) };
      projMilestones[stepIndex] = !projMilestones[stepIndex];
      return {
        ...prev,
        [projectId]: projMilestones
      };
    });
  };

  const resetProjectProgress = (projectId) => {
    setProgressState(prev => {
      const copy = { ...prev };
      delete copy[projectId];
      return copy;
    });
  };

  const filteredProjects = projects.filter(p => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  const getCompletedCount = (project) => {
    const projState = progressState[project.id] || {};
    return project.milestones.filter((_, idx) => projState[idx]).length;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-10 text-white shadow-xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-400/30">
            Project Blueprint Engine
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Engineering Project Planner & Milestone Tracker
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Move past "tutorial purgatory". Pick production-grade engineering projects structured with clear prerequisites, component bill of materials (BOM), and step-by-step verified milestones.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Side: Project Selection Cards */}
        <div className="lg:col-span-5 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Available Project Blueprints
          </h2>

          {filteredProjects.map((project) => {
            const isSelected = project.id === activeProject.id;
            const completedCount = getCompletedCount(project);
            const totalCount = project.milestones.length;
            const progressPercent = Math.round((completedCount / totalCount) * 100);

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-white border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {project.estimatedTime}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm leading-snug mb-1">
                  {project.title}
                </h3>

                {/* Progress bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                    <span>Milestones: {completedCount}/{totalCount}</span>
                    <span className="font-medium text-emerald-700">{progressPercent}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Active Project Deep Dive & Checklist */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {activeProject ? (
            <>
              {/* Active Project Title & Reset */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {activeProject.difficulty} Level
                    </span>
                    <span className="text-xs text-slate-500">
                      Est. Duration: {activeProject.estimatedTime}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {activeProject.title}
                  </h2>
                </div>

                <button
                  onClick={() => resetProjectProgress(activeProject.id)}
                  title="Reset Milestone Progress"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-rose-600 hover:border-rose-200 text-xs font-semibold self-start sm:self-center transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Steps
                </button>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeProject.summary}
              </p>

              {/* Prerequisites & BOM */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Prerequisite Knowledge
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                    {activeProject.prerequisites.map((pre, idx) => (
                      <li key={idx}>{pre}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Recommended BOM / Tech Stack
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                    {activeProject.techStackOrBOM.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Interactive Milestones Checklist */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Implementation Milestones Roadmap</span>
                  <span className="text-xs normal-case text-slate-500 font-normal">
                    Click checkboxes as you finish steps
                  </span>
                </h3>

                <div className="space-y-3">
                  {activeProject.milestones.map((m, idx) => {
                    const isChecked = !!progressState[activeProject.id]?.[idx];

                    return (
                      <div
                        key={idx}
                        onClick={() => toggleMilestone(activeProject.id, idx)}
                        className={`p-4 rounded-xl border cursor-pointer select-none transition-all flex items-start gap-3.5 ${
                          isChecked
                            ? 'bg-emerald-50/60 border-emerald-300'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isChecked ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-300 hover:text-slate-400" />
                          )}
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-500">
                              Step {m.step}:
                            </span>
                            <span className={`text-sm font-semibold ${
                              isChecked ? 'line-through text-emerald-900' : 'text-slate-900'
                            }`}>
                              {m.title}
                            </span>
                          </div>
                          <p className={`text-xs leading-relaxed ${
                            isChecked ? 'text-emerald-800' : 'text-slate-600'
                          }`}>
                            {m.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Outcomes Box */}
              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3">
                <Award className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-indigo-950 uppercase tracking-wider mb-1">
                    Portfolio & Interview Takeaway
                  </div>
                  <p className="text-xs text-indigo-900">
                    {activeProject.outcomes}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center p-8 text-slate-500">
              Select a project from the left panel.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
