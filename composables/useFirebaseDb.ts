import { getFirestore, collection, getDocs, type Firestore } from "firebase/firestore";

export default function() {
    const { $firestore } = useNuxtApp();

    const getCollection = async (collectionName: string) => {
        const querySnapshot = await getDocs(collection($firestore as Firestore, collectionName));
        const data = querySnapshot.docs.map(doc => doc.data());
        return data;
    }

    return {
        getCollection
    }

}
