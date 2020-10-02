import { FundosHeaderComponent } from './fundos-header/fundos-header.component';
import { FundoDetailComponent } from './fundo-detail/fundo-detail.component';
import { Observable } from 'rxjs';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Fundo } from './../core/models/fundo.model';
import { DatabaseService } from './../core/services/database.service';
import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { FundoState } from './../state/fundo.state.app';
import * as fromFundo from './../state/index';
import * as fromFiltros from '../filtros/state/index';
import * as actions from '../state/fundo.actions';
@Component({
  selector: 'app-lista-fundos',
  templateUrl: './lista-fundos.component.html',
  styleUrls: ['./lista-fundos.component.scss']
})
export class ListaFundosComponent implements OnInit {

  fundos: Fundo[];

  componentsRef: { index: number, componentRef: ComponentRef<any> }[] = new Array<{index: number, componentRef: ComponentRef<any>}>();

  @ViewChildren('detail', { read: ViewContainerRef }) entrys: QueryList<ViewContainerRef>;

  constructor(
    private databaseService: DatabaseService,
    private resolver: ComponentFactoryResolver,
    private store: Store<FundoState>
    ) { }

    ngOnInit(): void {
      this.store.dispatch(new actions.LoadFundos());
      this.store.pipe(select(fromFundo.getFundos)).subscribe(
        fundos => this.fundos = fundos
      );
      this.store.pipe(select(fromFiltros.getFiltros)).subscribe(
        filtros => {
          this.store.pipe(
            select(fromFundo.getFundosBase),
            map((fundos: Fundo[]) => {
              if(!fundos){
                return;
              }
              return fundos
                .filter((fundo: Fundo) => +fundo.operability.minimum_initial_application_amount > filtros.minima )
                .filter((fundo: Fundo) => {
                  const strSearch = filtros.busca.toLowerCase();
                  return fundo.simple_name.toLowerCase().indexOf(strSearch) >= 0;
                } );
              })
            ).subscribe(
            res => this.store.dispatch(new actions.SaveFundos(res) )
          );
        }
      )
  }

  closeHideDetailComponent(fundo: Fundo, index: number): void {
    const existRef = this.componentsRef.find((refs) => {
      return refs.index === index;
    } );
    if (!existRef){
      const refDetail = this.entrys.find((refs, i) => i === index);
      refDetail.clear();
      const factory = this.resolver.resolveComponentFactory(FundoDetailComponent);
      const componentRef = refDetail.createComponent(factory);
      componentRef.instance.data = fundo;
      this.componentsRef.push( { index, componentRef } );
    } else {
      existRef.componentRef.destroy();
      for (let i = 0; i < this.componentsRef.length; i++ ){
        if (this.componentsRef[i].index === index){
          this.componentsRef.splice(i, 1);
          break;
        }
      }
    }
  }
}
