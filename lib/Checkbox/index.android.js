import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container, CheckBox, Title } from './styles';

const Checkbox = ({
  label,
  labelPosition,
  marginTop,
  color,
  disabled,
  checked,
  labelStyle,
  containerStyle,
  checkboxStyle,
  value,
  onValueChange,
}) => {
  const [_checked, _setChecked] = useState(checked);
  const Label = useCallback(({ left }) => {
    if (typeof label === 'string') {
      return (
        <Title left={left} style={labelStyle}>
          {label}
        </Title>
      );
    }

    return label;
  }, []);

  const handleValueChange = () => {
    const _checkedChanged = !_checked;
    _setChecked(_checkedChanged);

    onValueChange({ label, value, checked: _checkedChanged });
  };

  const FieldIcon = () => {
    return (
      <CheckBox
        value={_checked}
        color={color}
        style={checkboxStyle}
        disabled={disabled}
        onValueChange={handleValueChange}
        tintColors={{ true: color }}
      />
    );
  };

  const Field = () => {
    if (labelPosition === 'left') {
      return (
        <>
          <Label left />
          <FieldIcon />
        </>
      );
    }

    return (
      <>
        <FieldIcon />
        <Label>{label}</Label>
      </>
    );
  };

  return (
    <Container
      containerStyle={containerStyle}
      onPress={handleValueChange}
      marginTop={marginTop}
      disabled={disabled}>
      <Field />
    </Container>
  );
};

Checkbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelPosition: PropTypes.oneOf(['right', 'left']),
  marginTop: PropTypes.number,
  nativeComponent: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  labelStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  checkboxStyle: PropTypes.object,
  switchStyle: PropTypes.object,
  onValueChange: PropTypes.func,
  value: PropTypes.any,
};

Checkbox.defaultProps = {
  label: '',
  labelPosition: 'right',
  marginTop: 0,
  nativeComponent: false,
  color: '#457afb',
  disabled: false,
  checked: false,
  labelStyle: {},
  containerStyle: {},
  checkboxStyle: {},
  switchStyle: {},
  onValueChange: () => {},
  value: null,
};

export default Checkbox;
