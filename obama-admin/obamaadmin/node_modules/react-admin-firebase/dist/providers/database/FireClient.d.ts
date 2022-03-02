import { IFirestoreLogger } from "../../misc";
import { RAFirebaseOptions } from "../options";
import { IFirebaseWrapper } from "./firebase/IFirebaseWrapper";
import { IResource, ResourceManager } from "./ResourceManager";
export declare class FireClient {
    fireWrapper: IFirebaseWrapper;
    options: RAFirebaseOptions;
    flogger: IFirestoreLogger;
    rm: ResourceManager;
    db(): import("firebase").firestore.Firestore;
    constructor(fireWrapper: IFirebaseWrapper, options: RAFirebaseOptions, flogger: IFirestoreLogger);
    checkRemoveIdField(obj: any, docId: string): void;
    parseDataAndUpload(r: IResource, id: string, data: any): Promise<any>;
    addCreatedByFields(obj: any): Promise<void>;
    addUpdatedByFields(obj: any): Promise<void>;
    private uploadAndGetLink;
    private saveFile;
}
