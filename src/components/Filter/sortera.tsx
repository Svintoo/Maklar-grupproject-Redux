import { collectionGroup, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../main.tsx";
import { RealEstate } from "../../interfaces/Interfaces.ts"; // Importera `RealEstate`-interfacet

// Funktion för att hämta och sortera fastigheter efter pris
async function getSortedFastigheter(): Promise<RealEstate[]> {
    try {
    // Skapa en fråga för att hämta och sortera fastigheter efter pris
    const fastigheterRef = collectionGroup(db, 'fastigheter'); // Använd collectionGroup för att söka i alla underkollektioner med namnet 'fastigheter'
    const q = query(fastigheterRef, orderBy('price'));

    const querySnapshot = await getDocs(q);

    // Hantera resultaten
    const fastigheter: RealEstate[] = [];
    querySnapshot.forEach((doc) => {
        fastigheter.push({ id: doc.id, ...doc.data() } as RealEstate);
    });

    return fastigheter;
    } catch (error) {
    console.error("Fel vid hämtning av fastigheter: ", error);
    return [];
    }
}



export { getSortedFastigheter };