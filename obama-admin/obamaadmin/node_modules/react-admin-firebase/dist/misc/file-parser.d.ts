import { IFirebaseWrapper } from '../providers/database/firebase/IFirebaseWrapper';
interface ParsedUpload {
    fieldDotsPath: string;
    fieldSlashesPath: string;
    rawFile: File | any;
}
export declare function parseDocGetAllUploads(obj: any): ParsedUpload[];
export declare function recusivelyParseObjectValue(input: any, fieldPath: string, uploads: ParsedUpload[]): any;
export declare const recursivelyMapStorageUrls: (fireWrapper: IFirebaseWrapper, fieldValue: any) => Promise<any>;
export {};
