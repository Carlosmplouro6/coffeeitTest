import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setTypeSizeExtra} from '../redux/coffees';
import {Colors} from '../common/styling';

export const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let response = await fetch(
      'https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba0ad8493d9eac4811a9a6',
    );
    let json = await response.json();
    console.log(json);
    if (json.statusCode === 404) {
      dispatch(
        setTypeSizeExtra({
          types: [
            {
              _id: '50',
              name: 'Americano',
              sizes: ['2', '3'],
              extras: ['9'],
            },
            {
              _id: '32',
              name: 'Ristretto',
              sizes: ['2', '3', '4'],
              extras: ['9', '10'],
            },
          ],
          sizes: [
            {
              _id: 2,
              name: 'Large',
            },
            {
              _id: 3,
              name: 'Medium',
            },
            {
              _id: 4,
              name: 'Small',
            },
          ],
          extras: [
            {
              _id: 9,
              name: 'Select the amount of sugar',
              subselections: [
                {
                  _id: 20,
                  name: 'A lot',
                },
                {
                  _id: 21,
                  name: 'Normal',
                },
                {
                  _id: 22,
                  name: 'None',
                },
              ],
            },
            {
              _id: 10,
              name: 'Select the amount of milk',
              subselections: [
                {
                  _id: 20,
                  name: 'Dairy',
                },
                {
                  _id: 21,
                  name: 'Soy',
                },
                {
                  _id: 22,
                  name: 'Oat',
                },
              ],
            },
          ],
        }),
      );
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={style.title}>Tab the machine to start</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('styleScreen');
          }}>
          <Image source={require('../images/homeImg.png')} />
        </TouchableOpacity>
        <Text style={style.underlink}>How does this work</Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title: {
    color: Colors.black,
    fontSize: 24,
    marginBottom: 50,
    marginLeft: 15,
  },
  underlink: {
    fontSize: 16,
    color: Colors.black,
    marginTop: 50,
    marginLeft: 30,
    textDecorationLine: 'underline',
  },
});
