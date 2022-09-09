import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios'
    ? 'http://localhost:3000' : 'http://192.168.56.1:3000'

function showError(err) {
    if(err.response && err.response.data) {
        Alert.alert('Oops! An error has occurred!', `Mensagem: ${err.response.data}`)
    } else {
        Alert.alert('Oops! An error has occurred!', `Mensagem: ${err}`)
    }
}

function showSuccess(msg) {
    Alert.alert('Success!', msg)
}

export { server, showError, showSuccess }