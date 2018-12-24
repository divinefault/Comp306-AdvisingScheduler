import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Alert, TouchableWithoutFeedback, Touchable } from 'react-native';

export default class OfficeList extends React.Component {
  constructor(){
    super()
    this.state = {
      dataSource:[],
      email: ''
    }
  }

  getContactInfo(item){
    this.setState()
  }

  renderItem = ({item}) => {
      return(
          <View style={styles.listStyle}>
              <TouchableWithoutFeedback onPress={ () => Alert.alert(item.ID)}>
                  <Text style={styles.row}>
                      {item.First} {item.Last}
                  </Text>
              </TouchableWithoutFeedback>
              
          </View>
      )
  }

  componentDidMount(){
      var myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      
      const url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~ljackson1/comp306Final/officeList.php'
      var data = {ID: 7, First: "sdds"};
      
      fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: myHeaders
      })
      .then((response) => response.json())
      .then(responseJson => { 
        this.setState({
          dataSource: responseJson
        })
      })
      .catch(error => Alert.alert('Error:'+ error));
  }

  render(){
    return(
      <View style={styles.ultimate}>
        <View style={styles.container}>
            <FlatList
                data = {this.state.dataSource}
                renderItem = {this.renderItem}
            />
        </View>
        <View >
            <Text style={styles.emailBox}>
                  {this.state.email}
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ultimate:{
    alignContent: 'center',
  },
  container:{
    flex: 1, 
    backgroundColor: "#42f4ce",
  },
  listStyle:{
    flex: 1,
    backgroundColor: '#dddddf',
    //justifyContent: 'center',
  },
  row:{ 
    color: '#160C28',
    fontSize: 20, 
    padding: 30, 
    borderWidth: 1,
    borderColor: "#8797AF",
    backgroundColor: '#ffffff',
  },
  emailBox:{
    height: 60,
    width: '100%',
    backgroundColor:"#5F4B66",
    fontSize:20,
    fontFamily:'Chalkduster',
    color: '#dddddd',
    borderColor: "#e542f4",
    borderWidth:4,
    padding:10
  }
});