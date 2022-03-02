import { CollectionReference, DocumentSnapshot, Query } from '@firebase/firestore-types';
import { IFirestoreLogger, messageTypes } from '../../misc';
export declare function setQueryCursor(doc: DocumentSnapshot, params: messageTypes.IParamsGetList, resourceName: string): void;
export declare function getQueryCursor(collection: CollectionReference, params: messageTypes.IParamsGetList, resourceName: string, flogger: IFirestoreLogger): Promise<DocumentSnapshot | false>;
export declare function clearQueryCursors(resourceName: string): void;
export declare function findLastQueryCursor(collection: CollectionReference, queryBase: Query, params: messageTypes.IParamsGetList, resourceName: string, flogger: IFirestoreLogger): Promise<import("@firebase/firestore-types").QueryDocumentSnapshot>;
