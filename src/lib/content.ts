export const site = {
  name: "ConsultaMed",
  longName: "MedHospital · ConsultaMed",
  subject: "Electiva I",
  tagline: "Plataforma de Gestión Hospitalaria",
  description:
    "Plataforma web que optimiza la gestión hospitalaria mediante la administración digital de pacientes, médicos y citas médicas.",
  authors: [
    { name: "Valentina Burbano" },
    { name: "Valeria Góngora" },
    { name: "David Luna" },
    { name: "Vanessa Mena" },
  ],
};

export const nav = [
  { id: "introduccion", label: "Introducción" },
  { id: "objetivos", label: "Objetivos" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "arquitectura", label: "Arquitectura" },
  { id: "funcionalidades", label: "Funcionalidades" },
  { id: "seguridad", label: "Seguridad" },
  { id: "equipo", label: "Equipo" },
];

export const introduccion = {
  title: "Introducción",
  body: "ConsultaMed es una plataforma web diseñada para optimizar la gestión hospitalaria mediante la administración digital de pacientes, médicos y citas médicas. El sistema automatiza procesos administrativos, mejora el control de la información clínica y facilita una atención médica más eficiente y organizada.",
};

export const problematica = {
  title: "Problemática",
  body: "Muchos centros médicos gestionan citas y pacientes de forma manual, lo que provoca pérdida de información, retrasos en la atención, duplicidad de citas y procesos administrativos lentos. ConsultaMed surge como una plataforma digital centralizada para optimizar la organización y mejorar la eficiencia en la gestión hospitalaria.",
  pains: [
    "Pérdida de información clínica",
    "Retrasos en la atención",
    "Duplicidad de citas médicas",
    "Procesos administrativos lentos",
  ],
};

export const objetivoGeneral = {
  title: "Objetivo General",
  body: "Desarrollar un sistema web de gestión hospitalaria que permita administrar pacientes, médicos y citas médicas de manera eficiente mediante tecnologías modernas.",
};

export const objetivosEspecificos = {
  title: "Objetivos Específicos",
  items: [
    { icon: "stethoscope", text: "Organizar especialidades médicas" },
    { icon: "calendar-check", text: "Controlar citas médicas" },
    { icon: "users", text: "Gestionar pacientes y médicos" },
    { icon: "bar-chart-3", text: "Generar reportes y estadísticas" },
    { icon: "building-2", text: "Mejorar la administración hospitalaria" },
    { icon: "heart-pulse", text: "Promover el cuidado de la salud" },
  ],
};

export const tecnologias = {
  title: "Tecnologías utilizadas",
  subtitle: "Stack del proyecto y función dentro del sistema",
  items: [
    { tech: "Python", role: "Lenguaje principal", icon: "code-2" },
    { tech: "Django", role: "Framework backend", icon: "server" },
    { tech: "Bootstrap 5", role: "Diseño frontend", icon: "layout" },
    { tech: "PostgreSQL", role: "Base de datos", icon: "database" },
    { tech: "Chart.js", role: "Gráficas y reportes", icon: "bar-chart-3" },
    { tech: "HTML / CSS", role: "Interfaz", icon: "file-code" },
    { tech: "Gunicorn", role: "Servidor de aplicaciones", icon: "cpu" },
    { tech: "Render", role: "Despliegue cloud", icon: "cloud" },
  ],
};

export const arquitectura = {
  title: "Arquitectura del Proyecto",
  subtitle: "Patrón MVT de Django",
  body: "El sistema sigue el patrón arquitectónico MVT de Django, permitiendo una mejor organización y escalabilidad del proyecto.",
  layers: [
    {
      name: "Model",
      role: "Base de datos",
      detail: "Representa las entidades y la lógica de persistencia.",
      icon: "database",
    },
    {
      name: "View",
      role: "Lógica del sistema",
      detail: "Procesa las peticiones, aplica reglas y prepara los datos.",
      icon: "git-branch",
    },
    {
      name: "Template",
      role: "Interfaz visual",
      detail: "Renderiza la información hacia el usuario final.",
      icon: "layout",
    },
  ],
};

export const estructura = {
  title: "Estructura del Sistema",
  subtitle: "Organización modular del proyecto Django",
  items: [
    { folder: "accounts", role: "Usuarios y autenticación", icon: "user-check" },
    { folder: "consultas", role: "Gestión médica", icon: "clipboard-list" },
    { folder: "templates", role: "Interfaces HTML", icon: "layout" },
    { folder: "static", role: "Archivos CSS y JS", icon: "file-code" },
    { folder: "docs", role: "Documentación", icon: "book-open" },
  ],
};

export const baseDatos = {
  title: "Base de Datos",
  subtitle: "Modelo entidad-relación principal",
  entities: [
    {
      name: "Doctor",
      icon: "stethoscope",
      fields: ["id", "nombre", "especialidad_id", "email"],
    },
    {
      name: "Patient",
      icon: "user",
      fields: ["id", "nombre", "documento", "telefono"],
    },
    {
      name: "Appointment",
      icon: "calendar",
      fields: ["id", "fecha", "doctor_id", "patient_id"],
    },
    {
      name: "Specialty",
      icon: "heart-pulse",
      fields: ["id", "nombre", "descripcion"],
    },
  ],
};

export const roles = {
  title: "Autenticación y Roles",
  subtitle: "Control de acceso por tipo de usuario",
  items: [
    {
      name: "Administrador",
      icon: "shield-check",
      description: "Gestión global del sistema, usuarios y reportes.",
    },
    {
      name: "Médico",
      icon: "stethoscope",
      description: "Acceso a su agenda, pacientes e historias clínicas.",
    },
    {
      name: "Operador",
      icon: "headset",
      description: "Programa citas y gestiona información de pacientes.",
    },
    {
      name: "Paciente",
      icon: "user",
      description: "Consulta sus citas e información médica personal.",
    },
  ],
};

export const funcionalidades = {
  title: "Funcionalidades del Sistema",
  subtitle: "Módulos disponibles en ConsultaMed",
  modules: [
    {
      title: "Interfaz Responsiva",
      icon: "layout",
      bullets: [
        "Diseño responsivo",
        "Facilidad de uso",
        "Compatibilidad móvil",
        "Navegación intuitiva",
      ],
    },
    {
      title: "Panel Administrador",
      icon: "layout-dashboard",
      bullets: [
        "Gráficas y dashboards",
        "Reportes en PDF",
        "Exportación a Excel",
        "Estadísticas del sistema",
      ],
    },
    {
      title: "Listado de Citas",
      icon: "calendar-check",
      bullets: [
        "Crear citas",
        "Editar citas",
        "Validar horarios",
        "Asignar pacientes y médicos",
      ],
    },
    {
      title: "Médicos",
      icon: "stethoscope",
      bullets: ["Registro de médicos", "Especialidades", "Disponibilidad"],
    },
    {
      title: "Pacientes",
      icon: "users",
      bullets: ["Registro", "Consulta", "Edición", "Historial básico"],
    },
    {
      title: "Historias Clínicas",
      icon: "clipboard-list",
      bullets: [
        "Organización hospitalaria",
        "Automatización de procesos",
        "Reducción de errores",
        "Gestión centralizada",
      ],
    },
    {
      title: "Horarios y Disponibilidad",
      icon: "clock",
      bullets: [
        "Disponibilidad por médico",
        "Validación de horarios",
        "Programación inteligente",
      ],
    },
    {
      title: "Despliegue Cloud",
      icon: "cloud",
      bullets: [
        "Listo para Render o Railway",
        "Gunicorn + PostgreSQL",
        "Variables de entorno",
      ],
    },
  ],
};

export const seguridad = {
  title: "Seguridad del Sistema",
  subtitle: "Medidas implementadas en la plataforma",
  items: [
    { icon: "lock", text: "Inicio de sesión seguro" },
    { icon: "shield", text: "Protección de usuarios" },
    { icon: "check-circle-2", text: "Validación de formularios" },
    { icon: "key-round", text: "Variables de entorno (.env)" },
  ],
};

export const conclusion = {
  title: "Conclusión",
  body: "ConsultaMed optimiza la gestión hospitalaria mediante la automatización de procesos médicos y administrativos, ofreciendo una solución segura y organizada para la administración de pacientes, médicos y citas, mientras aplica tecnologías web y bases de datos en un entorno real.",
};
