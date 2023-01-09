import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeCurrentType} from '../redux/choiceCoffee';
import {Colors} from '../common/styling';

export const SelectStyleScreen = ({navigation}) => {
  const {types} = useSelector(state => state.coffees);
  const dispatch = useDispatch();

  async function setType(type) {
    dispatch(changeCurrentType(type));
    navigation.navigate('sizeScreen');
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={style.title}>Select your Style</Text>
        <View>
          {types.map(type => {
            return (
              <TouchableOpacity key={type._id} onPress={() => setType(type)}>
                <View style={style.choiceContainer}>
                  <Text style={style.choiceContainerText}>{type.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title: {
    color: Colors.black,
    fontSize: 24,
    marginBottom: 20,
    marginLeft: 15,
  },
  choiceContainer: {
    backgroundColor: Colors.lightGreen,
    height: 90,
    margin: 15,
    marginTop: 0,
    borderRadius: 4,
    justifyContent: 'center',
  },
  choiceContainerText: {marginLeft: 20, color: Colors.white, fontWeight: '600'},
});
