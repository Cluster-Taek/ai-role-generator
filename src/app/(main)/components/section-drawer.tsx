import { Header } from '@/medusa/components/header';
import { ChevronDownMini, ChevronUpMini } from '@medusajs/icons';
import React, { useState } from 'react';

interface ISectionDrawerProps {
  title: string;
  subtitle: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

//#region Styled Component

//#endregion

const SectionDrawer = (props: ISectionDrawerProps) => {
  const { title, subtitle, defaultOpen = false, children } = props;
  const [open, setOpen] = useState(defaultOpen);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  const chevronIcon = open ? <ChevronUpMini /> : <ChevronDownMini />;
  return (
    <>
      <div>
        <Header
          title={title}
          subtitle={subtitle}
          actions={[
            {
              type: 'custom',
              children: chevronIcon,
            },
          ]}
          onClick={toggleOpen}
        />
      </div>
      {open && children}
    </>
  );
};

export default SectionDrawer;
