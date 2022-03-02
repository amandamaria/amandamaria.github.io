import { FireApp, IFirebaseWrapper } from './IFirebaseWrapper';
import firebase, { User } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { RAFirebaseOptions } from 'providers/options';
export declare class FirebaseWrapper implements IFirebaseWrapper {
    private firestore;
    private app;
    options: RAFirebaseOptions;
    GetApp(): FireApp;
    constructor();
    init(firebaseConfig: {}, options?: RAFirebaseOptions): void;
    db(): firebase.firestore.Firestore;
    serverTimestamp(): Date;
    auth(): any;
    storage(): firebase.storage.Storage;
    GetUserLogin(): Promise<User>;
    OnUserLogout(callBack: (u: firebase.User | null) => any): void;
}
