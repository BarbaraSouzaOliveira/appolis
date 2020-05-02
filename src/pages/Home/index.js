import React from 'react'
import {View, Image} from 'react-native'
import {Card} from 'react-native-elements'
import Teste from '../../assets/teste.jpg'


class Home extends React.Component {
    render(){
        return(
            <View>
                <Card>
                    <Image 
                        source={Teste}
                    />
                </Card>

            </View>
        )
    }
}export default Home