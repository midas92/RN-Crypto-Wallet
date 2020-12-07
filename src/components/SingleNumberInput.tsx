import React, { forwardRef, useState } from 'react';
import { TextInput } from 'react-native';

import Input from './Input';

interface ISingleNumberInputProps {
  name: string;
  value: string;
  onChangeText: (text: string, key: string) => void;
}

const SingleNumberInput = forwardRef<TextInput, ISingleNumberInputProps>(
  ({ name, value, onChangeText }, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
      <Input
        {...{ value, ref }}
        onChangeText={text => onChangeText(text, name)}
        borderColor={isFocused ? 'inputActive' : 'inputInactive'}
        borderWidth={2}
        borderRadius={1}
        width={58}
        height={58}
        marginRight="m"
        textAlign="center"
        textAlignVertical="center"
        fontSize={30}
        fontFamily="TitilliumWeb-Regular"
        color="inputActive"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        maxLength={1}
        keyboardType="numeric"
      />
    );
  },
);

export default SingleNumberInput;
