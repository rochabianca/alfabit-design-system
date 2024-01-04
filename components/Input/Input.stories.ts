import { Meta, StoryObj } from '@storybook/react'
import Input, { InputProps } from './Input'

const meta:Meta<InputProps> = {
  title: 'Molecules/Input',
  tags: [],
  component: Input,
  argTypes: {}
}

export const Default: StoryObj<InputProps> = {
  args: {
    multiline: false
  }
} 
export const DefaultDisabled: StoryObj<InputProps> = {
  args: {
    multiline: false,
    disabled: true
  }
}

export const Label: StoryObj<InputProps> = {
  args: {
    label: 'label',
    multiline: false,
    disabled: false
  }
}

export const LabelDisabled: StoryObj<InputProps> = {
  args: {
    label: 'label',
    multiline: false,
    disabled: true
  }
}

export const Multline: StoryObj<InputProps> = {
  args: {
    multiline: true
  }
}

export const MultlineDisabled: StoryObj<InputProps> = {
  args: {
    multiline: true,
    disabled: true
  }
}

export const MultlineLabel: StoryObj<InputProps> = {
  args: {
    label: 'Label',
    multiline: true
  }
}

export const MultlineLabelDisabled: StoryObj<InputProps> = {
  args: {
    label: 'Label',
    multiline: true,
    disabled: true
  }
}

export default meta;