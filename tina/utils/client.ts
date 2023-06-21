import type { InputFieldType, ReferenceProps } from 'tinacms'

export const hiddenComponent = (form: any, valueName: string, component: (props: InputFieldType<any, any>) => JSX.Element) => {
  return form.tinaForm.values[valueName] ? component(form) : null
}

export const maxChars = (max: number) => (value: string) => {
  if (value?.length > max) {
    return `Max ${max} characters`
  }
}

export const minChars = (min: number) => (value: string) => {
  if (value?.length < min) {
    return `Min ${min} characters`
  }
}