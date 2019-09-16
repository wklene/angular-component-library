import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Acl } from '../../types';

@Component({
    selector: 'acl-uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
    private file: Acl.File;
    public fileForm: FormGroup;
    public target: any;
    public dragover = false;
    @Input() public accept = '*';
    @Output() public upload: EventEmitter<Acl.File> = new EventEmitter();

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.fileForm = this.formBuilder.group({
            file: [null, [Validators.required]]
        });
    }

    public uploadFile = (): void => {
        this.upload.emit(this.file);
    }

    public onFileChange = (event: any) => {

        if (event.target.files.length > 0) {
            this.target = event.target.files[0];

            // currently fixed max size
            if (this.target.size > 10000000) {
                delete this.target;
                this.fileForm.reset();
                this.fileForm.markAsDirty();
                return false;
            }

            // create new Acl.File
            this.file = { mimetype: this.target.type, caption: this.target.name, source: '', size: this.target.size, lastModified: this.target.lastModified };

            const reader = new FileReader();
            reader.readAsDataURL(this.target);

            reader.onload = () => {
                const bstring: string = reader.result as string;
                this.file.source = bstring.substr(bstring.indexOf('base64,') + 7); //save base64 encoded source on the file
                this.uploadFile();
            };
            reader.onerror = () => {
                console.log('there are some problems');
            };

        } else {
            delete this.target;
            this.fileForm.reset();
        }
    }

}
