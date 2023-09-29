import React, { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';

export const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) => (
    <Suspense fallback={<LoadingSpinner open />}>
        <Component {...props} />
    </Suspense>
);