import { firebase, googleAuthProvider } from '../firebase/firebase'

// Login
export const login = uid => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

// Logout
export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}