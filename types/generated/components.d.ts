import type { Schema, Attribute } from '@strapi/strapi';

export interface ServicesServices extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'Services';
    icon: 'apps';
  };
  attributes: {
    service: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'services.services': ServicesServices;
    }
  }
}
