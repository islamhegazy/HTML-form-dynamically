import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  form = new FormGroup({});
  model = {};
  setFields :boolean = false;

  fields = [
    {
      key: 'input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Input placeholder',
        required: true,
        change: (field, event) => {console.log(event)}
      }
    },
    {
      key: 'textarea',
      type: 'textarea',
      templateOptions: {
        label: 'Textarea',
        placeholder: 'Textarea placeholder',
        required: true,
        rows:3
      }
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      templateOptions: {
        label: 'Checkbox',
      }
    },
    {
      key: 'select',
      type: 'select',
      templateOptions: {
        label: 'Select',
        placeholder: 'Select placeholder',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]
      }
    },
    {
      key: 'radio',
      type: 'radio',
      templateOptions: {
        label: 'Radio',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]
      }
    }
  ];

  JSONFields: FormlyFieldConfig [] = JSON.parse(JSON.stringify(this.fields));

  constructor(private cdRef: ChangeDetectorRef){}

  ngOnInit(): void {
    this.setFields = true;
    this.cdRef.detectChanges(); 
  }
  onChangeJson(e){
   try {
    this.fields =JSON.parse(e.target.value);
    this.JSONFields= JSON.parse(JSON.stringify(this.fields));
   } catch (error) {
     
   }
  }

  onSubmit(){
    if (this.form.valid) {
      console.log(this.form)
    }
  }
}
