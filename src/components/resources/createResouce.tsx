import React from "react";

import { FailResponse } from "../../api/FailResponse";

import { renderErrors } from "./renderErrors";


interface APIResourceProps<TQuery, TOk extends Object> {
    query: TQuery;
    ok(response: TOk): React.ReactElement | string;
    fail?(response: FailResponse): React.ReactElement | string;
    loading?: (() => React.ReactElement | string) | string;
}

const isFailed = (response: any | FailResponse): response is FailResponse =>
    Object.prototype.hasOwnProperty.call(response, "errors");

export const createResource = <TQuery extends any[], TOk extends Object>(getter: (...query: TQuery) => Promise<TOk | FailResponse>) =>
    ({ query, ok, fail = renderErrors, loading = 'Loading...' }: APIResourceProps<TQuery, TOk>) => {
        const [response, setResponse] = React.useState<TOk | FailResponse | null>(null);

        React.useEffect(() => {
            getter(...query).then(setResponse);
        }, [query]);

        if (!response) {
            return <>{loading instanceof Function ? loading() : loading}</>;
        } else if (isFailed(response)) {
            return <>{fail(response)}</>;
        } else {
            return <>{ok(response)}</>;
        }
    };

