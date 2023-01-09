import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../common/styling';

export const OverviewScreen = ({navigation}) => {
  const choiceCoffee = useSelector(state => state.choiceCoffee.currentOrder);
  const {type, size, extras} = choiceCoffee;
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.title}>Overview</Text>
        <View style={style.overviewContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('styleScreen')}>
            <View style={style.choiceContainer}>
              <Text style={style.choiceContainerText}>{type.name}</Text>
              <Text style={style.choiceContainerEdit}>edit</Text>
            </View>
          </TouchableOpacity>
          <View style={style.dividerLine}></View>
          <TouchableOpacity onPress={() => navigation.navigate('sizeScreen')}>
            <View style={style.choiceContainer}>
              <Text style={style.choiceContainerText}>{size.name}</Text>
              <Text style={style.choiceContainerEdit}>edit</Text>
            </View>
          </TouchableOpacity>
          <View style={style.dividerLine}></View>
          {extras.map((extra, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('extraScreen')}>
                  <View style={style.extrasInsiderButton}>
                    <Text style={style.extrasInsiderButtonText}>
                      {extra.name.split(' ').pop().charAt(0).toUpperCase() +
                        extra.name.split(' ').pop().slice(1)}
                    </Text>
                    <Text style={style.choiceContainerEdit}>edit</Text>
                  </View>
                  <View style={style.extrasInsiderDivider}>
                    <View style={style.extrasInsiderSubButton}>
                      <Text style={style.extrasInsiderSubButtonText}>
                        {extra.subselections.name}
                      </Text>

                      <Image
                        style={style.selectIcon}
                        source={require('../images/checked.png')}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                {index === extras.length - 1 ? null : (
                  <View style={style.dividerLine}></View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => console.log(choiceCoffee)}>
        <View style={style.bottomButton}>
          <Text style={style.bottomButtonText}>Brew your coffee</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
  },
  title: {
    color: Colors.black,
    fontSize: 24,
    marginBottom: 20,
    marginLeft: 15,
  },
  overviewContainer: {
    backgroundColor: Colors.lightGreen,
    borderRadius: 4,
    margin: 15,
  },
  choiceContainer: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  choiceContainerText: {marginLeft: 20, color: Colors.white, fontWeight: '600'},
  choiceContainerEdit: {
    marginRight: 20,
    color: Colors.white,
    fontWeight: '600',
    fontSize: 12,
  },
  dividerLine: {
    width: '90%',
    backgroundColor: Colors.white,
    height: 2,
    alignSelf: 'center',
  },
  extrasInsiderButton: {
    height: 90,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  extrasInsiderButtonText: {
    marginLeft: 20,
    color: Colors.white,
    fontWeight: '600',
  },
  extrasInsiderDivider: {
    width: '90%',
    alignItems: 'center',
    borderTopColor: Colors.white,
    borderTopWidth: 2,
    paddingVertical: 15,
    alignSelf: 'center',
  },
  extrasInsiderSubButton: {
    backgroundColor: Colors.mediumGreen,
    height: 55,
    width: '100%',
    margin: 15,
    marginTop: 0,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  extrasInsiderSubButtonText: {
    marginLeft: 5,
    color: Colors.white,
    fontWeight: '600',
  },
  selectIcon: {marginRight: 5},
  bottomButton: {
    backgroundColor: Colors.lightGreen,
    height: 90,
    margin: 15,
    borderRadius: 4,
    justifyContent: 'center',
  },
  bottomButtonText: {marginLeft: 20, color: Colors.white, fontWeight: '700'},
});
