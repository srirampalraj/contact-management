export interface ContactData {
  contact_name: String;
  company_name: String;
  payment_terms: Number;
  currency_id: String;
  website: String;
  custom_fields: [
    {
      value: String;
      index: Number;
    }
  ];
  billing_address: {
    attention: String;
    address: String;
    street2: String;
    state_code: String;
    city: String;
    state: String;
    zip: String;
    country: String;
    fax: String;
    phone: String;
  };
  shipping_address: {
    attention: String;
    address: String;
    street2: String;
    state_code: String;
    city: String;
    state: String;
    zip: String;
    country: String;
    fax: String;
    phone: String;
  };
  contact_persons: [
    {
      salutation: String;
      first_name: String;
      last_name: String;
      email: String;
      phone: String;
      mobile: String;
      is_primary_contact: boolean;
    }
  ];
  default_templates: {
    invoice_template_id: String;
    invoice_template_name: String;
    estimate_template_id: String;
    estimate_template_name: String;
    creditnote_template_id: String;
    creditnote_template_name: String;
    invoice_email_template_id: String;
    invoice_email_template_name: String;
    estimate_email_template_id: String;
    estimate_email_template_name: String;
    creditnote_email_template_id: String;
    creditnote_email_template_name: String;
  };
  language_code: String;
  notes: String;
  vat_reg_no: String;
  country_code: String;
  vat_treatment: String;
  place_of_contact: String;
  gst_no: String;
  gst_treatment: String;
  tax_authority_name: String;
  tax_exemption_code: String;
  avatax_exempt_no: String;
  avatax_use_code: String;
  tax_exemption_id: String;
  tax_authority_id: String;
  tax_id: String;
  is_taxable: String;
  facebook: String;
  twitter: String;
}

export interface ContactPerson {
  designation: any;
  name: any;
  contactNo: any;
}
