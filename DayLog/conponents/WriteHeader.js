import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import TransparentCircleButton from './TransparentCircleButton';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import {DateTimePickerModal} from 'react-native-modal-datetime-picker';

function WriteHeader({onSave, onAskRemove, isEditing, date, onChangeDate}) {
  const navigation = useNavigation();
  const onGoBack = () => navigation.pop(); // Stack 이라서

  const [mode, setMode] = useState('date');
  const [visible, setVisible] = useState(false);

  const onPressDate = () => {
    setMode('date');
    setVisible(true);
  };

  const onPressTime = () => {
    setMode('time');
    setVisible(true);
  };

  const onConfirm = selectedDate => {
    setVisible(false);
    onChangeDate(selectedDate);
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <View style={styles.block}>
      {/* 책에는 여기에 View가 하나 더 들어가는데 코드상으로 없어도 될거같아서 내가 지움 */}
      <TransparentCircleButton
        name="arrow-back"
        color="#424242"
        onPress={onGoBack}
      />

      <View style={styles.buttons}>
        {isEditing && (
          <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight={true}
            onPress={onAskRemove}
          />
        )}

        <TransparentCircleButton
          name="check"
          color="#009688"
          hasMarginRight={true}
          onPress={onSave}
        />
      </View>

      <View style={styles.center}>
        <Pressable onPress={onPressDate}>
          <Text>{format(new Date(date), 'PPP', {locale: ko})}</Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={onPressTime}>
          <Text>{format(new Date(date), 'p', {locale: ko})}</Text>
        </Pressable>
      </View>
      <DateTimePickerModal
        mode={mode}
        isVisible={visible}
        onConfirm={onConfirm}
        onCancel={onCancel}
        date={date}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    position: 'absolute',
    width: '100%',
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
});

export default WriteHeader;
