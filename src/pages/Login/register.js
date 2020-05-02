import React from 'react'
import {View, Text, TextInput,KeyboardAvoidingView,ScrollView, TouchableOpacity,} from 'react-native'
import { Header, HeaderHeightContext } from 'react-navigation-stack'
import {Button} from 'react-native-elements'
import Style from'./style'

class Register extends React.Component{
    state={
        password: '',
        ispassword: ''
    }
    
    
    handleSubmit = () =>{

    }



    render(){
        const {password, ispassword} = this.state
       
        return(
            <KeyboardAvoidingView
            keyboardVerticalOffset = {HeaderHeightContext + 5}
            style={Style.container}
            >
                <ScrollView>
                    <View style={{alignSelf:'center', width:'80%'}}>
                        <Text style={{fontSize: 20, marginBottom:10, textAlign: 'center'}}>Cadastro</Text>
                        <TextInput
                            placeholder='Nome'
                            style={Style.input}
                        />
                        <TextInput
                            placeholder='Email'
                            style={Style.input}
                        />
                        <TextInput
                            placeholder='Senha'
                            secureTextEntry={true} 
                            style={Style.input}
                            onChangeText={(text)=>{this.setState({password: text})}}
                        />
                        <TextInput
                            placeholder='Confirmar Senha'
                            secureTextEntry={true} 
                            style={Style.input}
                            onChangeText={(text)=>{this.setState({ispassword: text})}}
                        />
                        
                        {
                            (password===ispassword ) ?                                                      
                            <Button
                            title="Cadastrar"
                            onPress={()=>{ handleSubmit}}
                            /> :
                            <View>
                                <Text style={{textAlign: 'center'}}>Senhas Diferentes</Text>
                                <Button
                                    title="Cadastrar"
                                    disabled= {true}
                                    
                                />  
                            </View>
                        }                    
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        )
    }
}export default Register