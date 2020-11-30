import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, List, TextInput } from 'react-native-paper'
import Header from '../components/Header.js'
export default function SignUp({ navigation }) {
    return (
        <>
        <Header titleText='Sign Up' />
          <View style={styles.containerColumn}>
              <View style={styles.inputField}>
                  
                 <Text>First Name:</Text>
                 <TextInput
                    style={styles.TextInput}
                    underlineColorAndroid="transparent"
                />
                 <Text>Last Name:</Text>
                 <TextInput
                    style={styles.TextInput}
                    underlineColorAndroid="transparent"
                />
                 <Text>Email:</Text>
                 <TextInput
                    style={styles.TextInput}
                    underlineColorAndroid="transparent"
                />
                 <Text>Password:</Text>
                 <TextInput
                    style={styles.TextInput}
                    underlineColorAndroid="transparent"
                />
          </View>      
                    
              <FAB
                    style={styles.fab}
                    small
                    icon='plus'
                    label='Sign Up'
                    // add a second parameter object
                    onPress={() =>
                    navigation.navigate('Welcome')
                    }
                />                              
              </View>
        </>
    )
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 20,

    },
    inputField: {
        flex:1,
        paddingVertical:200,
        flexDirection:'column',
        padding: 0,
        justifyContent: 'space-between'
          },
    TextInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 8
    },
    containerRow: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20
      },
      containerColumn: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 0
      },
    iconButton: {
      backgroundColor: 'rgba(46, 113, 102, 0.8)',
      position: 'absolute',
      right: 0,
      top: 40,
      margin: 10
    },
    title: {
      fontSize: 24,
      marginBottom: 20
    },
    text: {
      height: 300,
      fontSize: 16
    },
    fab: {
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: 0
    }
  })
