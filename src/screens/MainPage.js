
import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, List } from 'react-native-paper'

// add the following statement
import Header from '../components/Header'

// modify ViewNotes component
function MainPage({ navigation }) {
    const [notes, setNotes] = useState([])
    const addNote = note => {
            note.id = notes.length + 1
            setNotes([...notes, note])
        }
  
return (
    <>
      <Header titleText='User Profile Page' />

        <FAB
          style={styles.fab}
          small
          icon='plus'
          label='Log out'
          // add a second parameter object
          onPress={() =>
            navigation.navigate('Welcome')
          }
        />
    </>
  )
        }  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 20
    },
    listTitle: {
        fontSize: 20
      },
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    title: {
      fontSize: 20
    },
    fab: {
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: 10
    }
  })

export default MainPage
