'use client';

import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Project from '../../components/Project';

export default function ProjectPage() {
  return (
    <PageLayout>
      <div className="pt-20">
        <Project />
      </div>
    </PageLayout>
  );
} 