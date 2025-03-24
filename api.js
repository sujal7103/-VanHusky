import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCHXfb9_7GO_An1wpQrgd1dpRk6UQOfQ0U",
  authDomain: "vanlife-3f116.firebaseapp.com",
  projectId: "vanlife-3f116",
  storageBucket: "vanlife-3f116.appspot.com",
  messagingSenderId: "154827232281",
  appId: "1:154827232281:web:aeee4e7f516c229721c688"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")



export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}