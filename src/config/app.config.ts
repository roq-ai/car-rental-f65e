interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Vehicle Owner', 'End User', 'Reservation Manager'],
  tenantName: 'Organization',
  applicationName: 'Car Rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user', 'Manage organization'],
  getQuoteUrl: 'https://app.roq.ai/proposal/5bcf2a4d-2b53-4605-9b8a-f1ca3fdd75f9',
};
