import React, { useState, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container, Switch, Label } from './styles';

const Checkbox = ({ label, labelPosition = 'right', marginTop }) => {
  const [value, setValue] = useState(false);

  const handleValueChange = () => {
    setValue(!value);
  };

  return (
    <Container onPress={handleValueChange} marginTop={marginTop}>
      {labelPosition === 'left' && <Label left>{label}</Label>}

      <Switch value={value} onValueChange={handleValueChange} />
      {labelPosition === 'right' && <Label>{label}</Label>}
    </Container>
  );
};

export default Checkbox;
