import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-jobdescriptionpage',
  templateUrl: './jobdescriptionpage.component.html',
  styleUrls: ['./jobdescriptionpage.component.scss']
})
export class JobdescriptionpageComponent implements AfterViewInit {
  form: FormGroup;
  response: any;
  formSubmitted: boolean = false;
  modal: bootstrap.Modal | null = null;
  thankYouModal: bootstrap.Modal | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      location: ['', Validators.required],
      enrollmentId: [''],
      file: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (['pdf', 'csv'].includes(fileExtension)) {
        this.form.patchValue({ file });
        this.form.get('file')?.setErrors(null);
      } else {
        this.form.patchValue({ file: null });
        this.form.get('file')?.setErrors({ fileType: 'Please provide PDF and CSV files only' });
      }
    }
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.form.valid) {
      this.response = this.form.value;
      console.log('Form data to submit:', this.response);

      // Reset form and hide main modal
      this.form.reset();
      this.formSubmitted = false;
      this.hideModal();

      // Show thank you modal
      this.showThankYouModal();
    } else {
      console.log('Form is invalid, cannot submit');
    }
  }

  ngAfterViewInit() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }

    const thankYouModalElement = document.getElementById('thankYouModal');
    if (thankYouModalElement) {
      this.thankYouModal = new bootstrap.Modal(thankYouModalElement);

      // Add event listener to remove backdrop when the thank you modal is closed
      thankYouModalElement.addEventListener('hidden.bs.modal', () => {
        this.removeModalBackdrop();
      });
    }
  }

  showModal() {
    if (this.modal) {
      this.modal.show();
    }
  }

  hideModal() {
    if (this.modal) {
      this.modal.hide();
    }
  }

  showThankYouModal() {
    if (this.thankYouModal) {
      this.thankYouModal.show();
    }
  }

  hideThankYouModal() {
    if (this.thankYouModal) {
      this.thankYouModal.hide();
    }
  }

  removeModalBackdrop() {
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }
}
