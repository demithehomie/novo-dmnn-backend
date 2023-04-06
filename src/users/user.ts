export type Users = {
    $schema: string
    type: string
    properties: {
      name: {
        type: string
      }
      cpfCnpj: {
        type: string
      }
      email: {
        type: string
      }
      phone: {
        type: string
      }
      mobilePhone: {
        type: string
      }
      address: {
        type: string
      }
      addressNumber: {
        type: string
      }
      complement: {
        type: string
      }
      province: {
        type: string
      }
      postalCode: {
        type: string
      }
      externalReference: {
        type: string
      }
      notificationDisabled: {
        type: string
      }
      additionalEmails: {
        type: string
      }
      municipalInscription: {
        type: string
      }
      stateInscription: {
        type: string
      }
      observations: {
        type: string
      }
      groupName: {
        type: string
      }
    }
    required: Array<string>
  }
  