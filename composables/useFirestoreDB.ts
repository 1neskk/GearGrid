import { collection, addDoc, type Firestore  } from "firebase/firestore";

export default function() {
    const { $firestore } = useNuxtApp();

    const addMouse = async (mouse: any) : Promise<boolean> => {
        try {
            await addDoc(collection($firestore as Firestore, "mice"), { mouse });
            return true;
        } catch (error : unknown) {
            if (error instanceof Error) {
                console.error(error.message);
                alert(error.message);
            }
            return false;
        }
    }

    return { addMouse };
}