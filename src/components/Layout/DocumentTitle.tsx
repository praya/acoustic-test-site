import * as React from 'react';


export const DocumentTitle: React.FC<{ children: string }> = ({ children }) => {
    React.useEffect(() => {
        document.title = children;
        return () => { document.title = ""; };
    }, [children]);

    return <h1>{children}</h1>;
}
