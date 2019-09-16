export namespace Acl {

    /* General interface(s) */
    interface Permissions {
        canWrite?: boolean;
        canRead?: boolean;
    }

    /* File related interface(s) */
    interface File {
        caption?: string;
        mimetype?: string;
        source: string;
        size?: number;
        lastModified?: number;
    }

    /* Image related interface(s) */
    interface Image extends File{
        id?: number;
        type?: 'url' | 'data';
    }

    /* Pagination related interface(s) */
    interface Pagination {
        current: number;
        totalPages: number;
        visualOffset: number;
    }

    /* Progress bar related interface(s) */
    interface Progress {
        total: number;
        showLabel?: boolean;
        stepTime?: number;
    }

    /* Popup related interface(s) */
    interface Popup {
        persistant: boolean;
        title: string;
        message: string;
        buttons: Acl.PopupButton[];
        dialog?: PopupDialog;
    }

    interface PopupDialog {
        inputs: PopupDialogInput[];
    }

    interface PopupDialogInput {
        required: boolean;
        name: string;
        type: 'date' | 'email' | 'number' | 'text';
        placeholder?: string;
    }

    interface PopupButton {
        label: string;
        required?: boolean;
        class?: string;
        action?(data: any, event?: UIEvent): void;
    }

}