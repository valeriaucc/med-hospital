export const site = {
  name: "MedHospital",
  longName: "MedHospital · ConsultaMed",
  systemName: "ConsultaMed",
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
  repo: {
    url: "https://github.com/valeriaucc/med-hospital",
    label: "valeriaucc/med-hospital",
  },
  deploy: {
    url: "https://med-hospital.onrender.com",
    label: "med-hospital.onrender.com",
  },
};

export const nav = [
  { id: "introduccion", label: "Introducción" },
  { id: "objetivos", label: "Objetivos" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "arquitectura", label: "Arquitectura" },
  { id: "base-datos", label: "Base de Datos" },
  { id: "funcionalidades", label: "Funcionalidades" },
  { id: "timeline", label: "Proceso" },
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
      sample: "class Patient(models.Model):\n    name = CharField(...)",
    },
    {
      name: "View",
      role: "Lógica del sistema",
      detail: "Procesa las peticiones, aplica reglas y prepara los datos.",
      icon: "git-branch",
      sample: "def appointments(request):\n    return render(...)",
    },
    {
      name: "Template",
      role: "Interfaz visual",
      detail: "Renderiza la información hacia el usuario final.",
      icon: "layout",
      sample: "{% for cita in citas %}\n  {{ cita.fecha }}\n{% endfor %}",
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
      name: "Specialty",
      icon: "heart-pulse",
      fields: [
        { name: "id", type: "PK", isKey: true },
        { name: "nombre", type: "string" },
        { name: "descripcion", type: "text" },
      ],
    },
    {
      name: "Doctor",
      icon: "stethoscope",
      fields: [
        { name: "id", type: "PK", isKey: true },
        { name: "nombre", type: "string" },
        { name: "especialidad_id", type: "FK", isKey: true },
        { name: "email", type: "string" },
      ],
    },
    {
      name: "Patient",
      icon: "user",
      fields: [
        { name: "id", type: "PK", isKey: true },
        { name: "nombre", type: "string" },
        { name: "documento", type: "string" },
        { name: "telefono", type: "string" },
      ],
    },
    {
      name: "Appointment",
      icon: "calendar",
      fields: [
        { name: "id", type: "PK", isKey: true },
        { name: "fecha", type: "datetime" },
        { name: "doctor_id", type: "FK", isKey: true },
        { name: "patient_id", type: "FK", isKey: true },
      ],
    },
  ],
  relationships: [
    { from: "Doctor", to: "Specialty", label: "pertenece a" },
    { from: "Appointment", to: "Doctor", label: "atendida por" },
    { from: "Appointment", to: "Patient", label: "agendada para" },
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
  permissions: {
    headers: ["Funcionalidad", "Admin", "Médico", "Operador", "Paciente"],
    rows: [
      { feature: "Gestión de usuarios", values: [true, false, false, false] },
      { feature: "Crear/editar citas", values: [true, false, true, false] },
      { feature: "Consultar agenda propia", values: [true, true, false, true] },
      { feature: "Historias clínicas", values: [true, true, false, "read"] },
      { feature: "Reportes y dashboards", values: [true, "read", false, false] },
      { feature: "Configuración del sistema", values: [true, false, false, false] },
    ] as { feature: string; values: (boolean | "read")[] }[],
  },
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

export const timeline = {
  title: "Proceso del Proyecto",
  subtitle: "Fases de desarrollo de ConsultaMed",
  milestones: [
    {
      phase: "Fase 1",
      title: "Análisis y Diseño",
      icon: "search",
      description:
        "Identificación de la problemática hospitalaria y definición de objetivos, alcance, requisitos y modelo de datos.",
    },
    {
      phase: "Fase 2",
      title: "Arquitectura y Modelado",
      icon: "git-branch",
      description:
        "Diseño del patrón MVT en Django, definición de modelos (Patient, Doctor, Specialty, Appointment) y diagrama ER.",
    },
    {
      phase: "Fase 3",
      title: "Desarrollo Backend",
      icon: "server",
      description:
        "Implementación de vistas, autenticación por roles, gestión de citas y validación de reglas de negocio.",
    },
    {
      phase: "Fase 4",
      title: "Frontend e Interfaz",
      icon: "layout",
      description:
        "Construcción de plantillas con Bootstrap 5, dashboards con Chart.js y experiencia móvil responsiva.",
    },
    {
      phase: "Fase 5",
      title: "Pruebas y Seguridad",
      icon: "shield-check",
      description:
        "Validación de formularios, protección de rutas, variables de entorno y refinamiento del flujo de usuario.",
    },
    {
      phase: "Fase 6",
      title: "Despliegue",
      icon: "cloud",
      description:
        "Configuración con Gunicorn + PostgreSQL y publicación en la nube (Render / Railway).",
    },
  ],
};

export const conclusion = {
  title: "Conclusión",
  body: "ConsultaMed optimiza la gestión hospitalaria mediante la automatización de procesos médicos y administrativos, ofreciendo una solución segura y organizada para la administración de pacientes, médicos y citas, mientras aplica tecnologías web y bases de datos en un entorno real.",
};

export const stats = [
  { value: "4", label: "Entidades" },
  { value: "4", label: "Roles" },
  { value: "8+", label: "Módulos" },
  { value: "6", label: "Fases" },
];
