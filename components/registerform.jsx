'use client'
import {useState} from 'react'
import { motion } from 'framer-motion'

import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }
  const steps = [
    {
      fields: [
        { id: 'fullName', label: 'Full Name', type: 'text' },
        { id: 'phone', label: 'Phone Number', type: 'tel' },
        { id: 'email', label: 'What is your email address?', type: 'email' },
      ],
    },
    {
      fields: [
        { id: 'idNumber', label: 'ID Number', type: 'text' },
        { id: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
        {
          id: 'gender',
          label: 'Gender',
          type: 'select',
          options: ['Male', 'Female', 'Other', 'Prefer not to say'],
        },
        { id: 'country', label: 'Country', type: 'text' },
      ],
    },
    {
      fields: [
        {
          id: 'education',
          label: 'What is your highest education level?',
          type: 'select',
          options: ['High School', 'Diploma', "Bachelor's", "Master's", 'PhD'],
        },
        {
          id: 'employed',
          label: 'Are you Employed?',
          type: 'select',
          options: ['Yes', 'No', 'Self-employed', 'Student'],
        },
        { id: 'interests', label: "Let's Pick Your Interests", type: 'text' },
      ],
    },
  ]
function RegisterForm({ currentStep, nextStep, prevStep}) {
      const [formData, setFormData] = useState({})
    
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {steps[currentStep].fields.map((field) => (
        <motion.div variants={fadeInUp} key={field.id} className="space-y-2">
          <label htmlFor={field.id} className="text-sm font-medium">
            {field.label}
          </label>
          {field.type === 'select' ? (
            <Select
              value={formData[field.id] || ''}
              onValueChange={(value) => handleInputChange(field.id, value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {field.options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input
              id={field.id}
              type={field.type}
              value={formData[field.id] || ''}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              className="w-full border-gray-200 focus:border-[#8B1B3F] focus:ring-[#8B1B3F] transition-all"
            />
          )}
        </motion.div>
      ))}

      {/* Navigation Buttons */}
      <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
        {currentStep > 0 && (
          <Button
            type="button"
            onClick={prevStep}
            variant="outline"
            className="flex-1 bg-gray-100 hover:bg-gray-200"
          >
            BACK
          </Button>
        )}
        {currentStep < steps.length - 1 ? (
          <Button
            type="button"
            onClick={nextStep}
            className="flex-1 bg-[#8B1B3F] text-white hover:bg-[#7A1835] transition-transform hover:scale-105"
          >
            NEXT
          </Button>
        ) : (
          <Button
            type="submit"
            className="flex-1 bg-[#8B1B3F] text-white hover:bg-[#7A1835] transition-transform hover:scale-105"
          >
            REGISTER
          </Button>
        )}
      </motion.div>
    </form>
  )
}

export default RegisterForm
