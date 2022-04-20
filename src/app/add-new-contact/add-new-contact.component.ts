import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss'],
})
export class AddNewContactComponent implements OnInit {
  editContact = false;
  contactId: any;
  contactForm!: FormGroup;
  two = ['billing_address', 'shipping_address'];

  constructor(private actiRoute: ActivatedRoute, private fb: FormBuilder) {}

  none(s: any) {}

  ngOnInit(): void {
    this.editContact =
      this.actiRoute.snapshot.routeConfig?.path === 'add-contact'
        ? false
        : true;
    if (this.editContact) {
      this.actiRoute.paramMap.subscribe((params) => {
        this.contactId = params.get('id');
      });
    }
    this.buildForm();
    this.submitForm();
  }

  submitForm() {
    console.log(this.contactForm);
  }

  buildForm() {
    this.contactForm = this.fb.group({
      contact_name: ['', Validators.required],
      company_name: [''],
      payment_terms: [''],
      currency_id: ['460000000000097'],
      website: [
        '',
        Validators.pattern(
          '(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})'
        ),
      ],
      custom_fields: this.fb.group([
        {
          value: [''],
          index: [''],
        },
      ]),
      billing_address: this.fb.group({
        attention: [''],
        address: [''],
        street2: [''],
        state_code: [''],
        city: [''],
        state: [''],
        zip: [''],
        country: [''],
        fax: [''],
        phone: [''],
      }),
      shipping_address: this.fb.group({
        attention: [''],
        address: [''],
        street2: [''],
        state_code: [''],
        city: [''],
        state: [''],
        zip: [''],
        country: [''],
        fax: [''],
        phone: [''],
      }),
      contact_persons: this.fb.group([
        {
          salutation: [''],
          first_name: [''],
          last_name: [''],
          email: [''],
          phone: [''],
          mobile: [''],
          is_primary_contact: [false],
        },
      ]),
      default_templates: this.fb.group({
        invoice_template_id: [''],
        invoice_template_name: [''],
        estimate_template_id: [''],
        estimate_template_name: [''],
        creditnote_template_id: [''],
        creditnote_template_name: [''],
        invoice_email_template_id: [''],
        invoice_email_template_name: [''],
        estimate_email_template_id: [''],
        estimate_email_template_name: [''],
        creditnote_email_template_id: [''],
        creditnote_email_template_name: [''],
      }),
      language_code: [''],
      notes: [''],
      vat_reg_no: [''],
      country_code: [''],
      vat_treatment: [''],
      place_of_contact: [''],
      gst_no: [''],
      gst_treatment: [''],
      tax_authority_name: [''],
      tax_exemption_code: [''],
      avatax_exempt_no: [''],
      avatax_use_code: [''],
      tax_exemption_id: [''],
      tax_authority_id: [''],
      tax_id: [''],
      is_taxable: [''],
      facebook: [''],
      twitter: [''],
    });
  }
}
