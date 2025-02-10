// src/lib/utils.ts

// Función para combinar clases
export const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

// Ejemplo de función para capitalizar la primera letra de una cadena
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// Función para formatear fechas de manera simple
export const formatDate = (date: Date) => date.toLocaleDateString();
