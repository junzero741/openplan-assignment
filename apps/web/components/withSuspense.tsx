"use client";

import { Suspense, type ComponentType, type ReactNode } from "react";

export default function withSuspense<P extends object = {}>(
    Component: ComponentType<P>,
    fallback: ReactNode
) {
    const Wrapped = (props: P) => (
        <Suspense fallback={fallback}>
            <Component {...props} />
        </Suspense>
    );

    Wrapped.displayName = `withSuspense(${Component.displayName ?? Component.name ?? "Component"})`;

    return Wrapped;
}