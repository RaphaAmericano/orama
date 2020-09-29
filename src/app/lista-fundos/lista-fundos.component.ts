import { FundosHeaderComponent } from './fundos-header/fundos-header.component';
import { FundoDetailComponent } from './fundo-detail/fundo-detail.component';
import { Observable } from 'rxjs';
import { Fundo } from './../core/models/fundo.model';
import { DatabaseService } from './../core/services/database.service';
import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';

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
    // TODO: corrigir o bug do index que nao esta adicionando corretamente
    
    // console.log(this.componentsRef);
    // this.componentsRef.map(
    //   ref => console.log(ref)
    // )
    const existRef = this.componentsRef.find((refs) => {
      // console.log('ref index',refs.index)
      // console.log('index :',index)
      return refs.index === index
    } );
    console.log(existRef);
    if(!existRef){
      const refDetail = this.entrys.find((refs, i) => i === index);
      refDetail.clear();
      const factory = this.resolver.resolveComponentFactory(FundoDetailComponent);
      const componentRef = refDetail.createComponent(factory);
      componentRef.instance.data = fundo;
      this.componentsRef.push( { index, componentRef } );
    } else {
      existRef.componentRef.destroy();
      for(let i = 0; i < this.componentsRef.length; i++ ){
        console.log(this.componentsRef[i]);
        console.log(this.componentsRef[i].index === index);
        if(this.componentsRef[i].index === index){
          console.log(i);
          this.componentsRef.splice(i, 1);
        }
      }
      // const position = this.componentsRef.indexOf(existRef);
      // console.log(position);
      // this.componentsRef.splice(position, 1);
    }
    console.log(this.componentsRef);
  }

}
