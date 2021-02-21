import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

export default class LoginAndSignUpScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return(
                <View style = {styles.container}>
                    <Text style = {{fontSize: 30, fontWeight: '800', marginLeft: 55, marginTop: 30,}}>Barter System App</Text>
                    <Image 
                        style={{width: 230, height: 200, margin : 20, marginLeft: 60}} 
                        source={require('../assets/barter.png')} 
                    />
                    <View>
                        <Text style = {{fontSize: 18, fontWeight: 'bold', marginLeft: 55,}}>USERNAME</Text>
                        <TextInput
                            style = {styles.loginBox}
                            keyboardType = {'email-address'}
                            onChangeText = {(text) =>{
                                this.setState({
                                    username: text
                                })
                            }}
                        />
                    </View>
                    <View>
                        <Text style = {{fontSize: 18, fontWeight: 'bold', marginLeft: 55,}}>PASSWORD</Text>
                        <TextInput
                            style = {styles.loginBox}
                            secureTextEntry = {true}
                            onChangeText = {(text) =>{
                                this.setState({
                                    password: text
                                })
                            }}
                        />
                    </View>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        
    },
    loginBox : {
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
    }
})
