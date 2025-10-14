import { Routes } from '@angular/router';
import { Imprint } from './imprint/imprint';
import { DataProtection } from './data-protection/data-protection';
import { MainContent } from './main-content/main-content';
import { SideContent } from './side-content/side-content';

export const routes: Routes = [
    {'path':"", 'component': MainContent  },
    {'path':"info", 'component': SideContent, children: [
        {'path':"imprint", 'component': Imprint },
        {'path':"data-protection", 'component': DataProtection },
    ]},
 
];
