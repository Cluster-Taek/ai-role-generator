import { Button, Container, FocusModal, Heading, Text } from '@medusajs/ui';
import React from 'react';

//#region Styled Component

//#endregion

const HowToUse = () => {
  return (
    <FocusModal>
      <FocusModal.Trigger asChild>
        <Button className="h-fit" size="small" variant="secondary">
          How to use
        </Button>
      </FocusModal.Trigger>
      <FocusModal.Content>
        <FocusModal.Header />
        <FocusModal.Body className="flex flex-col items-center py-16 overflow-scroll">
          <div className="flex flex-col w-full max-w-3xl gap-y-8">
            <div className="flex flex-col gap-y-1">
              <Heading level="h3">Why use AI Agent Role Generator?</Heading>
              <Text className="text-ui-fg-subtle">
                AI Agent Role Generator is a tool that helps you generate role descriptions for new roles in your AI
                agent.
                <br /> It provides a structured and comprehensive way to define the role, including experience,
                technology stack, architecture, and operational concerns.
                <br /> You can receive better responses in less time by leveraging agent roles.
              </Text>
            </div>
            <div className="flex flex-col gap-y-1">
              <Heading level="h3">Use In Cursor</Heading>
              <Text className="text-ui-fg-subtle">
                1. Cursor -{'>'} Preferences -{'>'} Cursor Settings -{'>'} Rules <br />
                2. Just add your own role description
                <Container className="w-full mt-2">
                  <img src="/images/cursor.png" alt="cursor" />
                </Container>
              </Text>
            </div>
          </div>
        </FocusModal.Body>
      </FocusModal.Content>
    </FocusModal>
  );
};

export default HowToUse;
