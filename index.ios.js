/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const windowSize = Dimensions.get('window');
const deviceWidth = windowSize.width;
const deviceHeight = windowSize.height;

class Example extends Component {

  constructor (props) {
    super (props);

    this.onPlaceSearch = this.onPlaceSearch.bind(this);
  }

  onPlaceSearch (data, details) {
    console.log('DATA', data);
    console.log('DETAILS', details);
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 50}}>
        <GooglePlacesAutocomplete
          enablePoweredByContainer={false}
          placeholder="Search"
          minLength={2}
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details) => this.onPlaceSearch(data, details)}
          query={{
            types: '(regions)',
            key: 'AIzaSyBlXzW_f3mZD6bOVIsP6bsHhvcICbLD2PQ',
            language: 'en'
          }}
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)'
            },
            listView: {
              height: deviceHeight,
              width: deviceWidth,
              position: 'absolute',
              top: 40
            }
          }}
          nearbyPlacesAPI={'GooglePlacesSearch'}
          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
        >
      </GooglePlacesAutocomplete>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('GooglePlacesExample', () => Example);
