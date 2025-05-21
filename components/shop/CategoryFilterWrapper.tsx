'use client';

import { Suspense } from 'react';
import { CategoryFilter } from './CategoryFilter';

export default function CategoryFilterWrapper() {
  return (
    <Suspense fallback={<div className="text-white">Loading filters...</div>}>
      <CategoryFilter />
    </Suspense>
  );
}

