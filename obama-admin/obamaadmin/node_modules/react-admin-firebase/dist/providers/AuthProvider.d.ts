import 'firebase/auth';
import { RAFirebaseOptions } from './options';
import { AuthProvider as RaAuthProvider } from '../misc/react-admin-models';
export declare function AuthProvider(firebaseConfig: {}, options: RAFirebaseOptions): RaAuthProvider;
