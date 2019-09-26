import React from "react"

interface IInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface IFormProps {
  onFormSubmit: (event: React.FormEvent) => void
}

export const Input: React.FC<IInputProps> = ({ value, onChange }) => <input type="text" placeholder="Name" value={value} onChange={onChange} />

export const Form: React.FC<IFormProps> = ({ onFormSubmit, children }) => <form onSubmit={onFormSubmit}>{children}</form>
