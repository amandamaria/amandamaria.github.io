import * as ra from "../misc/react-admin-models";
import { RAFirebaseOptions } from "./options";
import { FireApp } from "./database/firebase/IFirebaseWrapper";
export interface IDataProvider extends ra.DataProvider {
    app: FireApp;
}
export declare function DataProvider(firebaseConfig: {}, optionsInput?: RAFirebaseOptions): IDataProvider;
