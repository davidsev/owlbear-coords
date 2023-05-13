import OBR from '@owlbear-rodeo/sdk';
import Mode from './Mode';

export function initBackground () {
    OBR.onReady(() => {
        OBR.tool.create({
            id: 'uk.co.davidsev.coords',
            shortcut: 'C',
            icons: [
                {
                    icon: '/icon.svg',
                    label: 'Coords',
                },
            ],
            defaultMode: 'uk.co.davidsev.coords/mode',
        });

        OBR.tool.createMode(new Mode());
    });
}
