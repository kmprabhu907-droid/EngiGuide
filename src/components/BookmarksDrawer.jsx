import React from 'react';
import { Bookmark, X, ExternalLink, Trash2, ArrowRight } from 'lucide-react';
import { concepts } from '../data/concepts';
import { resources } from '../data/resources';

export default function BookmarksDrawer({
  isOpen,
  onClose,
  savedConceptIds = [],
  onToggleSaveConcept,
  savedResourceIds = [],
  onToggleSaveResource,
  onNavigateToTab
}) {
  if (!isOpen) return null;

  const savedConceptsList = concepts.filter(c => savedConceptIds.includes(c.id));
  const savedResourcesList = resources.filter(r => savedResourceIds.includes(r.id));
  const totalCount = savedConceptsList.length + savedResourcesList.length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200">

          {/* Drawer Header */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Bookmark className="w-5 h-5 fill-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Saved Study Items</h3>
                <span className="text-xs text-slate-500">{totalCount} item{totalCount === 1 ? '' : 's'} bookmarked</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="p-5 overflow-y-auto space-y-6 flex-1">
            {totalCount === 0 ? (
              <div className="text-center py-12 px-4 space-y-3">
                <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="font-bold text-slate-800 text-sm">No saved items yet</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Click the bookmark icon on any concept card or study resource to save it for quick revision.
                </p>
              </div>
            ) : (
              <>
                {/* Saved Concepts Section */}
                {savedConceptsList.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Concepts ({savedConceptsList.length})
                      </span>
                      <button
                        onClick={() => {
                          onClose();
                          onNavigateToTab('concepts');
                        }}
                        className="text-xs text-indigo-600 font-semibold hover:underline flex items-center gap-1"
                      >
                        Explore More <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      {savedConceptsList.map((c) => (
                        <div
                          key={c.id}
                          className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 flex items-start justify-between gap-2"
                        >
                          <div>
                            <span className="text-[10px] font-bold text-indigo-600 uppercase">
                              {c.discipline}
                            </span>
                            <h5 className="font-bold text-slate-900 text-xs mt-0.5 line-clamp-1">
                              {c.title}
                            </h5>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {c.summary}
                            </p>
                          </div>
                          <button
                            onClick={() => onToggleSaveConcept(c.id)}
                            title="Remove bookmark"
                            className="text-slate-400 hover:text-rose-500 p-1 shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Saved Resources Section */}
                {savedResourcesList.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Study Materials ({savedResourcesList.length})
                      </span>
                      <button
                        onClick={() => {
                          onClose();
                          onNavigateToTab('resources');
                        }}
                        className="text-xs text-teal-700 font-semibold hover:underline flex items-center gap-1"
                      >
                        Explore More <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      {savedResourcesList.map((r) => (
                        <div
                          key={r.id}
                          className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 flex items-start justify-between gap-2"
                        >
                          <div>
                            <span className="text-[10px] font-bold text-teal-700 uppercase">
                              {r.type}
                            </span>
                            <h5 className="font-bold text-slate-900 text-xs mt-0.5 line-clamp-1">
                              {r.title}
                            </h5>
                            <a
                              href={r.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-indigo-600 hover:underline flex items-center gap-1 mt-1 font-medium"
                            >
                              Open Link <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                          <button
                            onClick={() => onToggleSaveResource(r.id)}
                            title="Remove bookmark"
                            className="text-slate-400 hover:text-rose-500 p-1 shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 text-center">
            <button
              onClick={onClose}
              className="w-full py-2 px-4 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              Close Drawer
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
