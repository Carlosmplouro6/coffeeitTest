import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeCurrentSize} from '../redux/choiceCoffee';

export const SelectSizeScreen = ({navigation}) => {
  const {sizes} = useSelector(state => state.coffees);
  const {type} = useSelector(state => state.choiceCoffee.currentOrder);
  const dispatch = useDispatch();

  async function setSize(size) {
    console.log(size);
    dispatch(changeCurrentSize(size));
    navigation.navigate('extraScreen');
  }

  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            marginBottom: 20,
            marginLeft: 15,
          }}>
          Select your {type.name} size
        </Text>
        <View>
          {sizes.map(size => {
            return type.sizes.includes(size._id.toString()) ? (
              <TouchableOpacity key={size._id} onPress={() => setSize(size)}>
                <View
                  style={{
                    backgroundColor: '#AED7A0',
                    height: 90,
                    margin: 15,
                    marginTop: 0,
                    borderRadius: 4,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{marginLeft: 20, color: 'white', fontWeight: '600'}}>
                    {size.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};
