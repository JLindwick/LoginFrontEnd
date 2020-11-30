
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton, Text, TextInput, FAB } from 'react-native-paper'
import Header from '../components/Header.js'
export default function Welcome({ navigation }) {
    return (
      <>
    <Header titleText='Welcome' />
        <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Welcome to Friend Finder!! Click login or signup to get started!</Text>
            </View>
            <View style={styles.containerRow}>
            <FAB
            style={styles.fab}
            small
            icon='plus'
            label='Login'
            // add a second parameter object
            onPress={() =>
              navigation.navigate('Login')
            }
          />
          <FAB
            style={styles.fab}
            small
            icon='plus'
            label='Sign Up'
            // add a second parameter object
            onPress={() =>
              navigation.navigate('SignUp')
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
      paddingVertical: 20
    },
    containerRow: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 20
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
      position: 'relative',
      margin: 20,
      right: 0,
      height:50,
      bottom: -480
    }
  })
