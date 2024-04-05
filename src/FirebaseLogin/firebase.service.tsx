
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

/**
 * firebaseLogout
 * @param props {onLogout, onError}
 * @returns Promise<boolean>
 */
export const firebaseLogout = async (props: {onLogout: any, onError: any}): Promise<boolean> => {
  await getAuth().signOut().then(() => {
    props.onLogout(true);
    return true;
  }).catch((error: any) => {
    props.onError(error.code || error.message || error);
    return false;
  });
  return false;
};

/**
 * firebaseEmailPasswordLogin
 * @param email string
 * @param password string
 * @returns Promise<{uid, accessToken, email, displayName, emailVerified, phoneNumber, providerId}>
 */
export const firebaseEmailPasswordLogin = async (email: string, password: string): Promise<any> => {
  const auth: any = getAuth();
  await signInWithEmailAndPassword(auth, email, password).then(async (result: any) => {
    return {
      uid: result.user.uid,
      accessToken: result.user.accessToken,
      email: result.user.email,
      displayName: result.user.displayName,
      emailVerified: result.user.emailVerified,
      phoneNumber: result.user.phoneNumber,
      providerId: result.user.providerId,
    };
  }).catch((error: any) => error);
};