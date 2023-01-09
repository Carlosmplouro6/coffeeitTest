import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeCurrentExtra} from '../redux/choiceCoffee';
import {OptionsTab} from '../components/OptionsTab';

export const SelectExtrasScreen = ({navigation}) => {
  const {extras} = useSelector(state => state.coffees);
  const {type} = useSelector(state => state.choiceCoffee.currentOrder);
  const dispatch = useDispatch();

  async function setExtra(extra) {
    dispatch(changeCurrentExtra(extra));
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
      }}>
      <ScrollView>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            marginBottom: 20,
            marginLeft: 15,
          }}>
          Select your {type.name} extra's
        </Text>
        <View>
          {extras.map(extra => {
            return type.extras.includes(extra._id.toString()) ? (
              <OptionsTab key={extra._id} extra={extra} setExtra={setExtra} />
            ) : null;
          })}
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('overviewScreen')}>
        <View
          style={{
            backgroundColor: '#AED7A0',
            height: 90,
            margin: 15,
            borderRadius: 4,
            justifyContent: 'center',
          }}>
          <Text style={{marginLeft: 20, color: 'white', fontWeight: '600'}}>
            Overview order
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
