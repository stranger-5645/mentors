import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = getApps().length > 0 ? getApp() : initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
});

export const db = firebaseConfig.firestoreDatabaseId
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

export interface MentorInquiryInput {
  name?: string;
  whatsappNumber: string;
  email?: string;
  studentCount?: string;
  notes?: string;
  source?: string;
}

export async function logMentorInquiry(data: MentorInquiryInput) {
  try {
    const inquiriesRef = collection(db, 'inquiries');
    const docRef = await addDoc(inquiriesRef, {
      ...data,
      createdAt: new Date().toISOString(),
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Failed to log inquiry to Firebase:', error);
    return { success: false, error };
  }
}

export default app;
