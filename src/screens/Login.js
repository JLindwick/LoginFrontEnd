import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, List, TextInput } from 'react-native-paper'
import Header from '../components/Header.js'
<Header titleText='Simple Note Taker' />

export default function Login({ navigation }) {
    return (
        <>
        <Header titleText='Log in Screen' />
          <View style={styles.containerColumn}>
              <View styles={styles.inputField}>
                    <Text>Account Information:</Text>
                    <TextInput
                        style={styles.TextInput}
                        underlineColorAndroid="transparent"
                    />
            </View>
            <View styles={styles.inputField}>
                 <Text>Password:</Text>
                 <TextInput
                    style={styles.TextInput}
                    underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.containerRow}>
              <FAB
                    style={styles.fab}
                    small
                    icon='plus'
                    label='Log In!'
                    // add a second parameter object
                    onPress={() =>
                    navigation.navigate('MainPage')
                    }
                />                              
              </View>
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
    TextInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 8,
        width:350
        
    },
    containerColumn: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 250
      },
      inputField: {
        flex:1,
        paddingVertical:500,
        flexDirection:'column'
          },
      containerRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 150,
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
