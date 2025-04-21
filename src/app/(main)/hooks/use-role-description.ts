import { IRole } from '@/types/role';

const useRoleDescription = () => {
  const generateDescription = (role: IRole) => {
    const { experience, techStack, architecture, developmentApproach, etc, responseStyle } = role;

    // techStack 라인 추출 - 값이 있는 경우만 포함
    const techStackLines = [
      techStack?.languages?.length ? `  - Languages: ${techStack.languages.join(', ')}` : '',
      techStack?.frameworks?.length ? `  - Frameworks: ${techStack.frameworks.join(', ')}` : '',
      techStack?.cloudPlatforms?.length ? `  - Cloud Platforms: ${techStack.cloudPlatforms.join(', ')}` : '',
      techStack?.cloudServices?.length ? `  - Cloud Services: ${techStack.cloudServices.join(', ')}` : '',
      techStack?.messaging?.length ? `  - Messaging Systems: ${techStack.messaging.join(', ')}` : '',
      techStack?.infrastructure?.length ? `  - Infrastructure Tools: ${techStack.infrastructure.join(', ')}` : '',
      techStack?.monitoring?.length ? `  - Monitoring Tools: ${techStack.monitoring.join(', ')}` : '',
      techStack?.tools?.length ? `  - Development Tools: ${techStack.tools.join(', ')}` : '',
    ].filter(Boolean);

    const techStackBlock = techStackLines.length
      ? `Your technical stack includes:\n${techStackLines.join('\n')}\n`
      : '';

    // 경험 정보 구성
    const titlePart = experience?.title
      ? `${experience.years ? (experience.years > 5 ? 'Senior' : 'Junior') : ''} ${experience.title ?? 'Developer'}`.trim()
      : '';
    const architectPart = experience?.isArchitect ? ' and Technical Architect' : '';
    const yearsPart = experience?.years ? `with over ${experience.years} years of experience` : '';
    const domainsPart = experience?.domains?.length ? `in ${experience.domains.join(', ')} domains` : '';

    const experienceParts = [titlePart + architectPart, yearsPart, domainsPart].filter(Boolean);
    const experienceLine = experienceParts.length ? `You are a ${experienceParts.join(' ')}.` : '';

    // 전문 분야 정보
    const specialtiesBlock = experience?.specialties?.length
      ? `You possess deep expertise in:\n${experience.specialties.map((s) => `  - ${s}`).join('\n')}\n`
      : '';

    // 아키텍처 정보
    let architectureBlock = '';
    if (architecture?.designPrinciples?.length || architecture?.architecturePatterns?.length) {
      const principlesPart = architecture.designPrinciples?.length
        ? `principles such as ${architecture.designPrinciples.join(', ')}`
        : '';

      const patternsPart = architecture.architecturePatterns?.length
        ? `patterns like ${architecture.architecturePatterns.join(', ')} in your implementations`
        : '';

      const parts = [principlesPart, patternsPart].filter(Boolean);

      if (parts.length === 1) {
        architectureBlock = `You follow ${parts[0]}.\n\n`;
      } else if (parts.length === 2) {
        architectureBlock = `You follow ${parts[0]}, and prefer ${parts[1]}.\n\n`;
      }
    }

    // 개발 접근 방식
    let approachBlock = '';
    if (developmentApproach?.style) {
      approachBlock = `You approach problem-solving in a ${developmentApproach.style.toLowerCase()} manner`;

      const approachDetails = [
        developmentApproach.includesCodeExamples ? 'providing concrete code examples' : '',
        developmentApproach.includesTradeOffs ? 'clear trade-offs' : '',
        developmentApproach.includesTestingStrategies ? 'solid testing strategies' : '',
      ].filter(Boolean);

      if (approachDetails.length > 0) {
        approachBlock += `, ${approachDetails.join(', ')}.`;
      } else {
        approachBlock += '.';
      }

      approachBlock += '\n\n';
    }

    // 운영 및 배포 관련
    let operationalBlock = '';
    if (etc?.operationalConcerns?.length || etc?.deploymentStrategies?.length) {
      const concernsPart = etc.operationalConcerns?.length
        ? `address concerns such as ${etc.operationalConcerns.join(', ')}`
        : '';

      const deploymentPart = etc.deploymentStrategies?.length
        ? `have experience implementing ${etc.deploymentStrategies.join(', ')} deployment strategies`
        : '';

      const parts = [concernsPart, deploymentPart].filter(Boolean);

      if (parts.length === 1) {
        operationalBlock = `Operationally, you ${parts[0]}.\n\n`;
      } else if (parts.length === 2) {
        operationalBlock = `Operationally, you ${parts[0]}, and ${parts[1]}.\n\n`;
      }
    }

    // 응답 스타일
    let responseBlock = '';
    if (responseStyle?.tone || responseStyle?.focus) {
      const tonePart = responseStyle.tone ? `${responseStyle.tone.toLowerCase()}` : '';
      const focusPart = responseStyle.focus ? `${responseStyle.focus.toLowerCase()}` : '';

      const styleParts = [tonePart, focusPart].filter(Boolean);

      if (styleParts.length > 0) {
        responseBlock = `Your responses are always ${styleParts.join(' and ')}`;

        if (responseStyle?.includes?.length) {
          responseBlock += `, including:\n${responseStyle.includes.map((i) => ` - ${i}`).join('\n')}`;
        } else {
          responseBlock += '.';
        }
      } else if (responseStyle?.includes?.length) {
        responseBlock = `Your responses include:\n${responseStyle.includes.map((i) => ` - ${i}`).join('\n')}`;
      }
    }

    // 최종 설명 생성
    return `
${experienceLine}

${specialtiesBlock}
${techStackBlock}
${architectureBlock}${approachBlock}${operationalBlock}${responseBlock}
`.trim();
  };

  return { generateDescription };
};

export default useRoleDescription;
