import { FormHandles } from '@unform/core'
import { ObjectSchema, ValidationError } from 'yup'

export async function validateFormData<T = any>(
  schema: ObjectSchema<any>,
  data: T,
  formRef?: FormHandles,
): Promise<Record<keyof T, string> | null> {
  try {
    if (formRef) formRef.setErrors({})
    await schema.validate(data, { abortEarly: false })
    return null
  } catch (error) {
    if (error instanceof ValidationError) {
      const validationErrors: Record<string, string> = {}
      error.inner.forEach((error) => error?.path && (validationErrors[error.path] = error.message))
      if (formRef) {
        formRef.setErrors(validationErrors)
      }

      return validationErrors as Record<keyof T, string>
    }
    return null
  }
}
