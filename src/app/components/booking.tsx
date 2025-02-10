import React, { useState } from 'react';
import { Button, Select } from 'react-day-picker';
import * as emailjs from "emailjs-com";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Alert, AlertDescription } from './ui/alert';

const INITIAL_FORM_STATE = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  people: ''
};

const EMAIL_SERVICE_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID
};

const ReservationForm = ({ translations, language }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const today = new Date();
    const selectedDate = new Date(formData.date);
    
    if (selectedDate < today) {
      setStatus({
        type: 'error',
        message: 'Please select a future date'
      });
      return false;
    }

    if (!formData.name || !formData.phone || !formData.email || 
        !formData.date || !formData.time || !formData.people) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const templateParams = {
        to_name: 'Restaurant Manager',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        people: formData.people,
      };

      await emailjs.send(
        EMAIL_SERVICE_CONFIG.serviceId,
        EMAIL_SERVICE_CONFIG.templateId,
        templateParams,
        EMAIL_SERVICE_CONFIG.userId
      );

      setStatus({
        type: 'success',
        message: 'Reservation submitted successfully. You will receive a confirmation email shortly.'
      });
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      console.error('Reservation error:', error);
      setStatus({
        type: 'error',
        message: 'There was an error submitting your reservation. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 13; hour <= 22; hour++) {
      for (let minute of ['00', '30']) {
        slots.push(`${hour}:${minute}`);
      }
    }
    return slots;
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-center">
          {translations[language].reserveTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              placeholder={translations[language].reserveName}
              value={formData.name}
              onChange={handleChange}
              className="w-full"
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder={translations[language].reservePhone}
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full"
              required
            />

            <Select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full"
              required
            >
              <option value="">{translations[language].reserveTime || 'Select time'}</option>
              {generateTimeSlots().map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </Select>
          </div>

          <Select
            name="people"
            value={formData.people}
            onChange={handleChange}
            className="w-full"
            required
          >
            <option value="">{translations[language].reservePeople}</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>
                {num} {translations[language].reservePersons}
              </option>
            ))}
          </Select>

          {status.message && (
            <Alert variant={status.type === 'error' ? 'destructive' : 'default'}>
              <AlertDescription>{status.message}</AlertDescription>
            </Alert>
          )}

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : translations[language].reserveButton}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReservationForm;