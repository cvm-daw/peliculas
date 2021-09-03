import { TestBed } from '@angular/core/testing';

import { BusquedaPeliculaService } from './busqueda-pelicula.service';

describe('BusquedaPeliculaService', () => {
  let service: BusquedaPeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaPeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
