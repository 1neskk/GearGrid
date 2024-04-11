import { collection, addDoc, getDocs,
    type Firestore, query
} from "firebase/firestore";

export interface Mice {
    id: string;
    name: string;
    price: number;
    img: string;
}

export interface Keyboards {
    id: string;
    name: string;
    price: number;
    img: string;
}

export default function() {
    const { $firestore } = useNuxtApp();

    const addMouse = async (mouse: Mice) => {
        try {
            const docRef = await addDoc(collection($firestore as Firestore, "mice"), mouse);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const addKeyboard = async (keyboard: Keyboards) => {
        try {
            const docRef = await addDoc(collection($firestore as Firestore, "keyboards"), keyboard);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const fetchMice = async () : Promise<Mice[]> => {
        const mice: Mice[] = [];
        const q = query(collection($firestore as Firestore, "mice"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            mice.push({ id: doc.id, ...doc.data() } as Mice);
        });
        return mice;
    }

    const fetchKeyboards = async () : Promise<Keyboards[]> => {
        const keyboards: Keyboards[] = [];
        const q = query(collection($firestore as Firestore, "keyboards"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            keyboards.push({ id: doc.id, ...doc.data() } as Keyboards);
        });
        return keyboards;
    }

    return { addMouse,
        fetchMice,
        addKeyboard,
        fetchKeyboards
    };
}