import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BranchExplorer from './components/BranchExplorer';
import ConceptHub from './components/ConceptHub';
import ResourceDirectory from './components/ResourceDirectory';
import ProjectPlanner from './components/ProjectPlanner';
import CareerRoadmap from './components/CareerRoadmap';
import BookmarksDrawer from './components/BookmarksDrawer';
import {
  GraduationCap,
  Compass,
  BookOpen,
  FolderGit2,
  Briefcase,
  Heart,
  ExternalLink,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('branches');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranchFilter, setSelectedBranchFilter] = useState('all');
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  // Saved bookmarks state persisted in localStorage
  const [savedConceptIds, setSavedConceptIds] = useState(() => {
    try {
      const saved = localStorage.getItem('engiguide_saved_concepts');
      return saved ? JSON.parse(saved) : ['c1', 'c2'];
    } catch {
      return ['c1', 'c2'];
    }
  });

  const [savedResourceIds, setSavedResourceIds] = useState(() => {
    try {
      const saved = localStorage.getItem('engiguide_saved_resources');
      return saved ? JSON.parse(saved) : ['res-1'];
    } catch {
      return ['res-1'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('engiguide_saved_concepts', JSON.stringify(savedConceptIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedConceptIds]);

  useEffect(() => {
    try {
      localStorage.setItem('engiguide_saved_resources', JSON.stringify(savedResourceIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedResourceIds]);

  const toggleSaveConcept = (id) => {
    setSavedConceptIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleSaveResource = (id) => {
    setSavedResourceIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const totalBookmarkCount = savedConceptIds.length + savedResourceIds.length;

  const handleSelectBranchForResources = (branchId) => {
    setSelectedBranchFilter(branchId);
    setActiveTab('resources');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-indigo-100 selection:text-indigo-900">

      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        bookmarkCount={totalBookmarkCount}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* Quick Branch / Resource Jump Notification when search is active */}
        {searchQuery && (
          <div className="mb-6 p-4 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-between">
            <span className="text-xs sm:text-sm text-indigo-900 font-medium">
              Showing matching results for "<strong>{searchQuery}</strong>"
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-indigo-700 font-bold hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Tab Views */}
        {activeTab === 'branches' && (
          <BranchExplorer
            searchQuery={searchQuery}
            onSelectBranchForResources={handleSelectBranchForResources}
          />
        )}

        {activeTab === 'concepts' && (
          <ConceptHub
            searchQuery={searchQuery}
            savedConceptIds={savedConceptIds}
            onToggleSaveConcept={toggleSaveConcept}
          />
        )}

        {activeTab === 'resources' && (
          <ResourceDirectory
            searchQuery={searchQuery}
            selectedBranchFilter={selectedBranchFilter}
            onSelectBranchFilter={setSelectedBranchFilter}
            savedResourceIds={savedResourceIds}
            onToggleSaveResource={toggleSaveResource}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectPlanner
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'career' && (
          <CareerRoadmap />
        )}
      </main>

      {/* Slide-out Bookmarks Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedConceptIds={savedConceptIds}
        onToggleSaveConcept={toggleSaveConcept}
        savedResourceIds={savedResourceIds}
        onToggleSaveResource={toggleSaveResource}
        onNavigateToTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              E
            </div>
            <span className="font-bold text-slate-800 text-sm">EngiGuide</span>
            <span>— The Student Engineering Companion</span>
          </div>

          <div className="text-slate-400">
            Open-access, non-commercial educational reference. Verified for engineering students.
          </div>

          <div className="flex items-center gap-4 text-slate-600 font-medium">
            <button onClick={() => setActiveTab('branches')} className="hover:text-indigo-600">Branches</button>
            <button onClick={() => setActiveTab('concepts')} className="hover:text-indigo-600">Concepts</button>
            <button onClick={() => setActiveTab('resources')} className="hover:text-indigo-600">Resources</button>
            <button onClick={() => setActiveTab('projects')} className="hover:text-indigo-600">Projects</button>
            <button onClick={() => setActiveTab('career')} className="hover:text-indigo-600">Careers</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
