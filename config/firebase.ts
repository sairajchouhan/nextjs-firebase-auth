import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCE8an26rfTjkg8EFUjeMpUICDDx99Lj7s',
  authDomain: 'nextjs-firebase-auth-a4852.firebaseapp.com',
  projectId: 'nextjs-firebase-auth-a4852',
  storageBucket: 'nextjs-firebase-auth-a4852.appspot.com',
  messagingSenderId: '924467240098',
  appId: '1:924467240098:web:eb6bd8b51ad23d35278bfb',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
