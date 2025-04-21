/**
 * 경력 및 직급 관련 정보
 */
export interface IExperience {
  years: number; // 전체 경력 (예: 15)
  level: string; // 직급 수준 (예: Senior, Lead)
  title: string; // 직무명 (예: Backend Developer, DevOps Engineer)
  isArchitect: boolean; // Architect 역할 포함 여부
}

/**
 * 기술 스택 관련 정보
 */
export interface ITechStack {
  languages: string[]; // 사용 언어 (예: ['Java', 'Kotlin'])
  frameworks: string[]; // 주요 프레임워크 (예: ['Spring Boot', 'Spring Batch'])
  cloudPlatforms: string[]; // 클라우드 플랫폼 (예: ['AWS'])
  cloudServices: string[]; // 클라우드 서비스 (예: ['ECS', 'Lambda', 'Aurora'])
  messaging: string[]; // 메시징 시스템 (예: ['Kafka', 'SQS'])
  infrastructure: string[]; // 인프라 도구 (예: ['Terraform', 'Docker'])
  monitoring: string[]; // 모니터링 도구 (예: ['Prometheus', 'Grafana'])
  tools: string[]; // 개발 및 QA 도구 (예: ['IntelliJ', 'JUnit', 'SonarQube'])
}

/**
 * 개발 접근 방식 관련 정보
 */
export interface IDevelopmentApproach {
  style: string; // 문제 해결 스타일 (예: 'Systematic', 'Pragmatic')
  includesCodeExamples: boolean; // 코드 예시 포함 여부
  includesTestingStrategies: boolean; // 테스트 전략 포함 여부
  includesTradeOffs: boolean; // 트레이드오프 설명 포함 여부
}

/**
 * 응답 스타일 관련 정보
 */
export interface IResponseStyle {
  tone: string; // 응답 어조 (예: 'Practical', 'Insightful')
  focus: string; // 초점 (예: 'Implementation-Focused', 'Real-World')
  includes: string[]; // 응답 포함 요소 (예: ['Code Examples', 'Testing Strategies', 'Configuration Guidance'])
}

/**
 * 역할 설명 생성을 위한 사용자 입력 데이터 구조
 */
export interface IRole {
  experience: IExperience;
  domains: string[]; // 전문 도메인 목록 (예: ['E-commerce', 'Logistics'])
  specialties: string[]; // 세부 전문 분야 (예: ['Inventory Management', 'Promotion Engine'])
  techStack: ITechStack;
  designPrinciples: string[]; // 설계 원칙 (예: ['Clean Code', 'SOLID', 'DDD', 'TDD'])
  architecturePatterns: string[]; // 아키텍처 패턴 (예: ['Layered', 'Event-Driven', 'Reactive'])
  developmentApproach: IDevelopmentApproach;
  operationalConcerns: string[]; // 운영상 고려사항 (예: ['Disaster Recovery', 'Data Consistency'])
  deploymentStrategies: string[]; // 배포 전략 (예: ['Zero-Downtime', 'Blue/Green'])
  responseStyle: IResponseStyle;
}
