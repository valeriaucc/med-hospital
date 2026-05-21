import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { RoleCard } from "@/components/ui/RoleCard";
import { roles } from "@/lib/content";

export function Roles() {
  return (
    <Section id="roles" tone="muted">
      <Reveal>
        <SectionTitle
          eyebrow="Autenticación"
          title={roles.title}
          subtitle={roles.subtitle}
        />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {roles.items.map((role, i) => (
          <Reveal key={role.name} delay={i * 0.05}>
            <RoleCard
              name={role.name}
              description={role.description}
              icon={role.icon}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
