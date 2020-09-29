import { FundosHeaderComponent } from './fundos-header/fundos-header.component';
import { FundoDetailComponent } from './fundo-detail/fundo-detail.component';
import { Observable } from 'rxjs';
import { Fundo } from './../core/models/fundo.model';
import { DatabaseService } from './../core/services/database.service';
import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-lista-fundos',
  templateUrl: './lista-fundos.component.html',
  styleUrls: ['./lista-fundos.component.scss']
})
export class ListaFundosComponent implements OnInit, AfterViewInit {

  fundos: Fundo[];

  componentsRef: {index: number, componentRef: ComponentRef<any> }[] = new Array<{index: number, componentRef: ComponentRef<any>}>();

  @ViewChildren('detail', { read: ViewContainerRef }) entrys: QueryList<ViewContainerRef>;

  constructor(
    private databaseService: DatabaseService,
    private resolver: ComponentFactoryResolver
    ) { }

  ngOnInit(): void {
    this.databaseService.data$.subscribe(
      res => this.fundos = res
    );
  }

  ngAfterViewInit(): void {
    
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
