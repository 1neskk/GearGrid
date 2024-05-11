import { collection, addDoc, getDocs,
    type Firestore, query, doc, getDoc
} from "firebase/firestore";

export interface SimpleProduct {
    id: string;
    name: string;
    price: number;
}

export interface Product extends SimpleProduct {
    description: string;
    img: string;
}

export default function() {
    const { $firestore } = useNuxtApp();

    const addMouse = async (mouse: Product) => {
        try {
            const docRef = await addDoc(collection($firestore as Firestore, "mice"), mouse);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const addKeyboard = async (keyboard: Product) => {
        try {
            const docRef = await addDoc(collection($firestore as Firestore, "keyboards"), keyboard);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const addMousepad = async (mousepad: Product) => {
        try {
            const docRef = await addDoc(collection($firestore as Firestore, "mousepads"), mousepad);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const fetchMice = async () : Promise<Product[]> => {
        const mice: Product[] = [];
        const q = query(collection($firestore as Firestore, "mice"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            mice.push({ id: doc.id, ...doc.data() } as Product);
        });
        return mice;
    }

    const fetchKeyboards = async () : Promise<Product[]> => {
        const keyboards: Product[] = [];
        const q = query(collection($firestore as Firestore, "keyboards"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            keyboards.push({ id: doc.id, ...doc.data() } as Product);
        });
        return keyboards;
    }

    const fetchMousepads = async () : Promise<Product[]> => {
        const mousepads: Product[] = [];
        const q = query(collection($firestore as Firestore, "mousepads"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            mousepads.push({ id: doc.id, ...doc.data() } as Product);
        });
        return mousepads;
    }

    return { addMouse,
        fetchMice,
        addKeyboard,
        fetchKeyboards,
        addMousepad,
        fetchMousepads
    };
}
