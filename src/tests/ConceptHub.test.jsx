import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ConceptHub from '../components/ConceptHub';

describe('ConceptHub Component', () => {
  it('renders concepts and allows answering quiz question', () => {
    const handleToggle = vi.fn();
    render(
      <ConceptHub
        searchQuery=""
        savedConceptIds={[]}
        onToggleSaveConcept={handleToggle}
      />
    );

    expect(screen.getByText(/Conservation of Energy & Mass/i)).toBeInTheDocument();

    // Check quiz question appears
    const quizOption = screen.getByText(/Velocity increases and static pressure decreases/i);
    fireEvent.click(quizOption);

    // Verify explanation displayed
    expect(screen.getByText(/Explanation:/i)).toBeInTheDocument();
    expect(screen.getByText(/Bernoulli’s principle/i)).toBeInTheDocument();
  });
});
