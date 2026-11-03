import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ResourceDirectory from '../components/ResourceDirectory';

describe('ResourceDirectory Component', () => {
  it('renders curated study materials', () => {
    render(
      <ResourceDirectory
        selectedBranchFilter="all"
        onSelectBranchFilter={vi.fn()}
        savedResourceIds={[]}
        onToggleSaveResource={vi.fn()}
      />
    );
    expect(screen.getByText(/MIT OpenCourseWare: Introduction to Algorithms/i)).toBeInTheDocument();
    expect(screen.getByText(/All About Circuits: Lessons In Electric Circuits/i)).toBeInTheDocument();
  });

  it('filters by resource type', () => {
    render(
      <ResourceDirectory
        selectedBranchFilter="all"
        onSelectBranchFilter={vi.fn()}
        savedResourceIds={[]}
        onToggleSaveResource={vi.fn()}
      />
    );
    const simulatorBtn = screen.getByRole('button', { name: 'Interactive Simulator' });
    fireEvent.click(simulatorBtn);
    expect(screen.getByText(/Falstad Circuit Simulator/i)).toBeInTheDocument();
    expect(screen.queryByText(/MIT OpenCourseWare: Introduction to Algorithms/i)).not.toBeInTheDocument();
  });

  it('calls onToggleSaveResource when bookmark clicked', () => {
    const handleToggle = vi.fn();
    render(
      <ResourceDirectory
        selectedBranchFilter="all"
        onSelectBranchFilter={vi.fn()}
        savedResourceIds={[]}
        onToggleSaveResource={handleToggle}
      />
    );
    const bookmarkButtons = screen.getAllByRole('button', { name: /Bookmark resource/i });
    fireEvent.click(bookmarkButtons[0]);
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
});
