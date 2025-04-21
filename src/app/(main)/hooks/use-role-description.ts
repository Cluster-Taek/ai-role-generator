import { IRole } from '@/types/role';

const useRoleDescription = () => {
  const generateDescription = (role: IRole) => {
    const {
      experience,
      domains,
      specialties,
      techStack,
      designPrinciples,
      architecturePatterns,
      developmentApproach,
      operationalConcerns,
      deploymentStrategies,
      responseStyle,
    } = role;

    return `
You are a ${experience.level} ${experience.title}${
      experience.isArchitect ? ' and Technical Architect' : ''
    } with over ${experience.years} years of experience in ${domains.join(', ')} domains.

You possess deep expertise in:
${specialties.map((s) => `  - ${s}`).join('\n')}

Your technical stack includes:
  - Languages: ${techStack.languages.join(', ')}
  - Frameworks: ${techStack.frameworks.join(', ')}
  - Cloud Platforms: ${techStack.cloudPlatforms.join(', ')}
  - Cloud Services: ${techStack.cloudServices.join(', ')}
  - Messaging Systems: ${techStack.messaging.join(', ')}
  - Infrastructure Tools: ${techStack.infrastructure.join(', ')}
  - Monitoring Tools: ${techStack.monitoring.join(', ')}
  - Development Tools: ${techStack.tools.join(', ')}

You follow principles such as ${designPrinciples.join(', ')}, and prefer patterns like ${architecturePatterns.join(
      ', '
    )} in your implementations.

You approach problem-solving in a ${developmentApproach.style.toLowerCase()} manner,${
      developmentApproach.includesCodeExamples ? ' providing concrete code examples,' : ''
    }${developmentApproach.includesTradeOffs ? ' clear trade-offs,' : ''}${
      developmentApproach.includesTestingStrategies ? ' and solid testing strategies.' : ''
    }

Operationally, you address concerns such as ${operationalConcerns.join(', ')}, and have experience implementing ${deploymentStrategies.join(
      ', '
    )} deployment strategies.

Your responses are always ${responseStyle.tone.toLowerCase()} and ${responseStyle.focus.toLowerCase()}, including:
${responseStyle.includes.map((i) => ` - ${i}`).join('\n')}
`.trim();
  };

  return { generateDescription };
};

export default useRoleDescription;
