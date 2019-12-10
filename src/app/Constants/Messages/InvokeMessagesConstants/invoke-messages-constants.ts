// -----------------------------------------------------------------------
// <copyright file="invoke-messages-constants.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsInvokeMessages {
  static TTI_BUILD_CONNECTION = 'buildConnection';
  static TTI_GET_BUSINESS_OBJECT_LIST = 'getBusinessObjectList';
  static TTI_SEND_UPDATED_BUSINESS_OBJECT = 'sendUpdatedBusinessObject';
  static TTI_SEND_BUSINESS_OBJECT_FILTER_LAYOUT_REQUEST = 'makeBusinessFilterLayoutRequest';
  static TTI_GET_LAYOUT_TREE_OF_BUSINESS_OBJECT = 'getLayoutTreeOfBusinessObject';
  static TTI_GET_MAIN_MENU_LAYOUT = 'getMainMenuLayout';
  static TTI_SAVE_USER_DEFINED_CUSTOM_LAYOUT = 'saveUserDefinedCustomLayout';
  static TTI_REQUEST_SAVE_ON_BUSINESS_OBJECT = 'requestSaveOnBusinessObject';
  static TTI_REQUEST_ROLLBACK_ON_CHANGED_BUSINESS_OBJECT = 'requestRollbackOnChangedBusinessObject';
  static TTI_CREATE_NEW_BUSINESS_OBJECT = 'createNewBusinessObject';
  static TTI_DELETE_BUSINESS_OBJECT = 'deleteBusinessObject';
  static TTI_DO_AUTHENTIFICATION_ON_MESSAGING_SERVICE_WITH_TOKEN = 'doAuthentificationOnMessagingServiceWithToken';
  static TTI_SEND_LOOKUP_REQUEST = 'getBusinessObjectListFromLookup';
  static TTI_GET_LAYOUT_TREE_OF_OBJECT_COLECTION_DATA_TYPE = 'getLayoutTreeOfObjectCollectionDataType';
}
