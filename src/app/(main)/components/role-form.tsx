import { Header } from '@/medusa/components/header';
import { SectionRow } from '@/medusa/components/section-row';
import { IRole } from '@/types/role';
import { Container } from '@medusajs/ui';

interface IRoleFormProps {
  role: IRole;
  handleRoleChange: (role: IRole) => void;
}

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

const RoleForm = ({ role, handleRoleChange }: IRoleFormProps) => {
  const updateNestedValue = <T extends unknown>(path: NestedKeyOf<IRole>, value: T) => {
    const keys = path.split('.');
    const newRole = { ...role };
    let current: any = newRole;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]] = { ...current[keys[i]] };
    }

    current[keys[keys.length - 1]] = value;
    handleRoleChange(newRole);
  };

  return (
    <Container className="h-full p-0 divide-y">
      <Header title="EDITOR" />
      <SectionRow title="Frameworks" value={<div className="flex flex-col gap-2"></div>} />
    </Container>
  );
};

export default RoleForm;
