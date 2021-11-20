import { TestBed } from '@angular/core/testing';

import { BalanceStoreService } from './balance.store';

describe('BalanceStoreService', () => {
  let service: BalanceStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setNombreOrganizacion',()=>{
    it('debe asignar el nombre entregado en el store',()=>{
      const nombre_esperado = 'nueva organizacion'
      let nombre = ''
      service.balance$.subscribe( balance => nombre = balance.nombre_organizacion)
      
      service.setNombreOrganizacion(nombre_esperado)
      
      expect(nombre).toEqual(nombre_esperado)
    })


  })


});
