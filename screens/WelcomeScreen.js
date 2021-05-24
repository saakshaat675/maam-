import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal } from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: '',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      conPassword:'',
      isModal:'false',
    }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      this.props.navigation.navigate('Donate')

    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    })
  }

  userSignUp = (emailId, password) =>{
    alert("ok")
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      

        db.collection('users').add({
        first_name:this.state.firstName,
        lastName:this.state.lastName,
        contact:this.state.contact,
        email_id:this.state.emailId,
        address:this.state.address,
        
      })
      return alert("User Added Successfully")
      
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }
showModal=()=>{
return(

  <Modal 
  animationType="fade"
  transparent={true}
  visible= {this.state.isModal}
  >
<View>
<TextInput
          style={styles.loginBox}
         
        
          placeholder="firstName"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />

<TextInput
          style={styles.loginBox}
          placeholder="lastName"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />


        


<TextInput
          style={styles.loginBox}
          multiline = {true}
          placeholder="address"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />


<TextInput
          style={styles.loginBox}
          keyboardType={'numeric'}
          placeholder="phone number"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
        />


<TextInput
          style={styles.loginBox}
          placeholder="email-Id"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />


<TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              conPassword: text
            })
          }}
        />

<TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>save</Text>
          </TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={()=>this.setState({
 isModal:false
    
  }) }
  >
  <Text>cancle</Text>
</TouchableOpacity>





        

</View>



  </Modal>
)


}





  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
         
          <Text style={styles.title}>Book Santa</Text>
        </View>
        {this.showModal()}
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@booksanta.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.setState({
            isModal:true
            })
          }}
       >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})
