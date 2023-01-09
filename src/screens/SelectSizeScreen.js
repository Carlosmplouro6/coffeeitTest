import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeCurrentSize} from '../redux/choiceCoffee';

export const SelectSizeScreen = ({navigation}) => {
  const {sizes} = useSelector(state => state.coffees);
  const {type} = useSelector(state => state.choiceCoffee.currentOrder);
  const dispatch = useDispatch();

  async function setSize(size) {
    dispatch(changeCurrentSize(size));
    navigation.navigate('extraScreen');
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={style.title}>Select your {type.name} size</Text>
        <View>
          {sizes.map(size => {
            return type.sizes.includes(size._id.toString()) ? (
              <TouchableOpacity key={size._id} onPress={() => setSize(size)}>
                <View style={style.choiceContainer}>
                  <Text style={style.choiceContainerText}>{size.name}</Text>
                </View>
              </TouchableOpacity>
            ) : null;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 24,
    marginBottom: 20,
    marginLeft: 15,
  },
  choiceContainer: {
    backgroundColor: '#AED7A0',
    height: 90,
    margin: 15,
    marginTop: 0,
    borderRadius: 4,
    justifyContent: 'center',
  },
  choiceContainerText: {marginLeft: 20, color: 'white', fontWeight: '600'},
});
