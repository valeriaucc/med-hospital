import {
  Activity,
  BarChart3,
  BookOpen,
  Building2,
  Calendar,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Headset,
  HeartPulse,
  KeyRound,
  Layout,
  LayoutDashboard,
  Lock,
  Server,
  Shield,
  ShieldCheck,
  Stethoscope,
  User,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  activity: Activity,
  "bar-chart-3": BarChart3,
  "book-open": BookOpen,
  "building-2": Building2,
  calendar: Calendar,
  "calendar-check": CalendarCheck,
  "check-circle-2": CheckCircle2,
  "clipboard-list": ClipboardList,
  clock: Clock,
  cloud: Cloud,
  "code-2": Code2,
  cpu: Cpu,
  database: Database,
  "file-code": FileCode,
  "git-branch": GitBranch,
  headset: Headset,
  "heart-pulse": HeartPulse,
  "key-round": KeyRound,
  layout: Layout,
  "layout-dashboard": LayoutDashboard,
  lock: Lock,
  server: Server,
  shield: Shield,
  "shield-check": ShieldCheck,
  stethoscope: Stethoscope,
  user: User,
  "user-check": UserCheck,
  users: Users,
};

type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const Component = map[name] ?? Activity;
  return <Component className={className} aria-hidden="true" />;
}
