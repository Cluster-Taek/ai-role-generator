import useRoleDescription from '../hooks/use-role-description';
import { IRole } from '@/types/role';
import { CodeBlock, TooltipProvider } from '@medusajs/ui';
import { useMemo } from 'react';

interface IRolePreviewProps {
  role: IRole;
}

const RolePreview = ({ role }: IRolePreviewProps) => {
  const { generateDescription } = useRoleDescription();
  const description = useMemo(() => generateDescription(role), [role]);

  const snippets = useMemo(() => [
    {
      language: 'markdown',
      code: description,
      label: 'Role Description',
    },
  ], [description]);

  return (
    <TooltipProvider>
      <CodeBlock key={JSON.stringify(snippets)} snippets={snippets}>
        <CodeBlock.Header></CodeBlock.Header>
        <CodeBlock.Body />
      </CodeBlock>
    </TooltipProvider>
  );
};

export default RolePreview;
