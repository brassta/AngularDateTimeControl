// -----------------------------------------------------------------------
// <copyright file="productionEnviromentPlaceholders.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {Injectable} from '@angular/core';

@Injectable()
export class ProductionEnviromentPlaceholders {

// These constants are used in the enviroment.prod.ts
  static PATH_TO_LOGIN = '{$PATH_TO_LOGIN}';
  static MESSAGING_SERVICE_URL = '{$MESSAGING_SERVICE_URL}';
  static REDIRECT_URL = '{REDIRECT_URL}';
  static REFRESH_TOKEN_PATH = '{$REFRESH_TOKEN_PATH}';
}
