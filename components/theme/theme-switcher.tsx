"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button 
        isIconOnly 
        variant="light" 
        aria-label="Theme switcher"
      >
        <Icon icon="lucide:loader" className="animate-spin" width={20} height={20} />
      </Button>
    );
  }

  const getThemeIcon = () => {
    if (theme === 'dark') return "lucide:moon";
    if (theme === 'light') return "lucide:sun";
    return "lucide:monitor";
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button 
          isIconOnly 
          variant="light" 
          aria-label="Theme switcher"
        >
          <Icon icon={getThemeIcon()} width={20} height={20} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Theme options">
        <DropdownItem
          key="light"
          startContent={<Icon icon="lucide:sun" />}
          onPress={() => setTheme('light')}
          className={theme === 'light' ? "text-primary" : ""}
        >
          Light
        </DropdownItem>
        <DropdownItem
          key="dark"
          startContent={<Icon icon="lucide:moon" />}
          onPress={() => setTheme('dark')}
          className={theme === 'dark' ? "text-primary" : ""}
        >
          Dark
        </DropdownItem>
        <DropdownItem
          key="system"
          startContent={<Icon icon="lucide:monitor" />}
          onPress={() => setTheme('system')}
          className={theme === 'system' ? "text-primary" : ""}
        >
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
