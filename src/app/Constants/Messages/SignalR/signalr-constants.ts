// -----------------------------------------------------------------------
// <copyright file="signalr-constants.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsSignalR {

// These ants are used in the signal-r.service.ts
//   static SR_CONNECTED = 'connected';
//   static SR_TOKEN_CONFIRMED = 'TokenConfirmed';
//   static SR_TOKEN_CONFIRMATION = 'TokenConfirmation';
//   static SR_GET_LAYOUT_TREE = 'GetLayoutTree';
//   static SR_RECEIVED_LAYOUT_TREE = 'ReceivedLayoutTree';
//   static SR_GET_BUSSINES_OBJECT_FILTER_LAYOUT = 'GetBusinessObjectFilterLayout';
//   static SR_RECEIVED_BUSSINES_OBJECT_FILTER_LAYOUT = 'ReceivedBusinessObjectFilterLayout';
//   static SR_SUBSCRIBED_TO_BUSINESS_OBJECT = 'SubscribedToBusinessObject';
  static SR_RECEIVED_BUSINESS_OBJECT_PROPERTY_CHANGED = 'ReceivedBusinessObjectPropertyChanged';
  // static SR_HUB_EXCEPTION = 'HubException: ';
  // static SR_UNKNOWN_ERRROR_OCCURED_ON_BACKEND = 'Unknown Errror Occured On BackEnd\n';
  static SR_GET_BUSINESS_OBJECT_LIST = 'getBusinessObjectsList';
  // static SR_RECEIVED_BUSINESS_OBJECTS_LIST = 'ReceivedBusinessObjectList';
  // static SR_REQUESTED_OBJECT_UPDATE = 'RequestedObjectUpdate';
  static SR_RECEIVED_UPDATED_OBJECT = 'UpdateObjectChanges';
  static SR_REQUESTED_OBJECT_SAVE = 'RequestSaveObject';
  static SR_REQUESTED_LAYOUT_SAVE = 'ModifyLayout';
  // static SR_SAVED_BUSINESS_OBJECT = 'RequestSaveObject';
  // static SR_SAVED_CUSTOM_LAYOUT = 'SavedCustomLayout';
  // static SR_HUB_ERROR = 'HubError';
  static SR_REQUESTED_OBJECT_ROLBACK = 'RollbackChanges';
  // static SR_ROLBACK_BUSINESS_OBJECT_DONE = 'RolbackBusinessObjectDone';
  static SR_CREATE_NEW_OBJECT_REQUEST = 'CreateNewObject';
  // static SR_NEW_OBJECT_CREATED_DONE = 'NewObjectCreatedDone';
  // static SR_NEW_BUSINESS_OBJECT_CREATED = 'NewBusinessObjectCreated';
  static SR_DELETE_OBJECT_REQUEST = 'RequestDeleteObject';
  static SR_BUSINESS_OBJECT_DELETED = 'BusinessObjectDeleted';
  static SR_WEB_CLIENT_REQUEST = 'WebClientRequest';
  static SR_TOKEN_CONFIRMATION_FAILED = 'TokenConfirmationFailed';
  // static SR_GET_MAIN_MENU_LAYOUT = 'GetMainMenuLayout';
  // static SR_RECEIVED_MAIN_MENU_LAYOUT = 'ReceivedMainMenuLayout';
  static SR_LOCK_FOR_EDITING = 'LockForEditing';
  static SR_UNLOCK_FOR_EDITING = 'UnlockForEditing';
  static SR_TEST_REQUEST = 'TestRequest';
  static SR_TEST_RESPONSE = 'TestNotify';
  // static RECEIVED_BE_RESPONSE  = 'ReceivedMessage';
  static SR_DEFAULT_REQUEST_ROUTE = 'RequestFromFe';
  static SR_DEFAULT_RESPONSE_METHOD = 'ReceivedMessage';
}





























