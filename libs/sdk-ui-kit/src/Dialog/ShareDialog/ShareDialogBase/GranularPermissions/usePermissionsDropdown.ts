// (C) 2023 GoodData Corporation

import { useCallback, useState } from "react";

export const usePermissionsDropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    return { isDropdownOpen: isOpen, toggleDropdown: toggleOpen };
};
