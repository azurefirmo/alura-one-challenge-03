import app from './app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';

export async function sendMessage(subscription) {
    const db = getFirestore(app);
    const portfolioData = collection(db, 'alura-azure-portfolio');
    const docRef = await addDoc(portfolioData, subscription);
    return docRef.id;
}