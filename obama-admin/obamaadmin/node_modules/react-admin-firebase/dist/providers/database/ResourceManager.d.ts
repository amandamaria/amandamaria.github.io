import { CollectionReference } from '@firebase/firestore-types';
import { RAFirebaseOptions } from '../options';
import { IFirebaseWrapper } from './firebase/IFirebaseWrapper';
import { messageTypes, IFirestoreLogger } from '../../misc';
export interface IResource {
    path: string;
    pathAbsolute: string;
    collection: CollectionReference;
    list: Array<{} & {
        deleted?: boolean;
    }>;
}
export declare class ResourceManager {
    private fireWrapper;
    private options;
    private flogger;
    private resources;
    private db;
    constructor(fireWrapper: IFirebaseWrapper, options: RAFirebaseOptions, flogger: IFirestoreLogger);
    TryGetResource(resourceName: string, refresh?: 'REFRESH', collectionQuery?: messageTypes.CollectionQueryType): Promise<IResource>;
    GetResource(relativePath: string): IResource;
    TryGetResourcePromise(relativePath: string, collectionQuery?: messageTypes.CollectionQueryType): Promise<IResource>;
    RefreshResource(relativePath: string, collectionQuery: messageTypes.CollectionQueryType | undefined): Promise<void>;
    GetSingleDoc(relativePath: string, docId: string): Promise<{}>;
    private initPath;
    private parseFireStoreDocument;
    getUserIdentifier(): Promise<string>;
    private getCurrentUserEmail;
    private getCurrentUserId;
    private applyQuery;
}
