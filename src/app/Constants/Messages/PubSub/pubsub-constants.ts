// -----------------------------------------------------------------------
// <copyright file="pubsub-constants.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsPubSub {


// These constants are used in the app.component.ts

  static PS_USER_LOGGED_EVENT = 'userLoggedEvent';  // -> also used in main-navigation-items.component.ts , main-navigation.component.ts
  static PS_CONNECTED = 'connected'; // -> also used in simple-branch.component.ts , pubsub-hide-column.service.ts, layout-tree.service.ts
  static PS_HUB_ERROR = 'HubError';
  static PS_CLOSE = 'Close';
  static PS_BUSINESS_OBJECT_ERROR = 'BusinessObjectError';
  static PS_USER_LOGGED_STATUS_CHANGED = 'UserLogedStatusChanged'; // ->  also used in user-data-context-menu.component.ts
  static PS_TOKEN_CONFIRMATION = 'TokenConfirmation';
  static PS_USER_SUBSCRIBED_ON_MESSAGING_SERVICE_WITH_USER_ID = 'User subscribed on Messaging Service with User ID: ';
  static PS_TOKEN_EXPIRATION = 'Token expiration: ';
  static PS_TOKEN_CONFIRMATION_FAILED = 'TokenConfirmationFailed';
  static PS_REFRESH_TOKEN_STORED = 'RefreshTokenStored'; // -> also used in refresh-token.service.ts
  static PS_REFRESH_TOKEN = 'Refresh Token: ';

  // These constants are used in the business-object-form.component.ts


  static PS_STYLE_CHANGED = 'StyleChanged'; // -> also used in style-choser.component.ts
  static PS_ACTIVE_BUSINESS_OBJECT = 'activeBusinessObject';
  static PS_DELETE_OBJECT_REQUEST = 'RequestDeleteObject';
  static PS_BUSINESS_OBJECT_DELETED = 'BusinessObjectDeleted';
  static PS_DELETE_PROCESS_FAILED = 'deleteProcessFailed';

  // These constants are used in the  grid-toolbar-context-menu.components.ts

  static PS_COLUMN_ORDER_CHANGED = 'ColumnOrderChanged';  // ->  also used in business-object-grid.components.ts

  // These constants are used in the master-detail-wrapper.component.ts

  static PS_MAIN_MENU_BUTTON_TRIGGERED = 'MainMenuButtonTriggered';  // -> also used in header.component.ts
  static PS_RECEIVED_BUSINESS_OBJECT_PROPERTY_CHANGED = 'ReceivedBusinessObjectPropertyChanged';
  static PS_SUBSCRIBED_TO_LAYOUT_TREE = 'GetLayout'; //  -> also used for .......
  static PS_SUBSCRIBED_TO_OBJECT_COLLECTION_DATA_LAYOUT_TREE = 'GetLayoutTreeOfObjectCollectionDataType'; //  -> also used for .......
  static PS_SUBSCRIBED_TO_MOCK_LAYOUT_TREE = 'SubscribedToLayoutTree'; // -> needed for mock layout tree
  static PS_SUBSCRIBED_TO_BUSINESS_OBJECT_FILTER_LAYOUT = 'GetBusinessObjectFilterLayout'; //  -> also used in layout-tree.service.ts
  static PS_RECEIVED_BUSINESS_OBJECTS_LIST = 'getBusinessObjectsList'; // -> also used in pubsub-hide-column.service.ts
  static PS_RECEIVED_LOOKUP_REQUESTED_BUSINESS_OBJECT_LIST = 'getLookupRequestedBusinessObjectsList'; // ->
  static PS_NEW_BUSINESS_OBJECT_CREATED = 'CreateNewObject';
  static PS_RECEIVED_UPDATED_OBJECT = 'UpdateObjectChanges'; // UpdateObjectChanges
  static PS_SAVED_BUSINESS_OBJECT = 'RequestSaveObject';
  static PS_ROLBACK_BUSINESS_OBJECT_DONE = 'RolbackBusinessObjectDone';
  static PS_ACTIVE_BUSINESS_OBJECT_CHANGED = 'activeBusinessObjectChanged';
  static PS_ACTIVE_BUSINESS_OBJECT_BLUR_FIRED = 'activeBusinessObjectBlurFired';
  static PS_ACTIVE_BUSINESS_OBJECT_LOOKUP_FIELD_BLUR_FIRED = 'activeBusinessObjectLookupFieldBlurFired';

  static PS_COLORFULL_STATE_CHANGED = 'ColrfullStateChanged';
  static PS_SELECTED_SNACKBAR_BUTTON = 'SelectedSnackBarButton';


  // These constants are used in the business-object-grid.components.ts

  static PS_COLUMN_VISIBILITY_CHANGED = 'columnVisibilityChanged';
  static PS_TOGGLE_COLUMN_FIELD_SEARCH = 'toggleColumnFieldSearch'; // -> also used in "pubsub-search-fields.service.ts
  static PS_COLUMN_ORDER_CHANGE_REQUESTED = 'ColumnOrderChangeRequested'; // -> also used in pubsub-reorder-columns.service.ts

  // These constants are used in the grid-header-toolbar.component.ts
  static PS_SORT_COLUMN_HAPPEN = 'sortColumnHappen';

  // menu and tabs
  static PS_MENU_REQUESTED_BUSINESS_OBJECT = 'menuRequestedBusinessObject';
  static PS_REQUESTED_TAB_ITEMS = 'requestedTabItems';
  static PS_REQUESTED_FILTERS_OF_BUSINESS_OBJECT = 'requestedFiltersOfBusinessObject';

  // routes
  static PS_ROUTE_CHANGED = 'routeChanged';

  // themes
  static PS_THEME_CHANGED = 'themeChanged';
  static PS_ACCENT_COLOR_CHANGED = 'accentColorChanged';

  // globals
  static PS_GLOBALS_ENTRIES_CHANGED = 'globalsEntriesChanged';

  // meni received

  static PS_GET_MAIN_MENU_LAYOUT = 'GetMainMenuLayout';
  static PS_RECEIVED_MAIN_MANU_LAYOUT = 'GetMainMenu';

  // application layout mode changed - from desktop to mobile and vice versa
  static PS_LAYOUT_MODE_CHANGED = 'LayoutModeChanged';

  // refresh page content
  static PS_REFRESH_PAGE_CONTENT = 'RefreshPageContent';

  // trigger snack bar
  static PS_TRIGGER_SNACK_BAR = 'TriggerSnackBar';

  // hide temporary data in grid notificator
  static PS_HIDE_COLUMNS_DATA_IN_GRID_TEMPORARY = 'HideColumnsDataTemporary';
  static PS_TEST_PUBLISH = 'TestPublish';

  // trigger dialog menu of actual business object
  static PS_TRIGGER_DIALOG_MENU_OF_ACTUAL_BUSINESS_OBJECT = 'TriggerDialogMenuOfActualBusinessObject';

  static PS_PAGE_CONTEXT_MENU_FORM_FIELDS_REORDERED = 'PageContextMenuFormFieldsReordered';
  static PS_PAGE_CONTEXT_MENU_FORM_FIELDS_VISIBILITY_CHANGED = 'PageContextMenuFormFieldsVisibilityChanged';

  // change autohide state of main menu
  static PS_MAIN_MENU_AUTOHIDE_STATE_CHANGED = 'MainMenuAutohideStateChanged';

  // current pagination state changed
  static PS_PAGINATION_STATE_CHANGED = 'PaginationStateChanged';

  // activate form component on mobile view
  static PS_FORM_VIEW_ACTIVATE_MOBILE_VIEW = 'FormViewActivateMobileView';

  // update grid display data
  static PS_UPDATE_GRID_DISPLAY_DATA = 'UpdateGridDisplayData';

  // user-data-context-menu.component.ts
  static PS_ACTIVE_TABS_OBJECT = 'ActiveTabsObject';

  static PS_BUSINESS_OBJECT_FIELDS_DATA = 'BusinessObjectFieldsData';

  static PS_POPUP_FILTER_DIALOG = 'PopupFilterDialog';

  static PS_CLOSE_FILTER_DIALOG: 'CloseFilterDialog';

  static PS_INITIAL_VALUE_OF_ACTIVE_BUSINESS_OBJECT_HAS_BEEN_MODIFIED = 'InitialValueOfActiveBusinessOBjectHasBeenModified';

  static DATA_GRID_VALUE_CHANGED: 'DataGridValueChanged';

  static PS_RESET_DETAILS_FORM_VIEW_REQUESTED = 'ResetDetailsFormViewRequested';

  static PS_SAVE_BUSINESS_OBJECT_REQUESTED = 'SaveBusinessObjectRequested';

  static PS_REORDER_GRID_COLUMNS = 'ReorderGridColumns';

  static PS_REQUEST_STATE_CHANGED = 'RequestStateChanged';

  static FILTER_ACTIVE_VALUE_CHANGED = 'FilterActiveValueChanged';

// FormViewDateComponent
  static PS_ACTIVE_BUSINESS_OBJECT_DATE_SELECTED = 'ActiveBusinessObjectDateSelected';

  static PS_FORM_DATA_DATE_CHANGE = 'FormDataDateChange';

  static PS_DATE_TIME_VALUE_CHANGED = 'DateTimeValueChanged';


}


