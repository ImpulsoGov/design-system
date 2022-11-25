import { addons } from '@storybook/addons';
import React from 'react';
import theme from './theme';

addons.setConfig({
    theme: theme,
    sidebar: {
    renderLabel: item => {return <p>{item.name}</p>},
    },
});