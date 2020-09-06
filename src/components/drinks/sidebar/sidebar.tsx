import React, { useState } from 'react';
import './sidebar.scss';
import ShowInfoButton from './show_info_button/showInfoButton';
import SideBarButton from './sidebar_button/sidebarButton';

function Sidebar() {
    const [visibilityClass, setVisibilityClass] = useState<string>('');

    const shownClass: string = 'sidebar-shown';
    const toggleVisibility = (): void => {
        setVisibilityClass(visibilityClass === '' ? shownClass : '');
    }

    return (
        <aside className={`sidebar ${visibilityClass}`}>
            <div className="sidebar-relative">
                <ShowInfoButton onClick={ toggleVisibility }/>
                <SideBarButton topic="About site" />
                <SideBarButton topic="How to use" />
                <SideBarButton topic="Contact" />
                <SideBarButton topic="Donations" />
            </div>
        </aside>
    )
}

export default Sidebar;
