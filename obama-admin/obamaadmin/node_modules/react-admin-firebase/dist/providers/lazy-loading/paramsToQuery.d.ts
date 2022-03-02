import { CollectionReference, Query } from '@firebase/firestore-types';
import { IFirestoreLogger, messageTypes } from '../../misc';
interface ParamsToQueryOptions {
    filters?: boolean;
    sort?: boolean;
    pagination?: boolean;
}
export declare function paramsToQuery<TParams extends messageTypes.IParamsGetList>(collection: CollectionReference, params: TParams, resourceName: string, flogger: IFirestoreLogger, options?: ParamsToQueryOptions): Promise<Query>;
export declare function filtersToQuery(query: Query, filters: {
    [fieldName: string]: any;
}): Query;
export declare function sortToQuery(query: Query, sort: {
    field: string;
    order: string;
}): Query;
export declare function getFullParamsForQuery<TParams extends messageTypes.IParamsGetList>(reactAdminParams: TParams, softdeleteEnabled: boolean): TParams;
export declare function getNextPageParams<TParams extends messageTypes.IParamsGetList>(params: TParams): TParams;
export {};
