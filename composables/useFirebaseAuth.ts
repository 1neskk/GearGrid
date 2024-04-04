import { createUserWithEmailAndPassword, signInWithEmailAndPassword, type Auth, type User } from "firebase/auth";

export default function() {
    const { $auth} = useNuxtApp();
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

    return {
        user,
        registerUser,
        loginUser
    }
}