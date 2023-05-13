import OBR, {
    buildLabel,
    InteractionManager,
    Label,
    ToolContext,
    ToolEvent,
    ToolIcon,
    ToolMode,
} from '@owlbear-rodeo/sdk';

export default class Mode implements ToolMode {

    readonly id: string = 'uk.co.davidsev.coords/mode';
    readonly icons: ToolIcon[] = [{
        icon: '/icon.svg',
        label: 'Coords',
        filter: {
            activeTools: ['uk.co.davidsev.coords'],
        },
    }];
    private interaction?: InteractionManager<Label> = undefined;
    private timeout?: NodeJS.Timeout = undefined;

    private createLabel (x: number, y: number): Label {
        return buildLabel()
            .plainText(`${x}, ${y}`)
            .strokeColor('#FFFFFF')
            .position({ x, y })
            .locked(true)
            .disableHit(true)
            .layer('POPOVER')
            .build();
    }

    async onToolMove (context: ToolContext, event: ToolEvent) {
        // Make the label if we need to.
        if (!this.interaction)
            this.interaction = await OBR.interaction.startItemInteraction(this.createLabel(event.pointerPosition.x, event.pointerPosition.y));

        // Update the label.
        const [update] = this.interaction;
        update((label: Label) => {
            label.text.plainText = `${event.pointerPosition.x}, ${event.pointerPosition.y}`;
            label.position = { x: event.pointerPosition.x, y: event.pointerPosition.y };
        });

        // Remove the label after a few seconds.  We have no way to know when the tool was deactivated, so we just use this.
        if (this.timeout)
            clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            if (this.interaction) {
                const [_, stop] = this.interaction;
                stop();
                this.interaction = undefined;
                this.timeout = undefined;
            }
        }, 3000);
    }
}
