import React from 'react'
import PropTypes from 'prop-types'
import {View, Image,KeyboardAvoidingView,ScrollView, TouchableOpacity, TextInput} from 'react-native'
import {Input, Button, Text} from 'react-native-elements'
import Logo from '../../assets/logo.png'
import Style from'./style'
import { Header, HeaderHeightContext } from 'react-navigation-stack'


class Login extends React.Component{
    static propTypes ={
        navigation: PropTypes.any.isRequired,
    }
    render(){
        const {navigation} = this.props        
        return(
            <KeyboardAvoidingView
            keyboardVerticalOffset = {HeaderHeightContext + 5}
            style={Style.container}
            >
              <ScrollView>
                <Image
                style={{width:350, height:350, marginTop:'10%',  }}
                source={Logo}
                />
                <View style={{ alignSelf: 'center',width: '80%'}}>  
                    <TextInput
                        placeholder="Email" 
                        style={Style.input}
                    />
                     
                    <TextInput
                        placeholder="Senha"
                        secureTextEntry={true} 
                        style={Style.input}    
                    />
                    <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Register')
                                }}
                              >

                    <Text style={{marginTop: 15, fontSize: 15, textAlign: 'center'}}>Não é cadastrado?Cadastre-se</Text>
                    </TouchableOpacity>
                    <Button
                        title="Entrar"
                        buttonStyle={Style.button}
                        
                    />
                    
                </View>   
                </ScrollView>             
            </KeyboardAvoidingView>
        )
    }
}export default Login