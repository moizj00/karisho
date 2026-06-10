import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  content: React.ReactNode;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}