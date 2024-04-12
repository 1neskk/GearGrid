import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail
        ,type Auth, type User, GoogleAuthProvider, signInWithPopup, signOut, setPersistence,
        browserLocalPersistence
    } from "firebase/auth";

export default function() {
    const { $auth } = useNuxtApp();
    const user = useState<User | null>("fb_user", () => null);

    const registerUser = async (email: string, password: string) : Promise<boolean> => {
        try {
            const userCredentials = await createUserWithEmailAndPassword($auth as Auth, email, password);
            if (userCredentials) {
                user.value = userCredentials.user;
                return true;
            }
        } catch (error : unknown) {
            if (error instanceof Error) {
                console.error(error.message);
                alert(error.message);
            }
            return false;
        }
        return false;
    }

    const loginUser = async (email: string, password: string) : Promise<boolean> => {
        try {
            await setPersistence($auth as Auth, browserLocalPersistence);
            const userCredentials = await signInWithEmailAndPassword($auth as Auth, email, password);
            if (userCredentials) {
                user.value = userCredentials.user;
                return true;
            }
        } catch (error : unknown) {
            if (error instanceof Error) {
                console.error(error.message);
                alert(error.message);
            }
            return false;
        }
        return false;
    }

    const googleLogin = async () : Promise<boolean> => {
        try {
            await setPersistence($auth as Auth, browserLocalPersistence);
            const provider = new GoogleAuthProvider();
            const userCredentials = await signInWithPopup($auth as Auth, provider);
            if (userCredentials) {
                user.value = userCredentials.user;
                return true;
            }
        } catch (error : unknown) {
            if (error instanceof Error) {
                console.error(error.message);
                alert(error.message);
            }
            return false;
        }
        return false;
    }

    const logout = async () : Promise<boolean> => {
        try {
            await signOut($auth as Auth);
            user.value = null;
            return true;
        } catch (error : unknown) {
            if (error instanceof Error) {
                console.error(error.message);
                alert(error.message);
            }
            return false;
        }
    }

    const passwordReset = async (email: string) : Promise<boolean> => {
        try {
            await sendPasswordResetEmail($auth as Auth, email);
            return true;
        } catch (error : unknown) {
            if (error instanceof Error) {
                console.error(error.message);
                alert(error.message);
            }
            return false;
        }
    }

    return {
        user,
        registerUser,
        loginUser,
        googleLogin,
        passwordReset
    }
}
