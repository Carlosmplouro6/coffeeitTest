import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';

export const OverviewScreen = ({navigation}) => {
  const choiceCoffee = useSelector(state => state.choiceCoffee.currentOrder);
  const {type, size, extras} = choiceCoffee;
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
          Overview
        </Text>
        <View
          style={{
            backgroundColor: '#AED7A0',
            borderRadius: 4,
            margin: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('styleScreen')}>
            <View
              style={{
                height: 90,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{marginLeft: 20, color: 'white', fontWeight: '600'}}>
                {type.name}
              </Text>
              <Text
                style={{
                  marginRight: 20,
                  color: 'white',
                  fontWeight: '600',
                  fontSize: 12,
                }}>
                edit
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: '90%',
              backgroundColor: 'white',
              height: 2,
              alignSelf: 'center',
            }}></View>
          <TouchableOpacity onPress={() => navigation.navigate('sizeScreen')}>
            <View
              style={{
                height: 90,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{marginLeft: 20, color: 'white', fontWeight: '600'}}>
                {size.name}
              </Text>
              <Text
                style={{
                  marginRight: 20,
                  color: 'white',
                  fontWeight: '600',
                  fontSize: 12,
                }}>
                edit
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: '90%',
              backgroundColor: 'white',
              height: 2,
              alignSelf: 'center',
            }}></View>
          {extras.map((extra, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('extraScreen')}>
                  <View
                    style={{
                      height: 90,
                      marginTop: 0,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        marginLeft: 20,
                        color: 'white',
                        fontWeight: '600',
                      }}>
                      {extra.name.split(' ').pop().charAt(0).toUpperCase() +
                        extra.name.split(' ').pop().slice(1)}
                    </Text>
                    <Text
                      style={{
                        marginRight: 20,
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 12,
                      }}>
                      edit
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '90%',
                      alignItems: 'center',
                      borderTopColor: 'white',
                      borderTopWidth: 2,
                      paddingVertical: 15,
                      alignSelf: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: '#9BC88B',
                        height: 55,
                        width: '100%',
                        margin: 15,
                        marginTop: 0,
                        borderRadius: 4,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          marginLeft: 5,
                          color: 'white',
                          fontWeight: '600',
                        }}>
                        {extra.subselections.name}
                      </Text>

                      <Image
                        style={{marginRight: 5}}
                        source={require('../images/checked.png')}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                {index === extras.length - 1 ? null : (
                  <View
                    style={{
                      width: '90%',
                      backgroundColor: 'white',
                      height: 2,
                      alignSelf: 'center',
                    }}></View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => console.log(choiceCoffee)}>
        <View
          style={{
            backgroundColor: '#AED7A0',
            height: 90,
            margin: 15,
            borderRadius: 4,
            justifyContent: 'center',
          }}>
          <Text style={{marginLeft: 20, color: 'white', fontWeight: '700'}}>
            Brew your coffee
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
