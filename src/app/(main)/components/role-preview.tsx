import useRoleDescription from '../hooks/use-role-description';
import { IRole } from '@/types/role';
import { CodeBlock, Label, TooltipProvider } from '@medusajs/ui';
import { useMemo } from 'react';

type Props = {
  role: IRole;
};

const RolePreview = ({ role }: Props) => {
  const { generateDescription } = useRoleDescription();
  const description = useMemo(() => generateDescription(role), [role]);

  const snippets = [
    {
      language: 'markdown',
      code: description,
      label: 'Role Description',
    },
  ];

  return (
    <TooltipProvider>
      <CodeBlock snippets={snippets}>
        <CodeBlock.Header></CodeBlock.Header>
        <CodeBlock.Body />
      </CodeBlock>
    </TooltipProvider>
  );
};

export default RolePreview;
