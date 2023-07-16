import React from 'react';
import Select from 'react-select';


const MySelect = ({ options, value, onChange, defaulValue, isMulti, placeholder, minWidth, maxWidth }) => {

  const handleChange = (selectedOption) => {
    if (isMulti) {
      const selectedValues = selectedOption.map(option => option.value);
      onChange(selectedValues.join(', '));
    } else {
      onChange(selectedOption.value);
    }
  };


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minWidth: minWidth,
      maxWidth: maxWidth,
    }),
    option: (provided, state) => ({
      ...provided,
      height: "100%",
      backgroundColor: state.isFocused ? '#727272' : 'transparent',
      color: state.isSelected ? 'gray' : provided.color,

    }),
    menuList: (provided, state) => ({
      ...provided,
      maxHeight: 'none',
    }),
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: '#727272',
      borderRadius: '4px',
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: state.isFocused ? 'red' : 'inherit',
      backgroundColor: 'transparent',
    }),
  }



  const getTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      // primary: '#neutral50', // Установка neutral90 как основного цвета
      neutral0: '#1a1a1a', // Фоновый цвет (для темной темы)
      neutral80: '#f5f8fa', // Цвет текста (для темной темы)
    },
  });

  return (
    <Select
      // defaulValue={defaulValue}
      placeholder={placeholder}
      isMulti={isMulti}
      value={value}
      onChange={handleChange}
      options={options}
      styles={customStyles}
      theme={getTheme}

    >
    </Select>
  );
};

export default MySelect;
