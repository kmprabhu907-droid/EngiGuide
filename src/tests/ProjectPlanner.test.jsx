import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ProjectPlanner from '../components/ProjectPlanner';

describe('ProjectPlanner Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders project planner blueprints and details', () => {
    render(<ProjectPlanner />);
    expect(screen.getAllByText(/Autonomous Mobile Robot with Obstacle Avoidance/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Implementation Milestones Roadmap/i)).toBeInTheDocument();
    expect(screen.getByText(/Step 1:/i)).toBeInTheDocument();
  });

  it('allows checking and unchecking project milestones', () => {
    render(<ProjectPlanner />);
    const stepOne = screen.getByText(/Chassis & Kinematics Modeling/i);
    // Click step to toggle complete
    fireEvent.click(stepOne);
    // Re-check milestone status
    const saved = JSON.parse(localStorage.getItem('engiguide_project_progress') || '{}');
    expect(saved['proj-1']?.[0]).toBe(true);
  });
});
