// -----------------------------------------------------------------------
// <copyright file="pubsub.service.spec.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import { TestBed } from '@angular/core/testing';

import { PubsubService } from './pubsub.service';

describe('Service: PubsubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created PubsubService', () => {
    const service: PubsubService = TestBed.get(PubsubService);
    expect(service).toBeTruthy();
  });
});
