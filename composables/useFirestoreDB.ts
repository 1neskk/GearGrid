import { collection, addDoc, getDocs,
    type Firestore, query
} from "firebase/firestore";

export interface Mice {
    id: string;
    name: string;
    price: number;
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

    return { addMouse, fetchMice,};
}