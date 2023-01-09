import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';

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
      <View
        style={{
          backgroundColor: '#AED7A0',
          margin: 15,
          marginTop: 0,
          borderRadius: 4,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 90,
            width: '100%',
            justifyContent: 'center',
          }}>
          <Text style={{marginLeft: 20, color: 'white', fontWeight: '600'}}>
            {extra.name.split(' ').pop().charAt(0).toUpperCase() +
              extra.name.split(' ').pop().slice(1)}
          </Text>
        </View>
        {open ? (
          <View
            style={{
              width: '80%',
              alignItems: 'center',
              borderTopColor: 'white',
              borderTopWidth: 2,
              paddingVertical: 15,
            }}>
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
                  }}
                  key={sub._id}>
                  <Text
                    style={{
                      marginLeft: 5,
                      color: 'white',
                      fontWeight: '600',
                    }}>
                    {sub.name}
                  </Text>
                  {sub._id === currentSelection?.subselections._id ? (
                    <Image
                      style={{marginRight: 5}}
                      source={require('../images/checked.png')}
                    />
                  ) : (
                    <Image
                      style={{marginRight: 5}}
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
