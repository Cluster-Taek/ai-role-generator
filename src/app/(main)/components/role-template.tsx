import { ROLE_TEMPLATE_CONSTANTS } from '@/constants/role-template-constants';
import { Header } from '@/medusa/components/header';
import { IRole } from '@/types/role';

interface IRoleTemplateProps {
  onSelect?: (role: IRole) => void;
}

const RoleTemplate = ({ onSelect }: IRoleTemplateProps) => {
  const templates = Object.values(ROLE_TEMPLATE_CONSTANTS);
  return (
    <Header
      title="Template"
      actions={templates.map((template) => ({
        type: 'button',
        props: {
          variant: 'secondary',
          size: 'small',
          onClick: () => onSelect?.(template.role),
          children: template.title,
        },
      }))}
    />
  );
};

export default RoleTemplate;
