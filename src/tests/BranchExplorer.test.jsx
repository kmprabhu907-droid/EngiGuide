import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import BranchExplorer from '../components/BranchExplorer';

describe('BranchExplorer Component', () => {
  it('renders all branch buttons', () => {
    render(<BranchExplorer />);
    expect(screen.getByText('CSE')).toBeInTheDocument();
    expect(screen.getByText('ECE')).toBeInTheDocument();
    expect(screen.getByText('MECH')).toBeInTheDocument();
    expect(screen.getByText('CIVIL')).toBeInTheDocument();
    expect(screen.getByText('CHEM')).toBeInTheDocument();
  });

  it('switches to comparison mode when toggled', () => {
    render(<BranchExplorer />);
    const compareBtn = screen.getByText(/Compare Two Branches/i);
    fireEvent.click(compareBtn);
    expect(screen.getByText(/Side-by-Side Discipline Comparison/i)).toBeInTheDocument();
    expect(screen.getByText(/Exit Branch Comparison/i)).toBeInTheDocument();
  });

  it('filters branches based on search query', () => {
    render(<BranchExplorer searchQuery="circuits" />);
    // ECE has circuits in subjects
    expect(screen.getByText('ECE')).toBeInTheDocument();
    // Civil shouldn't match "circuits"
    expect(screen.queryByText('CIVIL')).not.toBeInTheDocument();
  });
});
