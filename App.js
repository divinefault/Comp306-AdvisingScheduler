import React from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { createStackNavigator, FlatList } from 'react-navigation';
import { createAppContainer } from 'react-navigation';

class SignInScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderWidth: 15,
     borderColor: "white", backgroundColor: 'lightgrey'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 75,borderWidth: 15,
     borderColor: "white", backgroundColor: 'white'}}>
        <Text style={{borderWidth: 5, borderColor: "white",backgroundColor: 'white'}}>Sign In Screen</Text>
        <Text>Username:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="hcollins@ithaca.edu"
        />
        <Text>Password:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="*********"
        />
        <Button
          title="Student Sign In"
          onPress={() => this.props.navigation.navigate('StudentPage')}
        />
        <Button
          title="Advisor Sign In"
          onPress={() => this.props.navigation.navigate('AdvisorPage')}
        />
        <Button
          title="Forgot Password?"
        />
        </View>
      </View>
    );
  }
}

class StudentPageScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderWidth: 15,
     borderColor: "white", backgroundColor: 'powderblue'}}>
     
        <Text>Student Page Screen</Text>
        <Button
          title="Create Appointment"
          onPress={() => this.props.navigation.navigate('StudentCreateAppointment')}
        />
        <Button
          title="View Appointments"
          onPress={() => this.props.navigation.navigate('ViewAppointment')}
        />
    
      </View>
    );
  }
}

class AdvisorPageScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderWidth: 15,
     borderColor: "white", backgroundColor: 'powderblue'}}>
        <Text>Advisor Page Screen</Text>
        <Button
          title="Create Appointment"
          onPress={() => this.props.navigation.navigate('AdvisorCreateAppointment')}
        />
        <Button
          title="View Students"
          onPress={() => this.props.navigation.navigate('ListOfStudents')}
        />
        <Button
          title="View Appointments"
          onPress={() => this.props.navigation.navigate('ViewAppointment')}
        />
      </View>
    );
  }
}

class ListOfStudentsScreen extends React.Component {
  constructor(props){
        super(props);
        this.state = { 
                data: [
                  { key: "Carter Smith" },    
                  { key: "Andrew Simpson" },     
                  { key: "Kylie Verduin" },           
                  { key: "Alexa Johnson" },
                  { key: "Johnie Appleman" },      
                ]   
          };  
  }

  _renderItem = data => {
        return <Text style={styles.row}>{data.item.key}</Text>;
  };  

  render() {
    return (
      <View style={styles.container}>
      <Text>Students</Text>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    );  
  }
}

class ViewAppointmentScreen extends React.Component {
  constructor(props){
        super(props);
        this.state = { 
                data: [
                  { key: "8/11/18; 2:00PM" },    
                  { key: "9/8/18; 10:00AM" },     
                  { key: "11/3/18; 12:15PM" },           
                  { key: "11/21/18; 4:00PM" },
                  { key: "12/17/18; 10:30PM" },
                ]   
          };  
  }

  _renderItem = data => {
        return <Text style={styles.row}>{data.item.key}</Text>;
  };  

  render() {
    return (
      <View style={styles.container}>
      <Text>Upcoming Appointments</Text>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    );  
  }
}

class StudentCreateAppointmentScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderWidth: 15,
     borderColor: "white", backgroundColor: 'powderblue'}}>
        <Text>Create Appointment Screen</Text>
        <Text>Date:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="11/12/18"
        />
        <Text>Time:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="1:15PM"
        />
        <Text>Reason:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="Next semester registration."
        />
        <Text>Time Interval :</Text>
        <TextInput
          style={{height: 60}}
          placeholder="15 minutes"
        />
        <Button
          title="Create Appointment"
        />
      </View>
    );
  }
}

class AdvisorCreateAppointmentScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderWidth: 15,
     borderColor: "white", backgroundColor: 'powderblue'}}>
        <Text>Create Appointment Screen</Text>
        <Text>Date:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="11/12/18"
        />
        <Text>Time:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="1:15PM"
        />
        <Text>Reason:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="Next semester registration."
        />
        <Text>Student:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="John Smith"
        />
        <Text>Time Interval :</Text>
        <TextInput
          style={{height: 60}}
          placeholder="15 minutes"
        />
        <Button
          title="Create Appointment"
        />
      </View>
    );
  }
}

class RegistrationScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderWidth: 15,
     borderColor: "white", backgroundColor: 'powderblue'}}>
        <Text>Sign Up Screen</Text>
        <Button
          title="Create Student Account"
          onPress={() => this.props.navigation.navigate('StudentSignUp')}
        />
        <Button
          title="Create Advisor Account"
          onPress={() => this.props.navigation.navigate('AdvisorSignUp')}
        />
      </View>
    );
  }
}

class AdvisorSignUpScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderWidth: 15,
     borderColor: "white", backgroundColor: 'powderblue'}}>
        <Text>Advisor Sign Up Screen</Text>
        <Text>School Email:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="lrobertson@ithaca.edu"
        />
        <Text>Password:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="*********"
        />
        <Text>Password Confirmation:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="*********"
        />
        <Text>School:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="Ithaca College"
        />
        <Button
          title="Create Account"
          onPress={() => this.props.navigation.navigate('AdvisorSignUp')}
        />
      </View>
    );
  }
}

class StudentSignUpScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderWidth: 15,
     borderColor: "white", backgroundColor: 'powderblue'}}>
        <Text>Student Sign Up Screen</Text>
        <Text>School Email:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="jsmith9@ithaca.edu"
        />
         <Text>Advisor:</Text>
          <TextInput
          style={{height: 60}}
          placeholder="Jill Loop"
        />
        <Text>Password:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="*********"
        />
        <Text>Password Confirmation:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="*********"
        />
        <Text>School:</Text>
        <TextInput
          style={{height: 60}}
          placeholder="Ithaca College"
        />
        <Button
          title="Create Account"
          onPress={() => this.props.navigation.navigate('AdvisorSignUp')}
        />
      </View>
    );
  }
}


class HomeScreen extends React.Component {
  render() {
    return (
      
      <View style={{ flex: 1, textalign: 'center',alignItems: 'center', justifyContent: 'center',  backgroundColor: 'powderblue' }}>
        <Text style={styles.title}>Welcome To Advising Scheduler</Text>
        <Button style={styles.buttonText} 
          title="Sign In"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('Registration')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    
    //Sign In
    SignIn: SignInScreen,
    StudentPage: StudentPageScreen,
    ViewAppointment: ViewAppointmentScreen,
    StudentCreateAppointment: StudentCreateAppointmentScreen,

    AdvisorPage: AdvisorPageScreen,
    ListOfStudents: ListOfStudentsScreen,
    AdvisorCreateAppointment: AdvisorCreateAppointmentScreen,
    
    //Registration
    Registration: RegistrationScreen,
    StudentSignUp: StudentSignUpScreen,
    AdvisorSignUp: AdvisorSignUpScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
   row: {
     fontSize: 24, 
     padding: 42, 
     borderWidth: 1,
     borderColor: "#DDDDDD",
 },
  buttonText: {
    fontSize: 60,
  },
  title: {
     fontSize: 34, 
     padding: 42, 
     //justifyContent: 'center',
     textalign: 'center',
     borderWidth: 5,
     borderColor: "white",
  }
});
