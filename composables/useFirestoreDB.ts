import { collection, addDoc, getDocs,
    type Firestore, query, doc, getDoc
} from "firebase/firestore";

export interface Products {
    id: string;
    name: string;
    price: number;
    img: string;
}

export default function() {
    const { $firestore } = useNuxtApp();

    const addMouse = async (mouse: Products) => {
        try {
            const docRef = await addDoc(collection($firestore as Firestore, "mice"), mouse);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const addKeyboard = async (keyboard: Products) => {
        try {
            const docRef = await addDoc(collection($firestore as Firestore, "keyboards"), keyboard);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const addMousepad = async (mousepad: Products) => {
        try {
            const docRef = await addDoc(collection($firestore as Firestore, "mousepads"), mousepad);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const fetchMice = async () : Promise<Products[]> => {
        const mice: Products[] = [];
        const q = query(collection($firestore as Firestore, "mice"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            mice.push({ id: doc.id, ...doc.data() } as Products);
        });
        return mice;
    }

    const fetchKeyboards = async () : Promise<Products[]> => {
        const keyboards: Products[] = [];
        const q = query(collection($firestore as Firestore, "keyboards"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            keyboards.push({ id: doc.id, ...doc.data() } as Products);
        });
        return keyboards;
    }

    const fetchMousepads = async () : Promise<Products[]> => {
        const mousepads: Products[] = [];
        const q = query(collection($firestore as Firestore, "mousepads"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            mousepads.push({ id: doc.id, ...doc.data() } as Products);
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
