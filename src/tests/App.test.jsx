import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('EngiGuide App Integration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders brand heading and primary navigation tabs', () => {
    render(<App />);
    expect(screen.getAllByText('EngiGuide').length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button', { name: /^Branches$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button', { name: /^Core Concepts$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button', { name: /^Study Resources$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button', { name: /^Project Planner$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button', { name: /^Career Roadmap$/i }).length).toBeGreaterThan(0);
  });

  it('navigates across tabs correctly', () => {
    render(<App />);
    // Navigate to Core Concepts
    fireEvent.click(screen.getAllByRole('button', { name: /^Core Concepts$/i })[0]);
    expect(screen.getByText(/Core Engineering Concepts Hub/i)).toBeInTheDocument();

    // Navigate to Study Resources
    fireEvent.click(screen.getAllByRole('button', { name: /^Study Resources$/i })[0]);
    expect(screen.getByText(/High-Yield Engineering Study Resources/i)).toBeInTheDocument();

    // Navigate to Project Planner
    fireEvent.click(screen.getAllByRole('button', { name: /^Project Planner$/i })[0]);
    expect(screen.getByText(/Engineering Project Planner & Milestone Tracker/i)).toBeInTheDocument();

    // Navigate to Career Roadmap
    fireEvent.click(screen.getAllByRole('button', { name: /^Career Roadmap$/i })[0]);
    expect(screen.getByText(/Engineering Career Pathways & Readiness/i)).toBeInTheDocument();
  });

  it('opens and closes the bookmarks drawer', () => {
    render(<App />);
    const savedButton = screen.getByRole('button', { name: /View Saved Items/i });
    fireEvent.click(savedButton);
    expect(screen.getByText('Saved Study Items')).toBeInTheDocument();

    const closeButton = screen.getByText('Close Drawer');
    fireEvent.click(closeButton);
    expect(screen.queryByText('Saved Study Items')).not.toBeInTheDocument();
  });
});
