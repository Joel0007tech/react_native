import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App(){
    return(
        <View style={styles.container}>
            <Text> Aora!</Text>
            <StatusBar style="auto" />
            <Link href="/Profile" style={{color: 'blue'}}> Go to profile page </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ffff',
        alignItems:'center',
        justifyContent:'center'
    }
})