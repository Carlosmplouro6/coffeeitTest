import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../common/styling';

export const OptionsTab = props => {
  const [open, setOpen] = useState(false);
  const {extras} = useSelector(state => state.choiceCoffee.currentOrder);

  const {extra, setExtra} = props;
  const currentSelection = extras.find(x => x._id === extra._id);
  return (
    <TouchableOpacity
      onPress={() => {
        setOpen(!open);
      }}>
      <View style={style.choiceContainer}>
        <View style={style.container}>
          <Text style={style.choiceContainerText}>
            {extra.name.split(' ').pop().charAt(0).toUpperCase() +
              extra.name.split(' ').pop().slice(1)}
          </Text>
        </View>
        {open ? (
          <View style={style.separationLine}>
            {extra.subselections.map(sub => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setExtra({
                      _id: extra._id,
                      name: extra.name,
                      subselections: {
                        _id: sub._id,
                        name: sub.name,
                      },
                    });
                  }}
                  style={style.insideButton}
                  key={sub._id}>
                  <Text style={style.insideButtonText}>{sub.name}</Text>
                  {sub._id === currentSelection?.subselections._id ? (
                    <Image
                      style={style.insideButtonImg}
                      source={require('../images/checked.png')}
                    />
                  ) : (
                    <Image
                      style={style.insideButtonImg}
                      source={require('../images/notChecked.png')}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    height: 90,
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    color: Colors.black,
    fontSize: 24,
    marginBottom: 20,
    marginLeft: 15,
  },
  choiceContainer: {
    backgroundColor: Colors.lightGreen,
    margin: 15,
    marginTop: 0,
    borderRadius: 4,
    alignItems: 'center',
  },
  choiceContainerText: {marginLeft: 20, color: Colors.white, fontWeight: '600'},
  separationLine: {
    width: '80%',
    alignItems: 'center',
    borderTopColor: Colors.white,
    borderTopWidth: 2,
    paddingVertical: 15,
  },
  insideButton: {
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
  insideButtonText: {marginLeft: 5, color: Colors.white, fontWeight: '600'},
  insideButtonImg: {marginRight: 5},
});
