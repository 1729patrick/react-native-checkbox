import React, { useState, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container, CheckBox, Label } from './styles';

const Checkbox = ({ label, labelPosition = 'right', marginTop }) => {
  const [value, setValue] = useState(false);

  const handleValueChange = () => {
    setValue(!value);
  };

  return (
    <Container onPress={handleValueChange} marginTop={marginTop}>
      {labelPosition === 'left' && <Text>{label}</Text>}

      <CheckBox value={value} onValueChange={handleValueChange} />
      {labelPosition === 'right' && <Text>{label}</Text>}
    </Container>
  );
};

export default Checkbox;
