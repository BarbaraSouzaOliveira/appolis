import {  StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display:"flex",
        width: '100%',
        height: '100%',
        backgroundColor: 'white'

    },
    button:{
        width: '90%',
        backgroundColor: '#66cccc',
        alignSelf:'center',
        marginTop: '10%',
        borderRadius: 20,
    },
    text:{
        marginTop: 20
    },
    input:{
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: '#f2f1ef',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    }


})