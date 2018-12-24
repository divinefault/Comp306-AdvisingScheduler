
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { Text, View, FlatList, StyleSheet, TouchableHighlight, Alert, Image} from 'react-native';
import OfficeList from './OfficeList';
import AddressBook from './AdvisorList';
import AppointmentList from './AppointmentList';
import MajorList from './MajorList';
import StudentList from './StudentList';

class Majors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
      render() {
        return (
          <View style={styles.container}>
            <MajorList data={this.state.MajorList} />
          </View>
        );
      }
}
class Office extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
      render() {
        return (
          <View style={styles.container}>
            <OfficeList data={this.state.OfficeList} />
          </View>
        );
      }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.homeStyle}>
        <Text style={styles.textBox}>Home</Text>

        <Image style={styles.imgStyle}
          source={{uri: 'https://www.intermedia.net/assets/images/advisor-icon.png'}}
        />
      </View>
    );
  }
}

class Advisors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
      render() {
        return (
          <View style={styles.container}>
            <AddressBook data={this.state.AddressBook} />
          </View>
        );
      }
}
class Appointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
      render() {
        return (
          <View style={styles.container}>
            <AppointmentList data={this.state.AppointmentList} />
          </View>
        );
      }
}
class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
      render() {
        return (
          <View style={styles.container}>
            <StudentList data={this.state.StudentList} />
          </View>
        );
      }
}

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Advisor: Advisors,
    Office: Office,
    Appointment: Appointments,
    Major: Majors,
    Student: Students
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-desktop${focused ? '' : '-outline'}`;
        } else if (routeName === 'Associates') {
          iconName = `ios-walk`;
        } else if (routeName === 'Update'){
          iconName = `ios-create${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeStyle:{
    backgroundColor:"#dddddf",
    flex: 1,
    //justifyContent: 'center', 
    alignItems: 'center'
  },
  textBox:{
    backgroundColor:"#5F4B66",
    paddingVertical: '2%',
    paddingHorizontal: '10%',
    marginTop: '60%',
    fontSize:30,
    fontFamily:'Chalkduster',
    color: '#dddddd'
  },
  imgStyle:{
    width: '60%', 
    height: '40%',
    borderRadius: 80,
    margin: '10%'
  },
  
});
