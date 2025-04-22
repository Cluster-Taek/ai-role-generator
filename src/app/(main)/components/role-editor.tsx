'use client';

import RoleForm from './role-form';
import RolePreview from './role-preview';
import RoleTemplate from './role-template';
import { TwoColumnPage } from '@/medusa/layout/pages/two-column-page';
import { IRole } from '@/types/role';
import { Container } from '@medusajs/ui';
import { useCallback, useState } from 'react';
import HowToUse from './how-to-use';

const RoleEditor = () => {
  const [role, setRole] = useState<IRole>({
    experience: {
      years: 15,
      title: 'Backend Developer',
      isArchitect: true,
      domains: ['E-commerce', 'Logistics'],
      specialties: [
        'Inventory Management',
        'Order/Payment Optimization',
        'Shipment Tracking',
        'Promotion Engine',
        'Settlement System',
      ],
    },
    techStack: {
      languages: ['Java', 'Kotlin'],
      frameworks: [
        'Spring Boot 3.x',
        'Spring Cloud',
        'Spring Data JPA',
        'Spring Security',
        'Spring Batch',
        'Spring WebFlux',
      ],
      cloudPlatforms: ['AWS'],
      cloudServices: ['ECS', 'EKS', 'Lambda', 'Aurora', 'DynamoDB', 'ElastiCache'],
      messaging: ['Kafka', 'SQS', 'EventBridge'],
      infrastructure: ['Terraform', 'Docker', 'Kubernetes'],
      monitoring: ['Prometheus', 'Grafana', 'DataDog'],
      tools: ['IntelliJ IDEA', 'Gradle', 'Maven', 'JUnit', 'Mockito', 'JMeter', 'SonarQube'],
    },
    architecture: {
      designPrinciples: ['Clean Code', 'SOLID', 'DDD', 'TDD'],
      architecturePatterns: [
        'Layered Architecture',
        'Domain-Driven Design',
        'Reactive',
        'Event-Driven',
        'Batch Processing',
      ],
    },
    etc: {
      operationalConcerns: [
        'Peak Season Handling',
        'Disaster Recovery',
        'Data Consistency',
        'Concurrent Processing',
        'Transaction Management',
        'Caching Strategy',
      ],
      deploymentStrategies: ['Zero-Downtime', 'Blue/Green', 'Canary'],
    },
    responseStyle: {
      tone: 'Practical',
      focus: 'Implementation',
      includes: ['Code Examples', 'Testing Strategies', 'Configuration Guidance'],
    },
  });

  const handleRoleChange = useCallback((role: IRole) => {
    setRole(role);
  }, []);

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className='flex flex-row justify-between'>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold"> AI Agent Role Generator for Vibe Coding</h1>
        <p className="text-sm text-gray-500">Generate a role description for a new role in your ai agent.</p>
      </div>
        <HowToUse />
      </div>
      <TwoColumnPage>
        <Container className="h-full p-0 divide-y">
          <RolePreview role={role} />
        </Container>
        <div className="flex flex-col gap-2">
          <Container className="h-full p-0 divide-y">
            <RoleTemplate onSelect={handleRoleChange} />
          </Container>
          <Container className="h-full p-0 divide-y">
            <RoleForm role={role} handleRoleChange={handleRoleChange} />
          </Container>
        </div>
      </TwoColumnPage>
    </div>
  );
};

export default RoleEditor;
