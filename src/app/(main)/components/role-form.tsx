import SectionDrawer from './section-drawer';
import { ROLE_CONSTANTS } from '@/constants/role-constants';
import { Header } from '@/medusa/components/header';
import { SectionRow } from '@/medusa/components/section-row';
import { TagInput } from '@/medusa/components/tag-input';
import { IRole } from '@/types/role';
import { Checkbox, Container, Input, Select } from '@medusajs/ui';
import { produce } from 'immer';

interface IRoleFormProps {
  role: IRole;
  handleRoleChange: (role: IRole) => void;
}

const RoleForm = ({ role, handleRoleChange }: IRoleFormProps) => {
  // 중첩 속성 업데이트 함수
  const updateNestedValue = <T,>(path: string, value: T) => {
    const keys = path.split('.');
    const newRole = produce(role, (draft) => {
      let current: Record<string, unknown> = draft;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]] as Record<string, unknown>;
      }
      current[keys[keys.length - 1]] = value;
    });
    handleRoleChange(newRole);
  };

  const resetRole = () => {
    handleRoleChange({
      experience: {
        years: 0,
        title: '',
        isArchitect: false,
        domains: [],
        specialties: [],
      },
      techStack: {
        languages: [],
        frameworks: [],
        cloudPlatforms: [],
        cloudServices: [],
        messaging: [],
        infrastructure: [],
        monitoring: [],
        tools: [],
      },
      architecture: {
        designPrinciples: [],
        architecturePatterns: [],
      },
      etc: {
        operationalConcerns: [],
        deploymentStrategies: [],
        customization: [],
      },
    });
  };

  return (
    <Container className="h-full p-0 divide-y">
      <Header
        title="EDITOR"
        actions={[
          {
            type: 'custom',
            children: (
              <button className="text-sm text-gray-500 hover:text-gray-700" onClick={resetRole}>
                Reset
              </button>
            ),
          },
        ]}
      />
      <SectionDrawer title="EXPERIENCE" subtitle="Select the experience of the role">
        <>
          <SectionRow
            title="Years"
            value={
              <Input
                type="number"
                value={role.experience?.years ?? 0}
                onChange={(e) => updateNestedValue('experience.years', Number(e.target.value))}
                min={0}
                max={50}
              />
            }
          />
          <SectionRow
            title="Title"
            value={
              <Input
                type="text"
                value={role.experience?.title ?? ''}
                onChange={(e) => updateNestedValue('experience.title', e.target.value)}
              />
            }
          />
          <SectionRow
            title="Is Architect"
            value={
              <Checkbox
              checked={role.experience?.isArchitect ?? false}
                onCheckedChange={(checked) => updateNestedValue('experience.isArchitect', checked)}
              />
            }
          />
          <SectionRow
            title="Domains"
            value={
              <TagInput
                options={ROLE_CONSTANTS.DOMAINS}
                value={role.experience?.domains ?? []}
                onChange={(selected) => updateNestedValue('experience.domains', selected)}
              />
            }
          />
          <SectionRow
            title="Specialties"
            value={
              <TagInput
                options={[]}
                value={role.experience?.specialties ?? []}
                onChange={(selected) => updateNestedValue('experience.specialties', selected)}
              />
            }
          />
        </>
      </SectionDrawer>
      <SectionDrawer title="TECHNICAL STACK" subtitle="Select the technical stack of the role">
        <>
          <SectionRow
            title="Languages"
            value={
              <TagInput
                options={ROLE_CONSTANTS.LANGUAGES}
                value={role.techStack?.languages ?? []}
                onChange={(selected) => updateNestedValue('techStack.languages', selected)}
              />
            }
          />
          <SectionRow
            title="Frameworks"
            value={
              <TagInput
                options={ROLE_CONSTANTS.FRAMEWORKS}
                value={role.techStack?.frameworks ?? []}
                onChange={(selected) => updateNestedValue('techStack.frameworks', selected)}
              />
            }
          />
          <SectionRow
            title="Cloud Platforms"
            value={
              <TagInput
                options={ROLE_CONSTANTS.CLOUD_PLATFORMS}
                value={role.techStack?.cloudPlatforms ?? []}
                onChange={(selected) => updateNestedValue('techStack.cloudPlatforms', selected)}
              />
            }
          />
          <SectionRow
            title="Cloud Services"
            value={
              <TagInput
                options={ROLE_CONSTANTS.CLOUD_SERVICES}
                value={role.techStack?.cloudServices ?? []}
                onChange={(selected) => updateNestedValue('techStack.cloudServices', selected)}
              />
            }
          />
          <SectionRow
            title="Messaging"
            value={
              <TagInput
                options={ROLE_CONSTANTS.MESSAGING}
                value={role.techStack?.messaging ?? []}
                onChange={(selected) => updateNestedValue('techStack.messaging', selected)}
              />
            }
          />
          <SectionRow
            title="Infrastructure"
            value={
              <TagInput
                options={ROLE_CONSTANTS.INFRASTRUCTURE}
                value={role.techStack?.infrastructure ?? []}
                onChange={(selected) => updateNestedValue('techStack.infrastructure', selected)}
              />
            }
          />
          <SectionRow
            title="Monitoring"
            value={
              <TagInput
                options={ROLE_CONSTANTS.MONITORING}
                value={role.techStack?.monitoring ?? []}
                onChange={(selected) => updateNestedValue('techStack.monitoring', selected)}
              />
            }
          />
          <SectionRow
            title="Tools"
            value={
              <TagInput
                options={ROLE_CONSTANTS.TOOLS}
                value={role.techStack?.tools ?? []}
                onChange={(selected) => updateNestedValue('techStack.tools', selected)}
              />
            }
          />
        </>
      </SectionDrawer>
      <SectionDrawer title="ARCHITECTURE" subtitle="Select the architecture of the role">
        <>
          <SectionRow
            title="Design Principles"
            value={
              <TagInput
                options={ROLE_CONSTANTS.DESIGN_PRINCIPLES}
                value={role.architecture?.designPrinciples ?? []}
                onChange={(selected) => updateNestedValue('architecture.designPrinciples', selected)}
              />
            }
          />
          <SectionRow
            title="Architecture Patterns"
            value={
              <TagInput
                options={[]}
                value={role.architecture?.architecturePatterns ?? []}
                onChange={(selected) => updateNestedValue('architecture.architecturePatterns', selected)}
              />
            }
          />
        </>
      </SectionDrawer>
      <SectionDrawer title="ETC" subtitle="Select the etc of the role">
        <>
          <SectionRow
            title="Operational Concerns"
            value={
              <TagInput
                options={[]}
                value={role.etc?.operationalConcerns ?? []}
                onChange={(selected) => updateNestedValue('etc.operationalConcerns', selected)}
              />
            }
          />
          <SectionRow
            title="Deployment Strategies"
            value={
              <TagInput
                options={[]}
                value={role.etc?.deploymentStrategies ?? []}
                onChange={(selected) => updateNestedValue('etc.deploymentStrategies', selected)}
              />
            }
          />
          <SectionRow
            title="Customization"
            value={
              <TagInput
                options={[]}
                value={role.etc?.customization ?? []}
                onChange={(selected) => updateNestedValue('etc.customization', selected)}
              />
            }
          />
        </>
      </SectionDrawer>
      <SectionDrawer title="DEVELOPMENT APPROACH" subtitle="Select the development approach of the role">
        <>
          <SectionRow
            title="Style"
            value={
              <Select
                defaultValue={role.developmentApproach?.style ?? ''}
                onValueChange={(value) => updateNestedValue('developmentApproach.style', value)}
              >
                <Select.Trigger>
                  <Select.Value placeholder="Select a currency" />
                </Select.Trigger>
                <Select.Content>
                  {ROLE_CONSTANTS.STYLES.map((item) => (
                    <Select.Item key={item} value={item}>
                      {item}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select>
            }
          />
          <SectionRow
            title="Includes Code Examples"
            value={
              <Checkbox
                checked={role.developmentApproach?.includesCodeExamples ?? false}
                onCheckedChange={(checked) => updateNestedValue('developmentApproach.includesCodeExamples', checked)}
              />
            }
          />
          <SectionRow
            title="Includes Trade-Offs"
            value={
              <Checkbox
                checked={role.developmentApproach?.includesTradeOffs ?? false}
                onCheckedChange={(checked) => updateNestedValue('developmentApproach.includesTradeOffs', checked)}
              />
            }
          />
          <SectionRow
            title="Includes Testing Strategies"
            value={
              <Checkbox
                checked={role.developmentApproach?.includesTestingStrategies ?? false}
                onCheckedChange={(checked) =>
                  updateNestedValue('developmentApproach.includesTestingStrategies', checked)
                }
              />
            }
          />
        </>
      </SectionDrawer>
      <SectionDrawer title="RESPONSE STYLE" subtitle="Select the response style of the role">
        <>
          <SectionRow
            title="Tone"
            value={
              <Select
                defaultValue={role.responseStyle?.tone ?? ''}
                onValueChange={(value) => updateNestedValue('responseStyle.tone', value)}
              >
                <Select.Trigger>
                  <Select.Value placeholder="Select a currency" />
                </Select.Trigger>
                <Select.Content>
                  {ROLE_CONSTANTS.TONES.map((item) => (
                    <Select.Item key={item} value={item}>
                      {item}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select>
            }
          />
          <SectionRow
            title="Focus"
            value={
              <Select
                defaultValue={role.responseStyle?.focus ?? ''}
                onValueChange={(value) => updateNestedValue('responseStyle.focus', value)}
              >
                <Select.Trigger>
                  <Select.Value placeholder="Select a currency" />
                </Select.Trigger>
                <Select.Content>
                  {ROLE_CONSTANTS.FOCUS.map((item) => (
                    <Select.Item key={item} value={item}>
                      {item}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select>
            }
          />
          <SectionRow
            title="Includes"
            value={
              <TagInput
                options={ROLE_CONSTANTS.INCLUDES}
                value={role.responseStyle?.includes ?? []}
                onChange={(selected) => updateNestedValue('responseStyle.includes', selected)}
              />
            }
          />
        </>
      </SectionDrawer>
    </Container>
  );
};

export default RoleForm;
